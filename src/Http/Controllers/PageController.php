<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasminePage;

class PageController extends Controller
{
    
    public function edit()
    {
        $slug = \request()->route('jasminePage');
        if (!$page = Jasmine::getPage($slug)) abort(404);
        
        /** @var JasminePage $page */
        $page = $page::firstOrCreate(['name' => $slug], ['url' => $slug, 'content' => []]);
        
        // Check permission
        if (
            !Auth::guard(config('jasmine.auth.guard'))->user()->jCan('pages.' . $slug . '.read')
        ) abort(401);
        
        $locale = app()->getLocale();
        if (in_array(Translatable::class, class_uses($page))) {
            $locale = request('_locale', Jasmine::getLocales()[0]);
            $page->setLocale($locale);
        }
        
        return inertia('Bread/Edit', [
            'b'       => [
                'key'      => 'pages',
                'singular' => 'Page',
                'plural'   => 'Pages',
                'manifest' => $page::fieldsManifest(),
                'fields'   => $page::fieldsManifest()->getFields(),
            ],
            'entId'   => $page->id,
            'ent'     => $page->content ?: new \stdClass(),
            'title'   => $page::getPageName(),
            'locale'  => $locale,
            'fm_path' => 'Pages/' . $page::getPageName(),
        ]);
    }
    
    public function save()
    {
        $slug = \request()->route('jasminePage');
        if (!$page = Jasmine::getPage($slug)) abort(404);
        
        /** @var JasminePage $page */
        $page = $page::whereName($slug)->first();
        
        // Check permission
        if (
            !Auth::guard(config('jasmine.auth.guard'))->user()->jCan('pages.' . $slug . '.edit')
        ) abort(401);
        
        $rules = [];
        foreach ($page::fieldsManifest()->getFields() as $f) {
            /** @var AbstractField $f */
            $f = $f->toArray();
            if ($f['repeats'] > 1) {
                $rules[$f['name']] = $f['validation'];
            } else {
                $rules[$f['name']] = $f['validation'];
            }
        }
        
        $data = Validator::validate(request('v', []), $rules);
        
        $locale = null;
        if (in_array(Translatable::class, class_uses($page))) {
            $locale = request('_locale', Jasmine::getLocales()[0]);
            $page->setLocale($locale);
        }
        
        $page->content = $data;
        
        $page->save();
        
        return redirect()->route('jasmine.page.edit', [$slug, '_locale' => $locale])->withSwal([
            'toast'             => true,
            'position'          => 'top-right',
            'timer'             => 2 * 1000,
            'timerProgressBar'  => true,
            'backdrop'          => null,
            'icon'              => 'success',
            'title'             => 'Saved!',
            'showConfirmButton' => false,
        ]);
    }
}
