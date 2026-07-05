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

        if (!$user->hasTwoFactor() || $request->session()->get('jasmine.2fa_confirmed') === true) {
            return $next($request);
        }

        return redirect()->guest(route('jasmine.2fa'));
    }
}
