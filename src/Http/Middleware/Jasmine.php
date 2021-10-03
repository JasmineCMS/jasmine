<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Jasmine\Jasmine\Bread\Translatable;

class Jasmine
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
        $this->localize();

        /** @var Response $response */
        $response = $next($request);

        $response = $this->noIndex($response);

        return $response;
    }

    private function localize()
    {
        if ($locale = request('locale')) session(['jasmine.locale' => $locale]);

        app()->setLocale(session('jasmine.locale', config('jasmine.locale')));
    }

    /**
     * @param Response $response
     *
     * @return Response
     */
    private function noIndex($response)
    {
        if (method_exists($response, 'header')) $response->header('X-Robots-Tag', 'noindex, nofollow');

        return $response;
    }
}
