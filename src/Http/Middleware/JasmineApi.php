<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Jasmine\Jasmine\Models\JasmineUserApiToken;

class JasmineApi
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (RateLimiter::tooManyAttempts('jasmine.api.auth.' . $request->ip(), 5)) abort(403);

        /** @var JasmineUserApiToken $token */
        $token = JasmineUserApiToken::firstWhere('token', $request->bearerToken());

        if (!$token || ($token->expires_at && $token->expires_at < now())) {
            RateLimiter::increment('jasmine.api.auth.' . $request->ip(), 60 * 5);
            abort(401);
        }

        Auth::guard(config('jasmine.auth.guard'))->loginUsingId($token->jasmine_user_id);

        $token->update(['last_used_at' => now()]);

        return $next($request);
    }
}
