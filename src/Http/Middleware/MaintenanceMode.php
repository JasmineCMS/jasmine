<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Exceptions\MaintenanceModeException;

class MaintenanceMode
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @param int                      $time
     *
     * @return mixed
     */
    public function handle($request, Closure $next, $time)
    {
        if (\Auth::guard(config('jasmine.auth.guard'))->guest()) {
            throw new MaintenanceModeException($time, null);
        }

        return $next($request);
    }
}
