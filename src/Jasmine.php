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

    /**
     * A manifest label translated to the ui locale, the way the client's useLabel() reads it:
     * the id under every ordered subset of its scope, most specific first, the `manifest.` tier
     * ahead of the bare one; an untranslated identifier is humanized, written-out text kept.
     *
     * @param string $id stable identifier (column data, action name, …), may inline scope via dots
     * @param string ...$scope context segments, entity first: (entity, type)
     */
    public function label(string $id, string ...$scope): string {
        if ($id === '') return '';

        $messages = json_decode(json_encode($this->loadUiLocale(app()->getLocale())), true) ?? [];
        $lookup = function (string $id, array $scope) use ($messages): ?string {
            $n = count($scope);
            $subsets = [];
            for ($mask = (1 << $n) - 1; $mask >= 0; $mask--) {
                $subset = [];
                for ($i = 0; $i < $n; $i++) if ($mask & (1 << $i)) $subset[] = $scope[$i];
                $subsets[] = $subset;
            }
            // most segments first; ties keep their order (usort is stable)
            usort($subsets, fn($a, $b) => count($b) <=> count($a));

            $base = array_map(fn($s) => implode('.', [...$s, $id]), $subsets);

            foreach ([...array_map(fn($k) => "manifest.$k", $base), ...$base] as $key) {
                $hit = $messages;
                foreach (explode('.', $key) as $seg) {
                    if (!is_array($hit) || !array_key_exists($seg, $hit)) continue 2;
                    $hit = $hit[$seg];
                }
                if (is_string($hit)) return $hit;
            }

            return null;
        };

        // text rather than an identifier: its full stops are punctuation, not scope
        if (preg_match('/\s/u', $id)) return str_contains($id, '.') ? $id : ($lookup($id, $scope) ?? $id);

        if (str_contains($id, '.')) {
            $parts = explode('.', $id);
            $id = array_pop($parts);
            $scope = [...array_filter($scope, fn($s) => $s !== ''), ...$parts];
        }

        return $lookup($id, $scope) ?? implode(' ', array_map(
            fn($w) => mb_strtoupper(mb_substr($w, 0, 1)) . mb_substr($w, 1),
            preg_split('/[.\-_]|(?<=[a-z0-9])(?=[A-Z])/', $id, -1, PREG_SPLIT_NO_EMPTY),
        ));
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
