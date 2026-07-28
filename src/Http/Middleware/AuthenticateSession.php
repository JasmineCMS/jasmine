<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AuthenticateSession
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response {
        $tmp = config('auth.defaults.guard');
        $tmpRedirect = self::swapRedirect(fn() => route('jasmine.login'));

        config(['auth.defaults.guard' => config('jasmine.auth.guard')]);

        try {
            return app()->make(\Illuminate\Session\Middleware\AuthenticateSession::class)->handle($request, $next);
        } finally {
            config(['auth.defaults.guard' => $tmp]);
            self::swapRedirect($tmpRedirect);
        }
    }

    /** @return callable|null the previously registered callback */
    private static function swapRedirect(?callable $new): ?callable {
        static $prop = null;
        $prop ??= new \ReflectionProperty(\Illuminate\Session\Middleware\AuthenticateSession::class, 'redirectToCallback');

        $old = $prop->getValue();
        $prop->setValue(null, $new);

        return $old;
    }
}
