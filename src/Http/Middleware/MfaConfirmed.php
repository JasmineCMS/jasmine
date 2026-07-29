<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Models\JasmineUser;
use Symfony\Component\HttpFoundation\Response;

class MfaConfirmed
{
    /**  @param Closure(Request): (Response) $next */
    public function handle(Request $request, Closure $next): Response {
        /** @var JasmineUser|null $user */
        $user = AuthController::guard()->user();

        if ($user === null) return $next($request);

        if ($user->hasTwoFactor()) {
            if ($request->session()->get('jasmine.2fa_confirmed') === $user->getKey()) {
                return $next($request);
            }

            return redirect()->guest(route('jasmine.2fa'));
        }

        // No second factor enrolled: when one is required, the profile page
        // (where enrollment lives) stays reachable and everything else lands there.
        if (static::requiredFor($user) && !$request->routeIs('jasmine.profile.*')) {
            return redirect()->route('jasmine.profile.show');
        }

        return $next($request);
    }

    /**
     * Whether the MFA requirement applies to this user's current session.
     * Keyed to the user like `jasmine.2fa_confirmed` — session data survives
     * login()/regenerate(), so a bare flag could leak across users.
     */
    public static function requiredFor(JasmineUser $user): bool {
        return (bool)config('jasmine.auth.mfa.required')
            && session('jasmine.sso_login') !== $user->getKey();
    }
}
