<?php

namespace Jasmine\Jasmine\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class FileManagerController extends Controller
{
    public function show()
    {
        return view('jasmine::app.file-manager');
    }
}
