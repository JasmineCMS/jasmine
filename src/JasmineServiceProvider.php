<?php


namespace Jasmine\Jasmine;


use Illuminate\Config\Repository;
use Illuminate\Routing\Router;
use Illuminate\Support\Arr;
use Illuminate\Support\ServiceProvider;
use Jasmine\Jasmine\Console\Commands\CreateUser;
use Jasmine\Jasmine\Console\Commands\LinkPublicAssets;
use Jasmine\Jasmine\Console\Commands\ModelMake;
use Jasmine\Jasmine\Console\Commands\PageMake;
use Jasmine\Jasmine\Http\Middleware\Authenticate;

class JasmineServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('jasmine', fn() => new Jasmine());
        
        if ($this->app->runningInConsole()) $this->registerConsoleCommands();
        
        $this->jasmine(app('jasmine'));
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
        $this->loadMigrationsFrom(__DIR__ . '/../database/migrations');
        
        $this->publishes([
            __DIR__ . '/../config/jasmine.php' => config_path('jasmine.php'),
        ]);
        
        $this->mergeConfigFrom(__DIR__ . '/../config/auth.php', 'auth');
        
        $this->mergeConfigFrom(__DIR__ . '/../config/jasmine.php', 'jasmine');
        
        $this->loadTranslationsFrom(__DIR__ . '/../resources/lang', 'jasmine');
        $this->loadJsonTranslationsFrom(__DIR__ . '/../resources/lang');
        
        $this->loadViewsFrom(__DIR__ . '/../resources/views', 'jasmine');
        
        $router->aliasMiddleware('jasmineAuth', Authenticate::class);
    }
    
    private function jasmine(Jasmine $jasmine)
    {
        $jasmine->registerSideBarMenuItem('dashboard', fn() => [
            'title'    => __('Dashboard'),
            'is-route' => 'jasmine.dashboard',
            'href'     => route('jasmine.dashboard'),
            'icon'     => 'fa-tachometer-alt',
        ]);
        
        $jasmine->registerSideBarMenuItem('file_manager', fn() => [
            'href'     => route('jasmine.fm.show'),
            'is-route' => 'jasmine.fm.show',
            'title'    => __('File Manager'),
            'icon'     => 'fa-folder',
        ]);
        
        $jasmine->registerSideBarMenuItem('pages', fn() => [
            'title'    => __('Pages'),
            'icon'     => 'fa-newspaper',
            'children' => [],
        ]);
        
        
        $jasmine->registerSideBarMenuItem('tools', fn() => [
            'title'    => __('Tools'),
            'icon'     => 'fa-tools',
            'children' => [],
        ], 60);
        
        $jasmine->registerSideBarSubMenuItem('tools', 'redirections', function () {
            return [
                'href'     => route('jasmine.redirection.index'),
                'is-route' => 'jasmine.redirection.index',
                'title'    => __('Redirections'),
            ];
        });
    }
    
    private function registerConsoleCommands()
    {
        $this->commands([
            CreateUser::class,
            LinkPublicAssets::class,
            PageMake::class,
            ModelMake::class,
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
     */
    protected function mergeConfig(array $original, array $merging): array
    {
        $array = array_merge($original, $merging);
        foreach ($original as $key => $value) {
            if (!is_array($value)) continue;
            if (!Arr::exists($merging, $key)) continue;
            if (is_numeric($key)) continue;
            
            $array[$key] = $this->mergeConfig($value, $merging[$key]);
        }
        
        return $array;
    }
}
