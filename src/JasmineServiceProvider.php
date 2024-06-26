<?php


namespace Jasmine\Jasmine;


use Alexusmai\LaravelFileManager\Services\ConfigService\ConfigRepository;
use Illuminate\Config\Repository;
use Illuminate\Routing\Router;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\ServiceProvider;
use Jasmine\Jasmine\Console\Commands\CreateUser;
use Jasmine\Jasmine\Console\Commands\LinkPublicAssets;
use Jasmine\Jasmine\Console\Commands\ModelMake;
use Jasmine\Jasmine\Console\Commands\PageMake;
use Jasmine\Jasmine\Http\Middleware\Authenticate;
use Jasmine\Jasmine\Models\JasmineUser;

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

        $this->app->bind(ConfigRepository::class, FmConfigRepository::class);
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
        $jasmine->registerInterfaceLocale('he', __DIR__ . '/../resources/lang/he.json');

        $jasmine->registerBreadable(JasmineUser::class, false);

        $jasmine->registerSideBarMenuItem('dashboard', fn() => [
            'title'    => 'Dashboard',
            'is-route' => 'jasmine.dashboard',
            'href'     => route('jasmine.dashboard'),
            'icon'     => 'bi-speedometer2',
        ]);

        $jasmine->registerSideBarMenuItem('file_manager', fn() => [
            'href'     => route('jasmine.fm.show'),
            'is-route' => 'jasmine.fm.show',
            'title'    => 'File Manager',
            'icon'     => 'bi-folder2-open',
        ]);

        $jasmine->registerSideBarMenuItem('pages', fn() => [
            'title'    => 'Pages',
            'icon'     => 'bi-file-text',
            'children' => [],
        ]);

        $jasmine->registerSideBarMenuItem('jasmine', fn() => [
            'title'    => 'Jasmine',
            'icon'     => 'bi-file-text',
            'children' => [],
        ], 55);

        $jasmine->registerSideBarSubMenuItem('jasmine', 'users', function () {
            return [
                'title'    => 'Users',
                'href'     => route('jasmine.bread.index', JasmineUser::getBreadableKey()),
                'is-route' => ['r' => 'jasmine.bread.*', 'p' => ['breadableName' => JasmineUser::getBreadableKey()]],
                'icon'     => JasmineUser::getMenuIcon(),
                'hidden'   => !Auth::guard(config('jasmine.guard'))
                    ->user()?->jCan('models.jasmine-users.browse'),
            ];
        });

        $jasmine->registerSideBarMenuItem('tools', fn() => [
            'title'    => 'Tools',
            'icon'     => 'bi-tools',
            'children' => [],
        ], 60);
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
