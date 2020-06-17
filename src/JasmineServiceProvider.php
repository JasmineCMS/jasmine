<?php


namespace Jasmine\Jasmine;


use Illuminate\Config\Repository;
use Illuminate\Routing\Router;
use Illuminate\Support\Arr;
use Illuminate\Support\ServiceProvider;
use Jasmine\Jasmine\Console\Commands\CreateUser;
use Jasmine\Jasmine\Console\Commands\LinkPublicAssets;
use Jasmine\Jasmine\Console\Commands\Migrate;
use Jasmine\Jasmine\Http\Middleware\Authenticate;
use Jasmine\Jasmine\Http\Middleware\MaintenanceMode;

class JasmineServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        require_once __DIR__ . '/../helpers.php';

        $this->app->singleton('jasmine', function () {
            return new Jasmine();
        });

        if ($this->app->runningInConsole()) {
            $this->registerConsoleCommands();
        }
    }

    /**
     * Bootstrap services.
     *
     * @param Router $router
     *
     * @return void
     */
    public function boot(Router $router)
    {
        $this->mergeConfigFrom(__DIR__ . '/../config/auth.php', 'auth');

        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'jasmine');
        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang');

        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'jasmine');

        $router->aliasMiddleware('jasmineAuth', Authenticate::class);
        $router->aliasMiddleware('jasmineMaintenanceMode', MaintenanceMode::class);

    }

    private function registerConsoleCommands()
    {
        $this->commands([
            CreateUser::class,
            LinkPublicAssets::class,
            Migrate::class,
        ]);
    }

    /**
     * Merge the given configuration with the existing configuration.
     *
     * @param string $path
     * @param string $key
     *
     * @return void
     */
    protected function mergeConfigFrom($path, $key)
    {
        /** @var Repository $repo */
        $repo = $this->app['config'];

        $config = $repo->get($key, []);
        $repo->set($key, $this->mergeConfig(require $path, $config));
    }


    /**
     * Merges the configs together and takes multi-dimensional arrays into account.
     *
     * @param array $original
     * @param array $merging
     *
     * @return array
     */
    protected function mergeConfig(array $original, array $merging)
    {
        $array = array_merge($original, $merging);
        foreach ($original as $key => $value) {
            if (!is_array($value)) {
                continue;
            }
            if (!Arr::exists($merging, $key)) {
                continue;
            }
            if (is_numeric($key)) {
                continue;
            }
            $array[$key] = $this->mergeConfig($value, $merging[$key]);
        }
        return $array;
    }

}
