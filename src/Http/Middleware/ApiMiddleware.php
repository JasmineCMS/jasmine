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

        if (RateLimiter::tooManyAttempts($key, 5)) abort(429);

        abort_unless($request->bearerToken(), 401);

        $token = JasmineUserApiToken::firstWhere('token', $request->bearerToken());

        if (!$token || ($token->expires_at && $token->expires_at < now())) {
            RateLimiter::hit($key, 60 * 5);
            abort(401);
        }

        /** @var SessionGuard $guard */
        $guard = AuthController::guard();

        if (!$user = $guard->getProvider()->retrieveById($token->jasmine_user_id)) {
            RateLimiter::hit($key, 60 * 5);
            abort(401);
        }
        $guard->setUser($user);

        $token->forceFill(['last_used_at' => now()])->saveQuietly();

        $request->attributes->set('jasmine_api', true);
        $request->headers->set(Header::INERTIA, 'true');

        return $next($request);
    }
}
