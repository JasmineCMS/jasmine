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
use Spatie\EloquentSortable\SortableTrait;

class BreadController extends Controller
{
    /**
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View|mixed
     * @throws \Exception
     */
    public function index()
    {
        $breadableName = \request()->route()->parameter('breadableName');

        /** @var Builder $query */
        $query = call_user_func("$breadableName::query");

        $tableName = $query->getModel()->getTable();

        $breadableIdColumn = $query->getModel()->getKeyName();

        $browseableColumns = call_user_func("$breadableName::browseableColumns");

        $order_column = null;

        // Assure key
        if (!in_array($breadableIdColumn, $browseableColumns)) {
            array_unshift($browseableColumns, $breadableIdColumn);
        }

        // Assure sort column
        if (in_array(SortableTrait::class, class_uses($breadableName))) {
            /** @var Model|BreadableInterface|SortableTrait $model */
            $model = new $breadableName;
            $order_column = $model->sortable['order_column_name'] ?? 'order_column';

            if (!in_array($order_column, $browseableColumns)) {
                array_unshift($browseableColumns, $order_column);
            }
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

            // handle relation columns
            $relationColumns = array_filter($browseableColumns, function ($column) {
                return strpos($column, '.') !== false;
            });

            $rTables = [];
            foreach ($relationColumns as $relationColumn) {
                [$table, $column] = explode('.', $relationColumn);
                $table = (strpos($table, '_') === 0 ? substr($table, 1) : $table);
                $rTables[$table][] = $column;
            }

            $withs = [];
            foreach ($rTables as $rTable => $rColumns) {
                $withs[$rTable] = function ($q) use ($rColumns) {
                    $q->select($rColumns);
                };
            }

            if (count($withs)) {
                $query->with($withs);
            }

            // handle regular columns
            $selectableColumns = array_filter($browseableColumns, function ($column) {
                return strpos($column, '.') === false;
            });

            $query->select(array_map(function ($column) use ($tableName) {
                return $tableName . '.' . (strpos($column, '_') === 0 ? substr($column, 1) : $column);
            }, $selectableColumns));

            return datatables($query)->make();
        }

        return view('jasmine::app.bread.index', compact(
            'breadableName', 'browseableColumns', 'breadableIdColumn', 'order_column'
        ));
    }

    public function reorder(Request $request)
    {
        $breadableName = \request()->route()->parameter('breadableName');

        $data = $request->validate([
            'order'         => 'required|array',
            'order.*.id'    => 'required',
            'order.*.order' => 'required|integer',
        ]);

        \DB::transaction(function () use ($breadableName, $data) {
            /** @var Model|BreadableInterface|SortableTrait $model */
            $model = new $breadableName;
            $order_column = $model->sortable['order_column_name'] ?? 'order_column';
            foreach ($data['order'] as $row) {
                \DB::table($model->getTable())
                   ->where($model->getKeyName(), $row['id'])
                   ->update([$order_column => $row['order']])
                ;
            }
        });
    }

    public function create()
    {
        $breadableName = \request()->route()->parameter('breadableName');

        if (
            in_array(Translatable::class, class_uses($breadableName))
            && \request()->get('_locale') == null
        ) {
            return redirect(route('jasmine.bread.create', ['breadableName' => $breadableName, '_locale' => 'en']));
        }

        return view('jasmine::app.bread.edit', compact('breadableName'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     */
    public function store(Request $request)
    {
        $breadableName = \request()->route()->parameter('breadableName');

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

        $routeParams = [];

        /** @var BreadableInterface|Model|Translatable $breadable */
        $breadable = new $breadableName();
        if (in_array(Translatable::class, class_uses($breadableName))) {
            $breadable->setLocale(\request()->get('_locale', 'en'));
            $routeParams['_locale'] = $breadable->getLocale();
        }

        $breadable->forceFill($data)->save();

        $routeParams['breadableName'] = $breadableName;
        $routeParams['breadableId'] = $breadable->{$breadable->getRouteKeyName()};

        return redirect(route('jasmine.bread.edit', $routeParams));
    }

    public function edit()
    {
        $breadableName = \request()->route()->parameter('breadableName');
        $breadableId = \request()->route()->parameter('breadableId');

        /** @var null|Model|BreadableInterface|Translatable $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) {
            abort(404);
        }

        if (
            in_array(Translatable::class, class_uses($breadableName))
            && \request()->get('_locale') == null
        ) {
            return redirect(route('jasmine.bread.edit', [
                'breadableName' => $breadableName,
                'breadableId'   => $breadable->{$breadable->getRouteKeyName()},
                '_locale'       => 'en',
            ]));
        }

        if (in_array(Translatable::class, class_uses($breadableName))) {
            $breadable->setLocale(\request()->get('_locale', 'en'));
        }

        //dd($breadable->toArray());

        return view('jasmine::app.bread.edit', compact('breadableName', 'breadable'));
    }

    public function update(Request $request)
    {
        $breadableName = \request()->route()->parameter('breadableName');
        $breadableId = \request()->route()->parameter('breadableId');

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

        /** @var null|Model|BreadableInterface|Translatable $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        $routeParams = [];

        if (in_array(Translatable::class, class_uses($breadableName))) {
            $breadable->setLocale(\request()->get('_locale', 'en'));
            $routeParams['_locale'] = $breadable->getLocale();
        }

        $breadable->forceFill($data)->save();

        $routeParams['breadableName'] = $breadableName;
        $routeParams['breadableId'] = $breadable->{$breadable->getRouteKeyName()};

        return redirect(route('jasmine.bread.edit', $routeParams));
    }

    /**
     *
     * @return array
     * @throws \Exception
     */
    public function destroy()
    {
        $breadableName = \request()->route()->parameter('breadableName');
        $breadableId = \request()->route()->parameter('breadableId');

        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) {
            abort(404);
        }

        return ['success' => $breadable->delete()];
    }

}
