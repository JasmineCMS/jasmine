<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AppMiddleware
{
    /**  @param Closure(Request): (Response) $next */
    public function handle(Request $request, Closure $next): Response {
        $this->localize();

        $response = $next($request);

        return $response;
    }

    private function localize(): void {
        if ($locale = request('locale')) session(['jasmine.locale' => $locale]);
        app()->setLocale(session('jasmine.locale', config('app.locale')));
    }
}
