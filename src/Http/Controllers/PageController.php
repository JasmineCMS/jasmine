<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
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

    /**
     * @param Request     $request
     * @param JasminePage $page
     */
    public function update(Request $request, $page)
    {
        /** @var AbstractField[] $fields */
        $fields = collect(call_user_func(get_class($page) . "::fieldsManifest")->toArray())->flatten(2);
        $rules = [];

        foreach ($fields as $field) {
            if ($field['repeats'] > 1) {
                $rules[$field['name']] = $field['validation'];
            } else {
                $rules[$field['name']] = $field['validation'];
            }
        }

        $data = $request->validate($rules);

        $page->content = $data;
        $page->save();

        return redirect(route('jasmine.page.edit', $page->name));
    }
}
