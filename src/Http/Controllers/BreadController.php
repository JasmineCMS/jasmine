<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use function Jasmine\Jasmine\is_assoc_array;

class BreadController extends Controller
{
    /**
     * @param $breadableName
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View|mixed
     * @throws \Exception
     */
    public function index($breadableName)
    {
        /** @var Builder $query */
        $query = call_user_func("$breadableName::query");

        $breadableIdColumn = $query->getModel()->getKeyName();

        $browseableColumns = call_user_func("$breadableName::browseableColumns");

        // Assure key
        if (!in_array($breadableIdColumn, $browseableColumns)) {
            array_unshift($browseableColumns, $breadableIdColumn);
        }

        // Timestamps
        if ($query->getModel()->usesTimestamps()) {
            if (!in_array('created_at', $browseableColumns)) {
                array_push($browseableColumns, 'created_at');
            }

            if (!in_array('updated_at', $browseableColumns)) {
                array_push($browseableColumns, 'updated_at');
            }
        }

        if (\request()->ajax()) {

            $query->select($browseableColumns);

            return datatables($query)->make();
        }

        return view('jasmine::app.bread.index', compact('breadableName', 'browseableColumns', 'breadableIdColumn'));
    }

    public function create($breadableName)
    {
        return view('jasmine::app.bread.edit', compact('breadableName'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param                          $breadableName
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request, $breadableName)
    {
        /** @var AbstractField[]|Collection $fields */
        $fields = collect(call_user_func("$breadableName::fieldsManifest")->toArray())->flatten(2);
        $rules = [];

        foreach ($fields as $field) {
            if ($field['repeats'] > 1) {
                $rules[$field['name']] = $field['validation'];
            } else {
                $rules[$field['name']] = $field['validation'];
            }
        }

        $data = $request->validate($rules);

        /** @var BreadableInterface|Model $breadable */
        $breadable = call_user_func_array("$breadableName::forceCreate", [$data]);

        return redirect(route('jasmine.bread.edit', [$breadableName, $breadable->{$breadable->getRouteKeyName()}]));
    }

    public function edit($breadableName, $breadableId)
    {
        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) {
            abort(404);
        }

        return view('jasmine::app.bread.edit', compact('breadableName', 'breadable'));
    }

    public function update(Request $request, $breadableName, $breadableId)
    {
        /** @var AbstractField[] $fields */
        $fields = collect(call_user_func("$breadableName::fieldsManifest")->toArray())->flatten(2);
        $rules = [];

        foreach ($fields as $field) {
            if ($field['repeats'] > 1) {
                $rules[$field['name']] = $field['validation'];
            } else {
                $rules[$field['name']] = $field['validation'];
            }
        }

        $data = $request->validate($rules);

        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        $breadable->forceFill($data)->save();

        return redirect(route('jasmine.bread.edit', [$breadableName, $breadable->{$breadable->getRouteKeyName()}]));
    }

    /**
     * @param $breadableName
     * @param $breadableId
     *
     * @return array
     * @throws \Exception
     */
    public function destroy($breadableName, $breadableId)
    {
        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) {
            abort(404);
        }

        return ['success' => $breadable->delete()];
    }

}
