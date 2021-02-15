<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Traits\Macroable;
use Jasmine\Jasmine\Models\JasmineRedirection;
use function Jasmine\Jasmine\array2csv;
use function Jasmine\Jasmine\csv2array;

class RedirectionController extends Controller
{
    use Macroable;

    private function getQuery()
    {
        return static::hasMacro('query') ? static::query() : JasmineRedirection::query();
    }

    public function manage()
    {
        if (\request()->ajax() && \request()->has('json')) {
            return $this->index();
        }

        return view('jasmine::app.redirection.manage');
    }

    public function index()
    {
        return $this->getQuery()->get();
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
            $redirect = $this->getQuery()->find($data['id'])->update($data);
        } else {
            $redirect = JasmineRedirection::create($data);
            if (static::hasMacro('afterCreate')) {
                static::afterCreate($redirect);
            }
        }

        return $redirect;
    }

    public function delete(Request $request)
    {
        $data = $request->validate([
            'id' => ['required', 'integer'],
        ]);

        $redirect = $this->getQuery()->findOrFail($data['id']);

        return ['success' => $redirect->delete()];
    }

    public function export(Request $request)
    {
        $redirections = $this->getQuery()->get()->toArray();

        header('Content-Type: application/csv');
        header('Content-Disposition: attachment; filename=' . config('app.name') . '-redirections-' . now()->format('Y-m-d_H-i-s') . '.csv');
        header('Pragma: no-cache');

        echo "\xEF\xBB\xBF";
        return array2csv($redirections);
    }

    public function import(Request $request)
    {
        $request->validate([
            'file' => ['required', 'file'],
        ]);

        $file = $request->file('file');

        $array = csv2array($file->getRealPath());

        $redirects = collect($array)
            ->filter(function ($r) {
                return isset($r['from'])
                    && isset($r['to'])
                    && isset($r['regex'])
                    && isset($r['permanent'])
                    && isset($r['enabled']);
            })
            ->map(function ($r) {
                return [
                    'from'       => $r['from'],
                    'to'         => $r['to'],
                    'regex'      => $r['regex'] == 1,
                    'permanent'  => $r['permanent'] == 1,
                    'enabled'    => $r['enabled'] == 1,
                    'updated_at' => Carbon::parse($r['updated_at'] ?? null),
                    'created_at' => Carbon::parse($r['created_at'] ?? null),
                ];
            })->toArray();

        foreach ($redirects as $redirect) {
            $redirect = JasmineRedirection::create($redirect);
            if (static::hasMacro('afterCreate')) {
                static::afterCreate($redirect);
            }
        }

        return redirect(route('jasmine.redirection.index'));
    }

    public function redirect(Request $request)
    {
        $from = $request->fullUrl();

        // load redirections
        $redirections = $this->getQuery()->where('enabled', true)->get();

        // Test none regex
        /** @var JasmineRedirection|null $r */
        $r = $redirections->where('from', $from)->first();
        if ($r) {
            return redirect($r->to, $r->permanent ? 301 : 302);
        }

        // Test none regex add slah
        /** @var JasmineRedirection|null $r */
        $r = $redirections->where('from', $from . '/')->first();
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
        return null;
    }

}
