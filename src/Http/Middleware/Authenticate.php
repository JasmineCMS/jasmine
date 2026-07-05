<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Symfony\Component\HttpFoundation\Response;

class Authenticate
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next, string $reverse = ''): Response {
        $isAuthed = AuthController::guard()->check();
        $wantsGuest = $reverse !== '';

        if ($wantsGuest === $isAuthed) return $wantsGuest
            ? redirect()->intended(route('jasmine.dashboard'))
            : throw new AuthenticationException(
                'Unauthenticated.', [],
                $request->expectsJson() ? null : route('jasmine.login'),
            );

        return $next($request);
    }
}
