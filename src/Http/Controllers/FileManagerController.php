<?php

namespace Jasmine\Jasmine\Http\Controllers;

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
