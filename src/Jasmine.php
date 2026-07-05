<?php

namespace Jasmine\Jasmine;

use Illuminate\Support\Facades\Vite;
use Jasmine\Jasmine\Registers\RegistersBreadables;
use Jasmine\Jasmine\Registers\RegistersCustomAssets;
use Jasmine\Jasmine\Registers\RegistersDashboardCards;
use Jasmine\Jasmine\Registers\RegistersLocales;
use Jasmine\Jasmine\Registers\RegistersOauth2Ssos;
use Jasmine\Jasmine\Registers\RegistersPages;
use Jasmine\Jasmine\Registers\RegistersPermissions;
use Jasmine\Jasmine\Registers\RegistersRoutes;
use Jasmine\Jasmine\Registers\RegistersSideBarMenuItems;

class Jasmine
{
    use RegistersBreadables;
    use RegistersCustomAssets;
    use RegistersDashboardCards;
    use RegistersLocales;
    use RegistersOauth2Ssos;
    use RegistersPages;
    use RegistersPermissions;
    use RegistersRoutes;
    use RegistersSideBarMenuItems;

    /**
     * @param array{
     *     component: string, props: array<string, mixed>, url: string, version: string, sharedProps: array<int, string>
     * } $inertiaPage
     */
    public function vite(array $inertiaPage): \Illuminate\Foundation\Vite {
        return Vite::useHotFile(public_path('jasmine-public/hot'))
            ->useBuildDirectory('jasmine-public/build')
            ->withEntryPoints([
                'resources/css/app.css', 'resources/js/app.ts',
                "resources/js/pages/{$inertiaPage['component']}.vue",
            ]);
    }

    public function loadUiLocale(string $locale): array {
        static $loaded = [];

        if (isset($loaded[$locale])) return $loaded[$locale];

        $read = fn(string $path): array => is_file($path)
            ? (json_decode(file_get_contents($path), true) ?? [])
            : [];

        $fallback = config('app.fallback_locale', 'en');
        // defense-in-depth vs traversal
        if (!preg_match('/^[A-Za-z_-]+$/', $locale)) $locale = $fallback;

        $pkg = rtrim(__DIR__ . '/../resources/locales', '/');
        $app = rtrim(lang_path('vendor/jasmine'), '/');

        // later args win: package is the base, app overrides it (deep, per-key);
        // the active locale sits on top of the fallback locale
        $merge = fn(string $dir): array => array_replace_recursive(
            $read("$pkg/$dir/$fallback.json"),  // package en  (ultimate base)
            $read("$app/$dir/$fallback.json"),  // app en      (app overrides en)
            $read("$pkg/$dir/$locale.json"),    // package he  (he beats any en)
            $read("$app/$dir/$locale.json"),    // app he      (wins everything)
        );

        return $loaded[$locale] = [...$merge('ui'), 'manifest' => (object)$merge('manifest')];
    }
}
