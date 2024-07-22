<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Composer\InstalledVersions;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Response as InertiaResponse;
use Inertia\Support\Header as InertiaHeader;
use Jasmine\Jasmine\Bread\Fields\FieldsManifest;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasminePage;

class ApiController extends Controller
{
    public function info()
    {
        // Check permission
        $user = Auth::guard(config('jasmine.auth.guard'))->user();
        if (!$user->jCan('api.system.info')) abort(401);

        return [
            'uname'    => php_uname(),
            'php'      => phpversion(),
            'laravel'  => app()->version(),
            'jasmine'  => InstalledVersions::getVersion('jasminecms/jasmine'),
            'db'       => match (DB::getConfig('driver')) {
                'sqlite' => 'sqlite ' . DB::select('SELECT SQLITE_VERSION() AS v')[0]?->v ?? 'N\A',
                'mariadb',
                'mysql',
                'pgsql'  => DB::select('SELECT VERSION() AS v')[0]?->v ?? 'N\A',
                'sqlsrv' => DB::select('SELECT @@version AS v')[0]?->v ?? 'N\A',
                default  => DB::getConfig('driver'),
            },
            'npm'      => Cache::remember('jasmine.info.npm', 60,
                fn() => [
                    'package.json'      => json_decode(file_get_contents(base_path('package.json'))),
                    'package-lock.json' => json_decode(file_get_contents(base_path('package-lock.json'))),
                ]
            ),
            'composer' => Cache::remember('jasmine.info.composer', 60,
                fn() => [
                    'composer.json' => json_decode(file_get_contents(base_path('composer.json'))),
                    'composer.lock' => json_decode(file_get_contents(base_path('composer.lock'))),
                ]
            ),
        ];
    }


    private function proxyInertia(string $controller, string $action)
    {
        request()->headers->set(InertiaHeader::INERTIA, true);

        $res = app()->make($controller)->{$action}();

        if ($res instanceof InertiaResponse) $res = $res->toResponse(request());

        if ($res instanceof JsonResponse) {
            $data = $res->getOriginalContent()['props'];
            return $data;
        }

        if ($res instanceof RedirectResponse) {
            $req = Request::create($res->getTargetUrl());
            /** @var Router $router */
            $router = app('router');
            $route = $router->getRoutes()->match($req);

            if (!str_starts_with($route->getName(), 'jasmine.')) abort(204);

            $newUrl = route(
                preg_replace('/^jasmine\./', 'jasmine.api.', $route->getName()),
                $route->parameters()
            );

            $res->setTargetUrl($newUrl);
        }

        return $res;
    }


    public function breadList(): array
    {
        return array_filter(
            array_keys(Jasmine::getBreadables()),
            fn($key) => Auth::guard(config('jasmine.auth.guard'))
                ->user()->jCan('models.' . $key . '.browse')
        );
    }

    public function breadIndex()
    {
        return $this->proxyInertia(BreadController::class, 'index');
    }

    public function breadEdit()
    {
        return $this->proxyInertia(BreadController::class, 'edit');
    }

    public function breadReorder()
    {
        return $this->proxyInertia(BreadController::class, 'reorder');
    }

    public function breadSave()
    {
        return $this->proxyInertia(BreadController::class, 'save');
    }

    public function breadDelete()
    {
        return $this->proxyInertia(BreadController::class, 'delete');
    }


    public function pageList(): array
    {
        $tmp = new class extends JasminePage {
            public static function fieldsManifest(): FieldsManifest { return new FieldsManifest([]); }
        };

        return $tmp::pluck('url')->filter(
            fn($slug) => Auth::guard(config('jasmine.auth.guard'))
                ->user()->jCan('pages.' . $slug . '.read')
        )->toArray();
    }

    public function pageEdit()
    {
        return $this->proxyInertia(PageController::class, 'edit');
    }

    public function pageSave()
    {
        return $this->proxyInertia(PageController::class, 'save');
    }
}