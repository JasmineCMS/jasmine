<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Jasmine\Jasmine\Bread\BreadableContext;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasminePage;
use Jasmine\Jasmine\Models\JasmineUser;

class PageController extends Controller
{
    public function edit(Request $request) {
        $name = $request->route('jasminePage');
        $page = Jasmine::getPage($name);
        if (!$page) abort(404);

        $breadable = new BreadableContext($name, $page);

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        abort_unless($user->jCan($breadable->permission('read')), 403);
        if ($user->jCan($breadable->permission('add'))) $create = [['name' => $name], ['content' => []]];
        else $create = null;

        $breadable->find($name, $create);

        $route = $request->route();
        $route->setParameter('breadable', $breadable);
        $route->setParameter('breadableId', $name);

        return app()->make(BreadController::class)->edit($request);
    }

    public function save(Request $request) {
        $name = $request->route('jasminePage');
        $page = Jasmine::getPage($name);
        if (!$page) abort(404);

        $breadable = new BreadableContext($name, $page);

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        abort_unless($user->jCan($breadable->permission('edit')), 403);

        $route = $request->route();
        $route->setParameter('breadable', $breadable);
        $route->setParameter('breadableId', $name);

        return app()->make(BreadController::class)->save($request);
    }

    public function fake(Request $request) {
        if (app()->environment('production')) abort(404);

        $name = $request->route('jasminePage');
        $page = Jasmine::getPage($name);
        if (!$page) abort(404);

        $breadable = new BreadableContext($name, $page);

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        abort_unless($user->jCan($breadable->permission('edit')), 403);

        $request->validate([
            '_locale' => ['sometimes', 'string', Rule::in(Jasmine::getLocales())],
        ]);

        $orgLocale = app()->getLocale();
        $locale = request('_locale', Jasmine::getLocales()[0] ?? app()->getLocale());
        app()->setLocale($locale);
        /** @var class-string<JasminePage> $pageClass */
        $pageClass = $breadable->class;
        $pageClass::jLoad()?->update(['content' => $page::fake(true)]);
        app()->setLocale($orgLocale);

        return redirect()->back()->withSwal([
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
