<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Response;

class Robots
{
    /**
     * Handle an incoming request.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure                 $next
     *
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /** @var Response $response */
        $response = $next($request);

        $response->header('X-Robots-Tag', 'noindex, nofollow');

        return $response;
    }
}
