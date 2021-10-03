<?php

namespace Jasmine\Jasmine\Http\Controllers\Auth;

use Illuminate\Support\Facades\Password;
use Jasmine\Jasmine\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\SendsPasswordResetEmails;

class ForgotPasswordController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Password Reset Controller
    |--------------------------------------------------------------------------
    |
    | This controller is responsible for handling password reset emails and
    | includes a trait which assists in sending these notifications from
    | your application to your users. Feel free to explore this trait.
    |
    */

    use SendsPasswordResetEmails;

    public function broker() { return Password::broker(config('jasmine.auth.broker')); }

    public function showLinkRequestForm() { return view('jasmine::auth.email'); }
}
