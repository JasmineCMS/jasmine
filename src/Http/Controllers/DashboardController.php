<?php

namespace Jasmine\Jasmine\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function show()
    {
        return view('jasmine::app.layout');
    }
}
