<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\PasswordBroker;
use Illuminate\Contracts\Auth\StatefulGuard;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;
use Jasmine\Jasmine\WebAuthn\WebAuthnService;
use PragmaRX\Google2FA\Google2FA;
use Symfony\Component\HttpFoundation\Response;
use Webauthn\PublicKeyCredentialRequestOptions;

class AuthController extends Controller
{
    public static function guard(): Guard|StatefulGuard {
        return Auth::guard(config('jasmine.auth.guard'));
    }

    public static function broker(): PasswordBroker {
        return Password::broker(config('jasmine.auth.broker'));
    }

    public static function passwordRule(): \Illuminate\Validation\Rules\Password {
        return \Illuminate\Validation\Rules\Password::default();
    }

    private function throttleKey(string $purpose, string $email, string $ip): string {
        return "jasmine:$purpose|" . Str::transliterate(Str::lower($email) . '|' . $ip);
    }

    private function ipThrottleKey(string $purpose, string $ip): string {
        return "jasmine:$purpose-ip|$ip";
    }

    private function ensureNotRateLimited(string $key, int $maxAttempts, string $field = 'email'): void {
        if ($maxAttempts < 1) return;

        if (!RateLimiter::tooManyAttempts($key, $maxAttempts)) return;

        $seconds = RateLimiter::availableIn($key);

        throw ValidationException::withMessages([
            $field => [trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ])],
        ])->status(Response::HTTP_TOO_MANY_REQUESTS);
    }

    public function showLogin(): InertiaResponse {
        return Inertia::render('Login');
    }

    public function login(Request $request): RedirectResponse|Response {
        $credentials = $request->validate([
            'email'    => ['required', 'email'],
            'password' => ['required'],
        ]);

        $ip = $request->ip() ?? '0.0.0.0';
        $rlKey = $this->throttleKey('login', $credentials['email'], $ip);
        $ipKey = $this->ipThrottleKey('login', $ip);

        // Per-account (email+IP) AND per-IP throttles. The IP cap blocks
        // user-enumeration / credential-spraying across many accounts from one source.
        $this->ensureNotRateLimited($rlKey, (int)config('jasmine.auth.rate_limits.login.attempts', 5));
        $this->ensureNotRateLimited($ipKey, (int)config('jasmine.auth.rate_limits.login.ip_attempts', 30));

        if (static::guard()->attempt($credentials, $request->boolean('remember'))) {
            RateLimiter::clear($rlKey);
            $request->session()->regenerate();

            // This login was not IdP-backed — drop any SSO-earned MFA exemption.
            $request->session()->forget('jasmine.sso_login');

            return Inertia::location(session('url.intended', route('jasmine.dashboard')));
        }

        RateLimiter::hit($rlKey, (int)config('jasmine.auth.rate_limits.login.decay', 60));
        RateLimiter::hit($ipKey, (int)config('jasmine.auth.rate_limits.login.ip_decay', 60));

        return back()->withErrors(['email' => trans('auth.failed')])->onlyInput('email');
    }

    public function logout(Request $request): RedirectResponse|Response {
        static::guard()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Inertia::location(route('jasmine.login'));
    }

    public function oauth2Attempt(Request $request): RedirectResponse {
        $provider = $request->route('provider');
        $sso = Jasmine::getOauth2Sso($provider);
        if ($sso === null) abort(404);

        $state = Str::random(40);
        $codeVerifier = Str::random(64);
        $codeChallenge = rtrim(strtr(base64_encode(hash('sha256', $codeVerifier, true)), '+/', '-_'), '=');

        // Namespace per provider so concurrent SSO flows in separate tabs don't clobber each other.
        $request->session()->put("jasmine_sso_state:$provider", $state);
        $request->session()->put("jasmine_sso_verifier:$provider", $codeVerifier);

        $query = http_build_query([
            'client_id'             => $sso['client_id'],
            'redirect_uri'          => route('jasmine.sso.oauth2.auth', $sso['name']),
            'response_type'         => 'code',
            'scope'                 => implode(' ', $sso['scopes'] ?? []),
            'state'                 => $state,
            'code_challenge'        => $codeChallenge,
            'code_challenge_method' => 'S256',
        ]);

        return redirect($sso['authorize_url'] . '?' . $query);
    }

    public function oauth2Auth(Request $request): RedirectResponse|Response {
        $provider = $request->route('provider');
        $state = $request->session()->pull("jasmine_sso_state:{$provider}");
        $codeVerifier = $request->session()->pull("jasmine_sso_verifier:{$provider}");

        // Provider returned an error (user denied consent, scopes refused, etc.)
        if ($request->filled('error')) {
            Log::info('OAuth2 provider returned error', [
                'provider' => $provider,
                'error'    => $request->input('error'),
            ]);

            return redirect()->route('jasmine.login')->withErrors([
                'email' => __('SSO sign-in was cancelled or failed.'),
            ]);
        }

        abort_unless(
            $state && hash_equals($state, (string)$request->input('state')),
            400,
            'Invalid OAuth state.',
        );

        $sso = Jasmine::getOauth2Sso($provider);
        if ($sso === null) abort(404);

        $authRes = Http::asForm()->connectTimeout(5)->timeout(10)->post($sso['token_url'], [
            'grant_type'    => 'authorization_code',
            'client_id'     => $sso['client_id'],
            'client_secret' => $sso['client_secret'],
            'redirect_uri'  => route('jasmine.sso.oauth2.auth', $sso['name']),
            'code'          => $request->input('code'),
            'code_verifier' => $codeVerifier,
        ]);

        if (!$authRes->ok()) {
            Log::warning('OAuth2 token exchange failed', [
                'provider' => $sso['name'],
                'status'   => $authRes->status(),
            ]);
            abort(403);
        }

        $userData = ($sso['userDataCallback'])($authRes->body());

        // Guard the userDataCallback's contract — a missing/empty email would otherwise
        // query for `email IS NULL` and could match the first such row.
        if (empty($userData['email']) || !filter_var($userData['email'], FILTER_VALIDATE_EMAIL)) {
            Log::warning('OAuth2 userDataCallback returned invalid email', [
                'provider' => $sso['name'],
            ]);
            abort(403);
        }

        $user = JasmineUser::where('email', $userData['email'])->first();

        if (!$user) {
            $allowCreate = $sso['allowCreate'] instanceof \Closure
                ? ($sso['allowCreate'])($userData) : $sso['allowCreate'];

            if (!$allowCreate) return redirect()
                ->route('jasmine.login')
                ->withErrors(['email' => __('Account creation via SSO is not permitted.')]);

            $user = JasmineUser::create([
                'name'     => $userData['name'],
                'email'    => $userData['email'],
                'admin'    => (bool)($userData['admin'] ?? false),
                'password' => Str::random(64),
            ]);
        }

        static::guard()->login($user);
        $request->session()->regenerate();

        // The exemption reflects the most recent login event: stamped only when this
        // provider is trusted to enforce its own MFA, cleared otherwise so a flag
        // earned through a trusted provider cannot outlive it. Keyed to the user,
        // like `jasmine.2fa_confirmed`.
        $mfaTrusted = $sso['mfaTrusted'] instanceof \Closure ? ($sso['mfaTrusted'])($userData) : $sso['mfaTrusted'];
        if ($mfaTrusted) $request->session()->put('jasmine.sso_login', $user->getKey());
        else $request->session()->forget('jasmine.sso_login');

        return Inertia::location(session('url.intended', route('jasmine.dashboard')));
    }

    public function showForgotPassword(): InertiaResponse {
        return Inertia::render('ForgotPassword');
    }

    public function forgotPassword(Request $request): RedirectResponse {
        $data = $request->validate(['email' => ['required', 'email']]);

        $ip = $request->ip() ?? '0.0.0.0';
        $rlKey = $this->throttleKey('forgot', $data['email'], $ip);
        $ipKey = $this->ipThrottleKey('forgot', $ip);

        $this->ensureNotRateLimited($rlKey, (int)config('jasmine.auth.rate_limits.forgot.attempts', 3));
        $this->ensureNotRateLimited($ipKey, (int)config('jasmine.auth.rate_limits.forgot.ip_attempts', 10));

        ResetPassword::createUrlUsing(function (Authenticatable $user, string $token) {
            return route('jasmine.password.reset', [
                'token' => $token,
                'email' => $user->email,
            ]);
        });

        $res = static::broker()->sendResetLink($data);

        // Hit the limiter regardless of outcome — INVALID_USER must look identical to a real
        // send to prevent enumeration, and RESET_THROTTLED should still count against our cap.
        RateLimiter::hit($rlKey, (int)config('jasmine.auth.rate_limits.forgot.decay', 600));
        RateLimiter::hit($ipKey, (int)config('jasmine.auth.rate_limits.forgot.ip_decay', 600));

        if ($res === Password::RESET_THROTTLED) {
            throw ValidationException::withMessages(['email' => [trans($res)]])
                ->status(Response::HTTP_TOO_MANY_REQUESTS);
        }

        return back()->with(['swal' => [
            'icon' => 'success',
            'text' => trans(Password::RESET_LINK_SENT),
        ]]);
    }

    public function showPasswordReset(Request $request): InertiaResponse {
        return Inertia::render('PasswordReset', [
            'token' => $request->route('token'),
            'email' => $request->input('email'),
        ]);
    }

    public function passwordReset(Request $request): RedirectResponse|Response {
        $data = $request->validate([
            'token'    => ['required'],
            'email'    => ['required', 'email'],
            'password' => ['required', 'confirmed', static::passwordRule()],
        ]);

        $res = static::broker()->reset($data, function (Authenticatable $user, $password) {
            $user->password = Hash::make($password);
            $user->setRememberToken(Str::random(60));
            $user->save();
            event(new PasswordReset($user));
            static::guard()->login($user);
        });

        if ($res !== Password::PASSWORD_RESET) throw ValidationException::withMessages(['email' => [trans($res)]]);

        $request->session()->regenerate();

        // This login was not IdP-backed — drop any SSO-earned MFA exemption.
        $request->session()->forget('jasmine.sso_login');

        return Inertia::location(session('url.intended', route('jasmine.dashboard')));
    }

    public function showTwoFactor(Request $request): InertiaResponse|RedirectResponse {
        /** @var JasmineUser $user */
        $user = static::guard()->user();

        if (!$user->hasTwoFactor() || session('jasmine.2fa_confirmed') === $user->getKey()) {
            return redirect()->intended(route('jasmine.dashboard'));
        }

        return Inertia::render('TwoFactorChallenge', [
            'hasOtp'      => (bool)$user->otp_secret,
            'hasWebauthn' => $user->webauthnCredentials()->exists(),
        ]);
    }

    public function otp(Request $request): RedirectResponse|Response {
        /** @var JasmineUser $user */
        $user = static::guard()->user();
        abort_unless((bool)$user->otp_secret, 404);

        $rlKey = "jasmine:otp|{$user->getAuthIdentifier()}";
        $this->ensureNotRateLimited($rlKey, (int)config('jasmine.auth.rate_limits.otp.attempts', 5), 'code');

        $request->validate(['code' => [
            'required', 'digits:6',
            function (string $attribute, mixed $value, \Closure $fail) use ($user, $rlKey) {
                $timestamp = new Google2FA()->verifyKeyNewer(
                    $user->otp_secret, $value, $user->otp_last_used?->timestamp ?? 0,
                );

                if ($timestamp === false) {
                    RateLimiter::hit($rlKey, (int)config('jasmine.auth.rate_limits.otp.decay', 900));
                    $fail("The $attribute is invalid.");

                    return;
                }

                $user->otp_last_used = Carbon::createFromTimestamp($timestamp);
                $user->save();
            },
        ]]);

        RateLimiter::clear($rlKey);
        session(['jasmine.2fa_confirmed' => $user->getKey()]);

        // NOTE: "remember this device" intentionally removed — returns with the
        // trusted-devices slice (and reads via MfaConfirmed, not a dangling cookie).

        return Inertia::location(session('url.intended', route('jasmine.dashboard')));
    }

    public function webauthnLoginOptions(Request $request, WebAuthnService $webauthn) {
        /** @var JasmineUser $user */
        $user = static::guard()->user();
        abort_unless($user->webauthnCredentials()->exists(), 404);

        $json = $webauthn->serializeOptions($webauthn->requestOptions($user));
        $request->session()->put('jasmine.webauthn_assertion', $json);

        return response()->json(json_decode($json, true));
    }

    public function webauthnLogin(Request $request, WebAuthnService $webauthn): RedirectResponse|Response {
        /** @var JasmineUser $user */
        $user = static::guard()->user();

        $rlKey = "jasmine:webauthn|{$user->getAuthIdentifier()}";
        $this->ensureNotRateLimited($rlKey, (int)config('jasmine.auth.rate_limits.webauthn.attempts', 5), 'credential');

        $data = $request->validate(['credential' => ['required', 'array']]);

        $optionsJson = $request->session()->pull('jasmine.webauthn_assertion');
        if (!$optionsJson) {
            throw ValidationException::withMessages(['credential' => trans('auth.failed')]);
        }

        $options = $webauthn->serializer()->deserialize(
            $optionsJson, PublicKeyCredentialRequestOptions::class, 'json',
        );

        try {
            $webauthn->verifyAssertion($user, json_encode($data['credential']), $options);
        } catch (\Throwable) {
            RateLimiter::hit($rlKey, (int)config('jasmine.auth.rate_limits.webauthn.decay', 900));
            throw ValidationException::withMessages(['credential' => 'Could not verify the security key.']);
        }

        RateLimiter::clear($rlKey);
        session(['jasmine.2fa_confirmed' => $user->getKey()]);

        return Inertia::location(session('url.intended', route('jasmine.dashboard')));
    }
}
