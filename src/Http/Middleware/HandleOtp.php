<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Jasmine\Jasmine\Models\JasmineUser;

class HandleOtp
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse) $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        /** @var JasmineUser $user */
        $user = Auth::guard(config('jasmine.auth.guard'))->user();

        if ($user->otp_secret) {
            if (!session('jasmine.otp_verified') && $request->hasCookie('jasmine_otp_remember')) {
                session([
                    'jasmine.otp_verified' => $user->otp_remember_token === $request->cookie('jasmine_otp_remember'),
                ]);
            }

            if (!session('jasmine.otp_verified')) return redirect()->route('jasmine.otp');
        }

        return $next($request);
    }
}
