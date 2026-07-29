<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Jasmine\Jasmine\Models\JasmineUser;
use Jasmine\Jasmine\Models\JasmineWebauthnCredential;
use Jasmine\Jasmine\WebAuthn\WebAuthnService;
use ParagonIE\ConstantTime\Base64UrlSafe;
use PragmaRX\Google2FA\Google2FA;
use Webauthn\Exception\AuthenticatorResponseVerificationException;
use Webauthn\PublicKeyCredentialCreationOptions;

class ProfileController extends Controller
{
    public function show(Request $request) {
        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        return Inertia::render('Profile', [
            'user'     => [
                'name'  => $user->name,
                'email' => $user->email,
            ],
            'otp'      => [
                'enabled' => (bool)$user->otp_secret,
                ...session('otp_profile', ['secret' => null, 'url' => null]),
            ],
            'webauthn' => [
                'credentials' => $user->webauthnCredentials()->orderByDesc('id')->get()
                    ->map(fn(JasmineWebauthnCredential $c) => [
                        'id'           => $c->id,
                        'name'         => $c->name,
                        'created_at'   => $c->created_at,
                        'last_used_at' => $c->last_used_at,
                    ]),
            ],
            'tokens'   => $user->apiTokens()->orderByDesc('id')->get(),
        ]);
    }

    public function save(Request $request) {
        $data = $request->validate([
            '_sec' => ['required', Rule::in([
                'details', 'password', 'otp', 'deleteWebauthn',
                'createToken', 'updateToken', 'deleteToken',
            ])],
        ]);

        return $this->{'save' . ucfirst($data['_sec'])}();
    }

    private function saveDetails() {
        $data = request()->validate(['name' => ['required', 'string', 'min:2', 'max:255']]);

        $user = $this->user();
        $user->name = $data['name'];
        $user->save();

        return back()->with('swal', $this->savedToast());
    }

    private function savePassword() {
        $data = request()->validate([
            'password'                  => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'new_password'              => ['required', 'confirmed', AuthController::passwordRule()],
            'forget_remembered_devices' => ['nullable', 'bool'],
        ]);

        $user = $this->user();
        $user->password = bcrypt($data['new_password']);
        if ($data['forget_remembered_devices'] ?? false) $user->setRememberToken(Str::random(60));
        $user->save();

        return back()->with('swal', $this->savedToast());
    }

    private function saveOtp() {
        $data = request()->validate([
            'password' => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'enabled'  => ['required', 'boolean'],
        ]);

        $user = $this->user();
        $google2fa = new Google2FA;

        // Setup: generate secret (also when the pending session secret expired mid-setup)
        if (!$user->otp_secret && $data['enabled'] && (!request('secret') || !session()->has('jasmine.2fa_secret'))) {
            $secret = $google2fa->generateSecretKey();
            session()->put('jasmine.2fa_secret', $secret);

            session()->flash('otp_profile', [
                'secret' => $secret,
                'url'    => $google2fa->getQRCodeUrl(
                    config('app.name') . ' - Jasmine',
                    $user->email, $secret,
                ),
            ]);

            return back();
        }

        // Setup: verify secret — the one this session generated, never the request's copy
        if (!$user->otp_secret && $data['enabled'] && request('secret')) {
            $secret = session('jasmine.2fa_secret');

            session()->flash('otp_profile', [
                'secret' => $secret,
                'url'    => $google2fa->getQRCodeUrl(
                    config('app.name') . ' - Jasmine',
                    $user->email, $secret,
                ),
            ]);

            request()->validate(['code' => [
                'required', 'digits:6',
                fn($a, $v, $f) => !$google2fa->verifyKey($secret, $v)
                    && $f('The ' . $a . ' is invalid.'),
            ]]);

            $user->otp_secret = $secret;
            $user->save();
            session()->forget('jasmine.2fa_secret');
            session(['jasmine.2fa_confirmed' => $user->getKey()]);

            return back()->with('swal', $this->savedToast('Two-factor authentication enabled'));
        }

        // Show QR for existing secret
        if ($user->otp_secret && $data['enabled']) {
            session()->flash('otp_profile', [
                'secret' => $user->otp_secret,
                'url'    => $google2fa->getQRCodeUrl(
                    config('app.name') . ' - Jasmine',
                    $user->email, $user->otp_secret,
                ),
            ]);

            return back();
        }

        // Disable
        if ($user->otp_secret && !$data['enabled']) {
            $user->otp_secret = null;
            $user->otp_remember_token = null;
            $user->save();
            session()->forget('jasmine.2fa_confirmed');

            return back()->with('swal', $this->savedToast('Two-factor authentication disabled'));
        }

        return back();
    }

    public function webauthnOptions(Request $request, WebAuthnService $webauthn) {
        $options = $webauthn->creationOptions($this->user());
        $json = $webauthn->serializeOptions($options);

        $request->session()->put('jasmine.webauthn_registration', $json);

        return response()->json(json_decode($json, true));
    }

    public function webauthnRegister(Request $request, WebAuthnService $webauthn) {
        $data = $request->validate([
            'password'   => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'name'       => ['required', 'string', 'min:1', 'max:255'],
            'credential' => ['required', 'array'],
        ]);

        $optionsJson = $request->session()->pull('jasmine.webauthn_registration');
        if (!$optionsJson) throw ValidationException::withMessages([
            'credential' => 'Registration expired, please try again.',
        ]);

        $options = $webauthn->serializer()->deserialize(
            $optionsJson, PublicKeyCredentialCreationOptions::class, 'json',
        );

        try {
            $source = $webauthn->verifyRegistration(json_encode($data['credential']), $options);
        } catch (AuthenticatorResponseVerificationException $e) {
            throw ValidationException::withMessages(['credential' => $e->getMessage()]);
        } catch (\Throwable) {
            throw ValidationException::withMessages(['credential' => 'Could not verify the security key.']);
        }

        $this->user()->webauthnCredentials()->create([
            'name'          => $data['name'],
            'credential_id' => Base64UrlSafe::encodeUnpadded($source->publicKeyCredentialId),
            'source'        => json_decode($webauthn->serializer()->serialize($source, 'json'), true),
        ]);

        // Possession just proven this session — treat the gate as satisfied, mirroring saveOtp().
        session(['jasmine.2fa_confirmed' => $this->user()->getKey()]);

        return back()->with('swal', $this->savedToast('Security key added'));
    }

    private function saveDeleteWebauthn() {
        $data = request()->validate([
            'password' => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'id'       => ['required', 'integer', 'min:1'],
        ]);

        $this->user()->webauthnCredentials()->findOrFail($data['id'])->delete();

        return back()->with('swal', $this->savedToast('Security key removed'));
    }

    private function saveCreateToken() {
        $data = request()->validate([
            'password'   => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'name'       => ['required', 'string', 'min:2', 'max:255'],
            'expires_at' => ['nullable', 'date', 'after:today'],
        ]);

        $plain = 'jsm_' . Str::random(33);

        $this->user()->apiTokens()->create([
            'name'       => $data['name'],
            'expires_at' => $data['expires_at'] ?? null,
            'hash'       => hash('sha256', $plain),
            'token'      => Str::substr($plain, 0, 8),
        ]);

        return back()->with('swal', [
            'icon'              => 'success',
            'title'             => 'Token created',
            'text'              => 'Copy it now — it is stored hashed and cannot be shown again.',
            'input'             => 'text',
            'inputValue'        => $plain,
            'inputAttributes'   => ['readonly' => true, 'onfocus' => 'this.select()'],
            'confirmButtonText' => 'I have copied it',
            'allowOutsideClick' => false,
            'allowEscapeKey'    => false,
        ]);
    }

    private function saveUpdateToken() {
        $data = request()->validate([
            'id'         => ['required', 'integer', 'min:1'],
            'name'       => ['required', 'string', 'min:2', 'max:255'],
            'expires_at' => ['nullable', 'date', 'after:today'],
        ]);

        $this->user()->apiTokens()->findOrFail($data['id'])->update([
            'name'       => $data['name'],
            'expires_at' => $data['expires_at'] ?? null,
        ]);

        return back()->with('swal', $this->savedToast('Token updated'));
    }

    private function saveDeleteToken() {
        $data = request()->validate(['id' => ['required', 'integer', 'min:1']]);

        $this->user()->apiTokens()->findOrFail($data['id'])->delete();

        return back()->with('swal', $this->savedToast('Token revoked'));
    }

    private function user(): JasmineUser {
        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        return $user;
    }

    private function savedToast(string $title = 'Saved!'): array {
        return [
            'toast'             => true,
            'position'          => 'top-right',
            'timer'             => 2000,
            'timerProgressBar'  => true,
            'backdrop'          => null,
            'icon'              => 'success',
            'title'             => $title,
            'showConfirmButton' => false,
        ];
    }
}
