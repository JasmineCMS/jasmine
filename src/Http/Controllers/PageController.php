<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Jasmine\Jasmine\Models\JasminePage;

class PageController extends Controller
{
    /**
     * @param JasminePage $page
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($page)
    {
        return view('jasmine::app.bread.page', compact('page'));
    }

    public function update($page)
    {

    }
}
