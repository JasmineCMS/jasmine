<?php

namespace Jasmine\Jasmine\Http\Controllers;

use App\Models\Update;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Models\JasmineRedirection;
use Spatie\EloquentSortable\SortableTrait;

class RedirectionController extends Controller
{
    public function manage()
    {
        if (\request()->ajax() && \request()->has('json')) {
            return $this->index();
        }

        return view('jasmine::app.redirection.manage');
    }

    public function index()
    {
        return JasmineRedirection::all();
    }

    public function save(Request $request)
    {
        $data = $request->validate([
            'id'        => ['integer', 'nullable'],
            'from'      => ['required', 'string'],
            'to'        => ['required', 'string'],
            'permanent' => ['required', 'boolean'],
            'regex'     => ['required', 'boolean'],
            'enabled'   => ['required', 'boolean'],
        ]);


        if (isset($data['id'])) {
            $redirect = JasmineRedirection::find($data['id'])->update($data);
        } else {
            $redirect = JasmineRedirection::create($data);
        }

        return $redirect;
    }

    public function delete(Request $request)
    {
        $data = $request->validate([
            'id' => ['required', 'integer'],
        ]);

        $redirect = JasmineRedirection::findOrFail($data['id']);

        return ['success' => $redirect->delete()];
    }

    public function redirect(Request $request)
    {
        $from = $request->fullUrl();

        // load redirections
        $redirections = JasmineRedirection::where('enabled', true)->get();

        // Test none regex
        /** @var JasmineRedirection|null $r */
        $r = $redirections->where('from', $from)->first();
        if ($r) {
            return redirect($r->to, $r->permanent ? 301 : 302);
        }

        // Test regex
        foreach ($redirections->where('regex', true) as $r) {
            if (preg_match('#' . $r->from . '#', $from, $m)) {
                $to = preg_replace('#' . $r->from . '#', $r->to, $from);
                return redirect($to, $r->permanent ? 301 : 302);
            }
        }

        abort(404);
    }
}
