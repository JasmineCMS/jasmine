<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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
        /** @var JasmineUserApiToken $token */
        $token = JasmineUserApiToken::firstWhere('token', $request->bearerToken());
        if (!$token) abort(401);

        // check if expired
        if ($token->expires_at && $token->expires_at < now()) abort(401);

        Auth::guard(config('jasmine.auth.guard'))->loginUsingId($token->jasmine_user_id);

        $token->update(['last_used_at' => now()]);

        return $next($request);
    }
}
