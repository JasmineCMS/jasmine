<?php

namespace Jasmine\Jasmine\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use InvalidArgumentException;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Jasmine\Jasmine\Models\JasmineUser;
use PragmaRX\Google2FA\Google2FA;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */
    
    use AuthenticatesUsers;
    
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest:' . config('jasmine.auth.guard'))
             ->except(['logout', 'showOtpForm', 'otp']);
    }
    
    protected function guard() { return Auth::guard(config('jasmine.auth.guard')); }
    
    public function showLoginForm() { return view('jasmine::auth.login'); }
    
    public function Ouath2Attempt(Request $request)
    {
        $request->session()->put('jasmine_sso_state', $state = Str::random(40));
        
        $sso = Jasmine::getOauth2Ssos($request->route('provider'));
        if (!$sso) abort(404);
        
        $query = http_build_query([
            'client_id'     => $sso['client_id'],
            'redirect_uri'  => route('jasmine.sso.oauth2.auth', $sso['name']),
            'response_type' => 'code',
            'scope'         => join(',', $sso['scopes'] ?? []),
            'state'         => $state,
        ]);
        
        return redirect($sso['authorize_url'] . '?' . $query);
    }
    
    public function Ouath2Auth(Request $request)
    {
        $state = $request->session()->pull('jasmine_sso_state');
        
        throw_unless(
            strlen($state) > 0 && $state === $request->state,
            InvalidArgumentException::class
        );
        
        $sso = Jasmine::getOauth2Ssos($request->route('provider'));
        if (!$sso) abort(404);
        
        $auth_res = Http::asForm()->post($sso['token_url'], [
            'grant_type'    => 'authorization_code',
            'client_id'     => $sso['client_id'],
            'client_secret' => $sso['client_secret'],
            'redirect_uri'  => route('jasmine.sso.oauth2.auth', $sso['name']),
            'code'          => $request->code,
        ]);
        
        if (!$auth_res->ok()) abort(403);
        
        $user_data = $sso['userDataCallback']($auth_res->body());
        
        $user = JasmineUser::where('email', $user_data['email'])->first();
        
        if (!$user) {
            $allowCreate = $sso['allowCreate'] instanceof \Closure
                ? $sso['allowCreate']($user_data)
                : $sso['allowCreate'];
            
            if ($allowCreate) $user = JasmineUser::create([
                'name'     => $user_data['name'],
                'email'    => $user_data['email'],
                'password' => bcrypt(Str::random(64)),
            ]);
            else return redirect()->route('jasmine.login');
        }
        
        Auth::guard(config('jasmine.auth.guard'))->login($user);
        
        return redirect()->intended(route('jasmine.dashboard'));
    }
    
    public function showOtpForm() { return view('jasmine::auth.otp'); }
    
    public function otp(Request $request)
    {
        $user = Auth::guard(config('jasmine.auth.guard'))->user();
        
        $google2fa = new Google2FA();
        
        $data = $request->validate([
            'remember' => ['nullable'],
            'code'     => [
                'required',
                'digits:6',
                fn($a, $v, $f) => !$google2fa->verifyKey($user->otp_secret, $v) && $f('The ' . $a . ' is invalid.'),
            ],
        ]);
        
        session(['jasmine.otp_verified' => true]);
        
        if (isset($data['remember'])) {
            $user->otp_remember_token = Str::random(60);
            Cookie::queue(
                'jasmine_otp_remember', $user->otp_remember_token,
                60 * 24 * 30,
                null, null, $request->isSecure(), true);
            $user->save();
        }
        
        return redirect()->intended(route('jasmine.dashboard'));
    }
    
    public function redirectTo() { return route('jasmine.dashboard'); }
    
    protected function loggedOut(Request $request)
    {
        if ($request->inertia()) return inertia()->location(route('jasmine.login'));
        
        return redirect(route('jasmine.login'));
    }
}
