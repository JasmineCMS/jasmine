<?php

namespace Jasmine\Jasmine\Http\Middleware;

use Composer\InstalledVersions;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Middleware;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Models\JasmineUser;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'jasmine::app';

    public function version(Request $request): ?string {
        if ($request->attributes->get('jasmine_api')) return null;

        if (file_exists($manifest = public_path('jasmine-public/build/manifest.json'))) {
            return hash_file('xxh3', $manifest);
        }

        return parent::version($request);
    }

    public function share(Request $request): array {
        if ($request->attributes->get('jasmine_api')) return [];

        $data = [
            ...parent::share($request),

            '_ziggy' => Inertia::once(fn() => [
                ...(new Ziggy)->filter(['jasmine.login', 'jasmine.sso.*', 'jasmine.password.*'])->toArray(),
                'location' => $request->url(),
            ]),

            '_locale'  => app()->getLocale(),
            '_locales' => Inertia::once(fn() => collect([
                ...glob(realpath(__DIR__ . '/../../../resources/locales/ui') . '/*.json') ?: [],
                ...glob(lang_path('vendor/jasmine/ui/*.json')) ?: [],
            ])->map(fn(string $i) => basename($i, '.json'))->unique()->sort()->values()->toArray()),

            '_i18n' => Inertia::once(fn() => Jasmine::loadUiLocale(app()->getLocale())),

            '_env' => Inertia::once(fn() => app()->environment()),

            '_swal' => function () {
                $swal = session('swal');
                if ($swal) $swal['nonce'] = Str::random(5); // trigger vue watch

                return $swal;
            },
        ];

        /** @var JasmineUser|null $user */
        $user = AuthController::guard()->user();
        if ($user) $data = [
            ...$data,
            // TODO: better caching approach and and bust when routes change
            '_ziggy' => Inertia::once(fn() => [
                ...(new Ziggy)->filter(['jasmine.*', 'fm.*'])->toArray(),
                'location' => $request->url(),
            ])->until(now()->addDay()),

            '_sb_menu' => Inertia::once(fn() => Jasmine::getSideBarMenuItems()),
            '_user'    => Inertia::once(fn() => AuthController::guard()
                ->user()?->only(['name', 'email', 'avatar_url'])),

            '_info' => Inertia::once(fn() => static::getInfo($user)),
        ];
        else $data['_ssos'] = Inertia::once(fn() => (object)array_map(fn($i) => [
            'name' => $i['name'],
            'icon' => $i['icon'],
        ], Jasmine::getOauth2Ssos()));

        return $data;
    }

    public static function getInfo(Authenticatable $user): array {
        return [
            'jasmine' => InstalledVersions::getVersion('jasminecms/jasmine'),
            ...($user->admin ? [
                'updated' => Carbon::createFromTimestamp(
                    filemtime(realpath(InstalledVersions::getRootPackage()['install_path'] . '/composer.lock'))
                )->format('Y-m-d H:i:s'),
                'php'     => phpversion(),
                'laravel' => app()->version(),
                'db'      => match (DB::getConfig('driver')) {
                    'sqlite' => 'sqlite ' . (DB::select('SELECT SQLITE_VERSION() AS v')[0]->v ?? 'N/A'),
                    'mariadb',
                    'mysql',
                    'pgsql'  => DB::select('SELECT VERSION() AS v')[0]->v ?? 'N/A',
                    'sqlsrv' => DB::select('SELECT @@version AS v')[0]->v ?? 'N/A',
                    default  => DB::getConfig('driver')
                },
            ] : []),
        ];
    }
}
