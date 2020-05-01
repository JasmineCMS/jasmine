<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;

class LocaleController extends Controller
{
    public function change(Request $request, $locale)
    {
        session(['jasmine.locale' => $locale]);

        return redirect()->back();
    }
}
