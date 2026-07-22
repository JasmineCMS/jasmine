<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Jasmine\Jasmine\Facades\Jasmine;
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
        $allowed = Jasmine::getUiLocales();
        $fallback = config('app.locale');

        if (($l = request('locale')) && in_array($l, $allowed, true)) session(['jasmine.locale' => $l]);

        $stored = session('jasmine.locale', $fallback);
        app()->setLocale(in_array($stored, $allowed, true) ? $stored : $fallback);
    }
}
