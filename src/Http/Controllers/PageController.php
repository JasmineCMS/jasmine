<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\ManifestFaker;
use Jasmine\Jasmine\Models\JasminePage;
use Jasmine\Jasmine\Models\JasmineRevision;
use Jasmine\Jasmine\Models\JasmineUser;

class PageController extends Controller
{

    public function edit() {
        $slug = \request()->route('jasminePage');
        if (!$page = Jasmine::getPage($slug)) abort(404);

        /** @var JasminePage $page */
        $page = $page::firstOrCreate(['name' => $slug], ['url' => $slug, 'content' => []]);

        // Check permission
        $user = Auth::guard(config('jasmine.auth.guard'))->user();
        if (!$user->jCan('pages.' . $slug . '.read')) abort(401);

        $permissions = ['r'];
        if ($user->jCan('pages.' . $slug . '.edit')) $permissions[] = 'e';

        $locale = app()->getLocale();
        if (in_array(Translatable::class, class_uses($page))) {
            $locale = request('_locale', Jasmine::getLocales()[0]);
            $page->setLocale($locale);
        }

        if (request('rev')) {
            $rev = JasmineRevision::whereRevisionableType($page::class)->whereRevisionableId($page->getKey())
                ->where('created_at', Carbon::createFromFormat('Y-m-d-H-i-s', request('rev')))
                ->firstOrFail();
            $data = (array)$rev->contents;
        } else {
            $data = static::fireEvent('retrievedForEdit', $page);
        }

        return inertia('Bread/Edit', [
            'can'                 => $permissions,
            'translationServices' => Jasmine::listTranslationServices(),
            'b'                   => [
                'key'      => 'page',
                'singular' => 'Page',
                'plural'   => 'Pages',
                'slug'     => $slug,
                'manifest' => $page::fieldsManifest(),
                'fields'   => $page::fieldsManifest()->getFields(),
            ],
            'entId'               => $page->id,
            'ent'                 => $data['content'] ?? new \stdClass(),
            'title'               => $page::getPageName(),
            'locale'              => $locale,
            'public_url'          => $page->exists ? method_exists($page, 'jasmineGetPublicUrl') ? $page->jasmineGetPublicUrl() : null : null,
            'fm_path'             => 'Pages/' . $page::getPageName(),
            'loadedRev'           => isset($rev) ? $rev->created_at : null,
            'revisions'           => JasmineRevision
                ::whereRevisionableType($page::class)
                ->whereRevisionableId($page->getKey())
                ->latest()
                ->with('user:id,name,email')
                ->get(['id', 'jasmine_user_id', 'locale', 'created_at'])
                ->map(fn(JasmineRevision $r) => [
                    ...$r->only(['id', 'locale', 'created_at']),
                    'created_at_h' => $r->created_at->format('d.m.y H:i:s'),
                    'user'         => $r->user?->only(['name', 'email', 'avatar_url']),
                ]),
        ]);
    }

    public function save() {
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

        $old = static::fireEvent('retrievedForEdit', $page);

        $data = static::fireEvent('saving', $page, $data);

        $page->content = $data;
        $changed = $page->isDirty();
        $page->save();

        static::fireEvent('saved', $page);

        if ($changed) $this->recordRevision($page, $old);

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

    private static function fireEvent(string $event, Model $m, ?array $data = null): ?array {
        switch ($event) {
            case 'retrievedForEdit':
                foreach (class_uses_recursive($m) as $trait) {
                    if (method_exists($m, class_basename($trait) . 'JasmineOnRetrievedForEdit'))
                        $m::{class_basename($trait) . 'JasmineOnRetrievedForEdit'}($m);
                }

                if (method_exists($m, 'jasmineOnRetrievedForEdit')) return $m::jasmineOnRetrievedForEdit($m);
                return $m->toArray();
            case 'saving':
                foreach (class_uses_recursive($m) as $trait) {
                    if (method_exists($m, class_basename($trait) . 'JasmineOnSaving'))
                        $m::{class_basename($trait) . 'JasmineOnSaving'}($m, $data);
                }

                if (method_exists($m, 'jasmineOnSaving')) return $m::jasmineOnSaving($data, $m);
                return $data;
            case 'saved':
                foreach (class_uses_recursive($m) as $trait) {
                    if (method_exists($m, class_basename($trait) . 'JasmineOnSaved'))
                        $m::{class_basename($trait) . 'JasmineOnSaved'}($m);
                }

                if (method_exists($m, 'jasmineOnSaved')) return $m::jasmineOnSaved($m);
                break;
        }

        return null;
    }

    private function recordRevision(JasminePage $m, array $old) {
        $max = property_exists($m, 'jasmine_revisions')
            ? $m->jasmine_revisions
            : config('jasmine.revisions', 100);

        if ($max === false) return;

        if (intval($max) > 0) {
            JasmineRevision::whereRevisionableType($m::class)->whereRevisionableId($m->getKey())
                ->latest()->take(PHP_INT_MAX)->skip($max - 1)->get()->each->delete();
        }

        JasmineRevision::create([
            'jasmine_user_id'   => \auth(config('jasmine.auth.guard'))->id(),
            'revisionable_type' => $m::class,
            'revisionable_id'   => $m->getKey(),
            'locale'            => method_exists($m, 'getLocale') ? $m->getLocale() : null,
            'contents'          => $old,
        ]);
    }

    public function fake() {
        if (app()->environment('production')) abort(404);

        $slug = \request()->route('jasminePage');
        if (!$pageClass = Jasmine::getPage($slug)) abort(404);
        /** @var JasminePage $pageClass */

        /** @var JasminePage $page */
        $page = $pageClass::where('url', $slug)->first();
        $page->update(['content' => $page::fake(true)]);

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

    public function translate() {
        $slug = \request()->route('jasminePage');
        if (!$page = Jasmine::getPage($slug)) abort(404);

        /** @var JasminePage|Translatable $page */
        $page = $page::whereName($slug)->first();

        // Check permission
        if (
            !Auth::guard(config('jasmine.auth.guard'))->user()->jCan('pages.' . $slug . '.edit')
        ) abort(401);

        if (!class_uses($page, Translatable::class)) abort(404);

        $data = request()->validate([
            'service' => ['required', 'string', Rule::in(array_keys(Jasmine::getTranslationService()))],
            'source'  => ['required', 'string', Rule::in(Jasmine::getLocales())],
            'target'  => ['required', 'string', Rule::in(Jasmine::getLocales())],
        ]);

        if ($data['source'] === $data['target']) throw ValidationException::withMessages([
            'target' => __('source and target must be different'),
        ]);

        $service = Jasmine::getTranslationService($data['service']);

        $manifest = collect($page::fieldsManifest()->getFields())
            ->keyBy(fn(AbstractField $i) => $i->toArray()['name']);

        $fields = [];
        foreach ($page->getTranslation('content', $data['source']) as $attr => $val) $fields[$attr] = [
            'value' => $val,
            'field' => $manifest[$attr] ?? null,
        ];

        $res = $service($data['source'], $data['target'], $fields);

        $content = $page->getTranslation('content', $data['source']);
        foreach ($res as $attr => $v) $content[$attr] = $v;

        $page->setTranslation('content', $data['target'], $content);

        $page->save();

        return redirect()->back();
    }
}
