<?php

namespace Jasmine\Jasmine;

use Dedoc\Scramble\Scramble;
use Dedoc\Scramble\Support\Generator\OpenApi;
use Dedoc\Scramble\Support\Generator\SecurityScheme;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use Jasmine\Jasmine\Bread\BreadableContext;
use Jasmine\Jasmine\Console\Commands\CreateUser;
use Jasmine\Jasmine\Console\Commands\LinkPublicAssets;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Http\Middleware\Authenticate;
use Jasmine\Jasmine\Http\Middleware\FileManagerMiddleware;
use Jasmine\Jasmine\Models\JasmineUser;

class JasmineServiceProvider extends ServiceProvider
{
    public function register(): void {
        $this->app->singleton('jasmine', fn() => new Jasmine);

        $this->mergeConfigFrom(realpath(__DIR__ . '/../config/jasmine.php'), 'jasmine');
        $this->registerAuthConf();

        $this->overwriteFileManagerConfig();

        Scramble::ignoreDefaultRoutes();
    }

    public function boot(): void {
        if ($this->app->runningInConsole()) {
            $this->commands([
                CreateUser::class,
                LinkPublicAssets::class,
            ]);

            $this->publishes(
                [realpath(__DIR__ . '/../config/jasmine.php') => config_path('jasmine.php')],
                ['config', 'jasmine-config']
            );

            $this->publishes(
                [realpath(__DIR__ . '/../resources/locales/ui') => lang_path('vendor/jasmine/ui')],
                ['jasmine-locales-ui']
            );

            $this->publishes(
                [realpath(__DIR__ . '/../resources/locales/manifest') => lang_path('vendor/jasmine/manifest')],
                ['jasmine-locales-manifest']
            );
        }

        $this->loadViewsFrom(realpath(__DIR__ . '/../resources/views'), 'jasmine');

        $this->loadMigrationsFrom(realpath(__DIR__ . '/../database/migrations'));

        $jasmine = $this->app->make('jasmine');

        // routes
        $this->app->booted(function () use ($jasmine) {
            if (config('jasmine.routes.web.register')) {
                Route::middleware(config('jasmine.routes.web.middleware'))
                    ->prefix(config('jasmine.routes.web.prefix'))->group(fn() => $jasmine->routes());
            }

            if (config('jasmine.routes.api.register')) {
                $path = trim(config('jasmine.routes.api.prefix'), '/');

                Route::middleware(config('jasmine.routes.api.middleware'))
                    ->prefix($path)->group(fn() => $jasmine->apiRoutes());

                // OpenAPI
                Scramble::registerApi('jasmine', [
                    'info'    => ['version' => '1.0'],
                    'servers' => ['Jasmine API' => '/'],
                ])->routes(fn(\Illuminate\Routing\Route $r) => $r->named('jasmine.api.*'))
                    ->afterOpenApiGenerated(function (OpenApi $openApi) {
                        $openApi->secure(SecurityScheme::http('bearer'));
                    });

                Gate::define('viewApiDocs', function (?Authenticatable $user = null) {
                    return AuthController::guard()->check();
                });

                Scramble::registerUiRoute($path . '/docs', 'jasmine');
                Scramble::registerJsonSpecificationRoute($path . '/api.json', 'jasmine');
            }
        });

        $this->jasmine();
    }

    private function registerAuthConf(): void {
        $guard = config('jasmine.auth.guard');
        $provider = config('jasmine.auth.broker');

        config([
            "auth.guards.$guard"           => config("auth.guards.$guard", [
                'driver'   => 'session',
                'provider' => $provider,
            ]),
            "auth.providers.$provider"     => config("auth.providers.$provider", [
                'driver' => 'eloquent',
                'model'  => JasmineUser::class,
            ]),
            'auth.passwords.jasmine_users' => config('auth.passwords.jasmine_users', [
                'provider' => 'jasmine_users',
                'table'    => 'jasmine_password_resets',
                'expire'   => 60,
            ]),
        ]);
    }

    private function overwriteFileManagerConfig(): void {
        config()->set('file-manager.middleware', ['web', Authenticate::class, FileManagerMiddleware::class]);
        config()->set('file-manager.routePrefix', 'jasmine/file-manager');
    }

    private function jasmine(): void {
        /** @var Jasmine $jasmine */
        $jasmine = $this->app->make('jasmine');

        Route::bind('breadable',
            fn(string $v) => new BreadableContext($v, $jasmine->getBreadables()[$v] ?? abort(404))
        );

        $jasmine->registerBreadable(JasmineUser::class, false);

        $jasmine->registerSideBarMenuItem('dashboard', fn() => [
            'title'    => 'Dashboard',
            'is-route' => 'jasmine.dashboard',
            'href'     => route('jasmine.dashboard'),
            'icon'     => 'bi-speedometer2',
        ], 10);

        $jasmine->registerSideBarMenuItem('file_manager', fn() => [
            'title'    => 'File Manager',
            'href'     => route('jasmine.file-manager.show'),
            'is-route' => 'jasmine.file-manager.show',
            'icon'     => 'bi-folder2-open',
        ], 20);

        $jasmine->registerSideBarMenuItem('pages', fn() => [
            'title'    => 'Pages',
            'icon'     => 'bi-file-text',
            'children' => [],
        ], 30);

        $jasmine->registerSideBarMenuItem('jasmine', fn() => [
            'title'    => 'Jasmine',
            'icon'     => 'bi-file-text',
            'children' => [],
        ], 55);

        $jasmine->registerSideBarSubMenuItem('jasmine', 'users', fn() => [
            'title'    => 'Users',
            'href'     => route('jasmine.bread.index', JasmineUser::getBreadableKey()),
            'is-route' => ['r' => 'jasmine.bread.*', 'p' => ['breadable' => JasmineUser::getBreadableKey()]],
            'icon'     => JasmineUser::getMenuIcon(),
            'hidden'   => !AuthController::guard()->user()?->jCan('models.jasmine-users.browse'),
        ]);

        $jasmine->registerSideBarMenuItem('tools', fn() => [
            'title'    => 'Tools',
            'icon'     => 'bi-tools',
            'children' => [],
        ], 60);
    }
}
