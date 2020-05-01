<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function show()
    {
        return view('jasmine::app.layout');
    }
}
