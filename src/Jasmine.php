<?php

namespace Jasmine\Jasmine;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Vite;
use Jasmine\Jasmine\Events\JasmineNotificationsUpdated;
use Jasmine\Jasmine\Http\Middleware\MfaConfirmed;
use Jasmine\Jasmine\Models\JasmineUser;
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

    private ?array $uiLocales = null;

    public function getUiLocales(): array {
        return $this->uiLocales ??= collect([
            ...glob(realpath(__DIR__ . '/../resources/locales/ui') . '/*.json') ?: [],
            ...glob(lang_path('vendor/jasmine/ui/*.json')) ?: [],
        ])->map(fn(string $i) => basename($i, '.json'))->unique()->sort()->values()->toArray();
    }

    /** Whether notification updates are pushed over the app's broadcaster. */
    public function broadcastsNotifications(): bool {
        $setting = config('jasmine.notifications.broadcast');
        if ($setting !== null && $setting !== '') return filter_var($setting, FILTER_VALIDATE_BOOL);

        return !in_array(config('broadcasting.default'), [null, 'null', 'log'], true);
    }

    /**
     * What the notification bell needs on the client.
     *
     * @return array{poll: int, channel: ?string, echo: ?array<string, mixed>}
     */
    public function notificationsClientConfig(JasmineUser $user): array {
        $broadcasts = $this->broadcastsNotifications();
        $echo = $broadcasts ? config('jasmine.notifications.echo.' . config('broadcasting.default')) : null;

        return [
            'poll'    => max(0, (int)config('jasmine.notifications.poll')),
            'channel' => $broadcasts ? JasmineNotificationsUpdated::channelName($user) : null,
            'echo'    => is_array($echo) && !empty($echo['key'])
                ? [...$echo, 'authEndpoint' => route('jasmine.broadcasting.auth')]
                : null,
        ];
    }

    /** Authorizes `jasmine.user.{id}`: only that user, signed in to Jasmine and past MFA. */
    public function registerNotificationChannel(): void {
        Broadcast::channel('jasmine.user.{id}',
            fn($user, string $id) => $user instanceof JasmineUser
                && (string)$user->getKey() === $id
                && MfaConfirmed::satisfiedBy($user),
            ['guards' => [config('jasmine.auth.guard')]]
        );
    }

    /** Push the new unread count to the user's open tabs, when broadcasting is on. */
    public function notificationsChanged(JasmineUser $user): void {
        if (!$this->broadcastsNotifications()) return;

        // a broadcaster outage must not break whatever sent the notification
        try {
            JasmineNotificationsUpdated::dispatch($user);
        } catch (\Throwable $e) {
            report($e);
        }
    }
}
