<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Models\JasminePage;

class PageController extends Controller
{
    /**
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector|\Illuminate\View\View
     */
    public function edit()
    {
        $page = \request()->route()->parameter('jasminePage');

        if (
            in_array(Translatable::class, class_uses($page))
            && \request()->get('_locale') == null
        ) {
            $locale = in_array(app()->getLocale(), \Jasmine::getLocales()) ? app()->getLocale() : \Jasmine::getLocales()[0];
            return redirect(route('jasmine.page.edit', ['jasminePage' => $page->name, '_locale' => $locale]));
        }

        if (in_array(Translatable::class, class_uses($page))) {
            $page->setLocale(\request()->get('_locale', 'en'));
        }

        return view('jasmine::app.bread.page', compact('page'));
    }

    /**
     * @param Request $request
     */
    public function update(Request $request)
    {
        $page = \request()->route()->parameter('jasminePage');

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
    
        $params = ['jasminePage' => $page->name];
        
        if (in_array(Translatable::class, class_uses($page))) {
            $page->setLocale(\request()->get('_locale', 'en'));
            $params['_locale'] = $page->getLocale();
        }

        $page->content = $data;
        $page->save();
        
        return redirect(route('jasmine.page.edit', $params));
    }
}
