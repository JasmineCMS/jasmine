<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;

class FileManagerController extends Controller
{
    public function show()
    {
        return inertia('FileManagerPage');
    }
    
    public function standalone()
    {
        return view('jasmine::app.fm-standalone');
    }
}
