<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Composer\InstalledVersions;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Process;

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
}