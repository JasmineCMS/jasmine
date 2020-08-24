<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public function change(Request $request, $jasmineLocale)
    {
        session(['jasmine.locale' => $jasmineLocale]);

        return redirect()->back();
    }
}
