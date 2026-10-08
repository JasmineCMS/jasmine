<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Symfony\Component\HttpFoundation\Response;

/**
 * Signs a Jasmine user out after `session.lifetime` minutes without real activity.
 *
 * Every request re-saves the session, which pushes back its expiry in every
 * driver, so background requests (notification polls) would keep an open tab
 * signed in forever. Passive routes are let through without counting as activity.
 */
class EnforceIdleTimeout
{
    public const string KEY = 'jasmine.last_activity';

    /** Route names that don't count as activity. */
    public const array PASSIVE = ['jasmine.notifications.unread'];

    /** @param Closure(Request): (Response) $next */
    public function handle(Request $request, Closure $next): Response {
        $guard = AuthController::guard();
        if (!$guard->check()) return $next($request);

        $session = $request->session();
        $last = $session->get(self::KEY);
        $lifetime = (int)config('session.lifetime') * 60;

        if (is_int($last) && $lifetime > 0 && now()->getTimestamp() - $last > $lifetime) {
            $guard->logout();
            $session->invalidate();
            $session->regenerateToken();

            throw new AuthenticationException(
                'Unauthenticated.', [config('jasmine.auth.guard')], route('jasmine.login')
            );
        }

        if (!$request->routeIs(...self::PASSIVE) || !is_int($last)) {
            $session->put(self::KEY, now()->getTimestamp());
        }

        return $next($request);
    }
}
