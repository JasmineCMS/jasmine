<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Auth\SessionGuard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Inertia\Support\Header;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Models\JasmineUserApiToken;
use Symfony\Component\HttpFoundation\Response;

class ApiMiddleware
{
    /**  @param Closure(Request): (Response) $next */
    public function handle(Request $request, Closure $next): Response {
        $request->headers->set('Accept', 'application/json');

        $key = 'jasmine.api.auth.' . $request->ip();
        $maxAttempts = (int)config('jasmine.auth.rate_limits.api.attempts', 5);
        $decay = (int)config('jasmine.auth.rate_limits.api.decay', 300);

        $hit = function () use ($key, $maxAttempts, $decay): void {
            if ($maxAttempts > 0) RateLimiter::hit($key, $decay);
        };

        if ($maxAttempts > 0 && RateLimiter::tooManyAttempts($key, $maxAttempts)) abort(429);

        // Cast up front: hash() takes a strict string, and bearerToken() is nullable.
        $bearer = (string)$request->bearerToken();
        abort_unless($bearer !== '', 401);

        // `token` holds only a display prefix; the credential lives in `hash`. SHA-256 keeps this
        // a single indexed lookup — a salted KDF would force a scan-and-verify over every row, and
        // buys nothing against a 196-bit random secret.
        $token = JasmineUserApiToken::firstWhere('hash', hash('sha256', $bearer));

        if (!$token || ($token->expires_at && $token->expires_at < now())) {
            $hit();
            abort(401);
        }

        /** @var SessionGuard $guard */
        $guard = AuthController::guard();

        if (!$user = $guard->getProvider()->retrieveById($token->jasmine_user_id)) {
            $hit();
            abort(401);
        }
        $guard->setUser($user);

        $token->forceFill(['last_used_at' => now()])->saveQuietly();

        $request->attributes->set('jasmine_api', true);
        $request->headers->set(Header::INERTIA, 'true');

        return $next($request);
    }
}
