<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Composer\InstalledVersions;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;
use PragmaRX\Google2FA\Google2FA;
use Tightenco\Ziggy\Ziggy;

class AppController extends Controller
{
    public function ziggy()
    {
        return (new Ziggy());
    }

    public function globals()
    {
        /** @var JasmineUser $user */
        $user = Auth::guard(config('jasmine.guard'))->user();

        $info = [
            'jasmine' => InstalledVersions::getVersion('jasminecms/jasmine'),
        ];

        if ($user->admin) {
            $info['updated'] = filemtime(base_path('./composer.lock'));
            $info['php'] = phpversion();
            $info['laravel'] = app()->version();
            $info['jasmine'] = InstalledVersions::getVersion('jasminecms/jasmine');
            $info['db'] =
                DB::getConfig('driver') === 'sqlite'
                    ? 'sqlite ' . DB::select('SELECT SQLITE_VERSION() AS v')[0]?->v ?? 'N\A'
                    : DB::select('SELECT VERSION() AS v')[0]?->v ?? 'N\A';
        }

        return [
            'locales'           => Jasmine::getLocales(),
            'interface_locales' => Jasmine::getInterfaceLocales(),
            'user'              => $user->only(['name', 'email', 'avatar_url']),
            'sb_menu'           => Jasmine::getSideBarMenuItems(),

            'info' => $info,
        ];
    }

    public function localeStrings()
    {
        return Jasmine::getInterfaceLocale(app()->getLocale());
    }

    public function dashboard()
    {
        return inertia('Dashboard', [
            'cards' => array_map(
                fn($c) => array_map(fn($v) => $v instanceof \Closure ? App::call($v) : $v, $c),
                Jasmine::getDashboardCards()
            ),
        ]);
    }

    public function profile()
    {
        $user = Auth::guard(config('jasmine.auth.guard'))->user();

        return inertia('Profile', [
            'name'  => $user->name,
            'email' => $user->email,
            'otp'   => [
                'enabled' => !!$user->otp_secret,
                ...session('otp_profile', [
                    'secret' => null,
                    'url'    => null,
                ]),
            ],
        ]);
    }

    public function saveProfile()
    {
        $data = \request()->validate([
            '_sec' => ['required', 'in:details,password,otp'],
        ]);

        return $this->{'saveProfile' . ucfirst($data['_sec'])}();
    }

    private function saveProfileDetails()
    {
        $data = \request()->validate([
            'name' => ['required', 'string', 'min:2', 'max:255'],
        ]);

        $user = Auth::guard(config('jasmine.auth.guard'))->user();

        $user->name = $data['name'];

        $user->save();

        return redirect()->back()->withSwal([
            'toast'             => true,
            'position'          => 'top-right',
            'timer'             => 2 * 1000,
            'timerProgressBar'  => true,
            'backdrop'          => null,
            'icon'              => 'success',
            'title'             => 'Saved!',
            'showConfirmButton' => false,
        ]);
    }

    private function saveProfilePassword()
    {
        $data = \request()->validate([
            'password'     => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'new_password' => ['required', 'nullable', 'confirmed', 'string', 'min:10'],
        ]);

        $user = Auth::guard(config('jasmine.auth.guard'))->user();

        $user->password = bcrypt($data['new_password']);
        $user->save();

        return redirect()->back()->withSwal([
            'toast'             => true,
            'position'          => 'top-right',
            'timer'             => 2 * 1000,
            'timerProgressBar'  => true,
            'backdrop'          => null,
            'icon'              => 'success',
            'title'             => 'Saved!',
            'showConfirmButton' => false,
        ]);
    }

    private function saveProfileOtp()
    {
        $data = \request()->validate([
            'password' => ['required', 'string', 'current_password:' . config('jasmine.auth.guard')],
            'enabled'  => ['required', 'boolean'],
        ]);

        $user = Auth::guard(config('jasmine.auth.guard'))->user();

        $google2fa = new Google2FA();

        // Setup, create secret
        if (!$user->otp_secret && $data['enabled'] && !\request('secret')) {
            $secret = $google2fa->generateSecretKey();
            session()->flash('otp_profile', [
                'secret' => $secret,
                'url'    => $google2fa->getQRCodeUrl(
                    config('app.name') . ' - Jasmine',
                    $user->email, $secret,
                ),
            ]);

            return redirect()->back();
        }

        // Setup, verify secret
        if (!$user->otp_secret && $data['enabled'] && \request('secret')) {
            session()->flash('otp_profile', [
                'secret' => \request('secret'),
                'url'    => $google2fa->getQRCodeUrl(
                    config('app.name') . ' - Jasmine',
                    $user->email, \request('secret'),
                ),
            ]);

            \request()->validate(['code' => [
                'required',
                'digits:6',
                fn($a, $v, $f) => !$google2fa->verifyKey(\request('secret'), $v) && $f('The ' . $a . ' is invalid.'),
            ]]);

            $user->otp_secret = \request('secret');
            $user->save();

            session(['jasmine.otp_verified' => true]);

            return redirect()->back()->withSwal([
                'toast'             => true,
                'position'          => 'top-right',
                'timer'             => 2 * 1000,
                'timerProgressBar'  => true,
                'backdrop'          => null,
                'icon'              => 'success',
                'title'             => 'Saved!',
                'showConfirmButton' => false,
            ]);
        }

        // Show QR
        if ($user->otp_secret && $data['enabled']) {
            $secret = $user->otp_secret;
            session()->flash('otp_profile', [
                'secret' => $secret,
                'url'    => $google2fa->getQRCodeUrl(
                    config('app.name') . ' - Jasmine',
                    $user->email, $secret,
                ),
            ]);

            return redirect()->back();
        }

        // opt-out otp
        if ($user->otp_secret && !$data['enabled']) {
            $user->otp_secret = null;
            $user->otp_remember_token = null;
            $user->save();
            session(['jasmine.otp_verified' => false]);
        }

        return null;
    }
}
