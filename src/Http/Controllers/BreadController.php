<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Spatie\EloquentSortable\SortableTrait;
use function Jasmine\Jasmine\array2csv;

class BreadController extends Controller
{
    /**
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\Http\JsonResponse|\Illuminate\View\View|mixed
     * @throws \Exception
     */
    public function index()
    {
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);

        if (
            in_array(Translatable::class, class_uses($breadableName))
            && \request()->get('_locale') == null
        ) {
            $locale = in_array(app()->getLocale(), \Jasmine::getLocales()) ? app()->getLocale() : \Jasmine::getLocales()[0];
            return redirect(route('jasmine.bread.index', ['breadableName' => $breadableKey, '_locale' => $locale]));
        }

        /** @var Builder $query */
        if (method_exists($breadableName, 'jasmineQuery')) {
            $query = call_user_func("$breadableName::jasmineQuery");
        } else {
            $query = call_user_func("$breadableName::query");
        }

        $tableName = $query->getModel()->getTable();

        $breadableIdColumn = $query->getModel()->getKeyName();

        $browseableColumnsConfig = call_user_func("$breadableName::browseableColumns");

        // Timestamps
        if ($query->getModel()->usesTimestamps()) {
            if (!in_array('created_at', $browseableColumnsConfig)) {
                $browseableColumnsConfig['created_at'] = function ($val) {
                    return $val->format('d.m.Y H:i:s');
                };
            }

            if (!in_array('updated_at', $browseableColumnsConfig)) {
                $browseableColumnsConfig['updated_at'] = function ($val) {
                    return $val->format('d.m.Y H:i:s');
                };
            }
        }

        $browseableColumns = [];
        foreach ($browseableColumnsConfig as $bck => $bcv) {
            $browseableColumns[] = ($bcv instanceof \Closure) ? $bck : $bcv;
        }

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

        $export = request()->routeIs('jasmine.bread.export');

        if (\request()->ajax() || $export) {

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

            if ($export) {
                return [
                    'query'             => $query,
                    'browseableColumns' => $browseableColumns,
                    'relationColumns'   => $relationColumns,
                    'rTables'           => $rTables,
                    'selectableColumns' => $selectableColumns,
                ];
            }

            $result = datatables($query);

            foreach ($browseableColumnsConfig as $bck => $bcv) {
                if (!($bcv instanceof \Closure)) {
                    continue;
                }

                $result = $result->editColumn($bck, function (Model $model) use ($bck, $bcv) {
                    return $bcv($model->{$bck}, $model);
                });
            }

            if (in_array(Translatable::class, class_uses($breadableName))) {
                $localeNow = app()->getLocale();
                app()->setLocale(\request()->get('_locale'));

                $result = $result->make();
                app()->setLocale($localeNow);

            } else {
                $result = $result->make();
            }


            return $result;
        }

        return view('jasmine::app.bread.index', compact(
            'breadableName', 'breadableKey', 'browseableColumns', 'breadableIdColumn', 'order_column'
        ));
    }

    public function export(Request $request)
    {
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);

        $result = $this->index();

        $array = $result['query']
            ->get()
            ->map(function (BreadableInterface $breadable) use ($result) {
                /** @var BreadableInterface|Model $breadable */
                $tmp = [];
                foreach ($breadable->toArray() as $key => $prop) {
                    if (in_array($key, $result['selectableColumns'])) {
                        $tmp[$key] = $prop;
                    }

                    // relations
                    if (isset($result['rTables'][$key])) {
                        foreach ($result['rTables'][$key] as $rKey) {
                            $tmp["$key.$rKey"] = $prop[$rKey];
                        }
                    }
                }

                return $tmp;
            })
            ->toArray();

        return response("\xEF\xBB\xBF" . array2csv($array), 200, [
            'Content-Type'              => 'text/csv',
            'Content-Transfer-Encoding' => 'binary',
            'Content-Disposition'       => 'attachment; filename='
                . config('app.name') . '-' . Str::slug(call_user_func("$breadableName::getPluralName")) . '-'
                . now()->format('Y-m-d_H-i-s') . '.csv',
            'Pragma'                    => 'no-cache',
        ]);
    }

    public function reorder(Request $request)
    {
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);

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
                   ->update([$order_column => $row['order']]);
            }
        });
    }

    public function create()
    {
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);

        if (
            in_array(Translatable::class, class_uses($breadableName))
            && \request()->get('_locale') == null
        ) {
            $locale = in_array(app()->getLocale(), \Jasmine::getLocales()) ? app()->getLocale() : \Jasmine::getLocales()[0];
            return redirect(route('jasmine.bread.create', ['breadableName' => $breadableKey, '_locale' => $locale]));
        }

        return view('jasmine::app.bread.edit', compact('breadableName', 'breadableKey'));
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
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);

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

        $many_to_many_fields = [];
        foreach ($fields as $field) {
            if ($field['type'] !== 'RelationshipField') {
                continue;
            }

            if ($field['options']['many_to_many']) {
                $many_to_many_fields[$field['name']] = ['field' => $field, 'value' => $data[$field['name']] ?? []];
                unset($data[$field['name']]);
            } else if ($field['options']['parent_key_name']) {
                $data[$field['options']['parent_key_name']] = $data[$field['name']];
                unset($data[$field['name']]);
            }

        }

        $routeParams = [];

        /** @var BreadableInterface|Model|Translatable $breadable */
        $breadable = new $breadableName();
        if (in_array(Translatable::class, class_uses($breadableName))) {
            $breadable->setLocale(\request()->get('_locale', 'en'));
            $routeParams['_locale'] = $breadable->getLocale();
        }

        $breadable->forceFill($data)->save();

        foreach ($many_to_many_fields as $value) {
            $breadable->{$value['field']['options']['name']}()->sync($value['value']);
        }

        $routeParams['breadableName'] = $breadableKey;
        $routeParams['breadableId'] = $breadable->{$breadable->getRouteKeyName()};

        return redirect(route('jasmine.bread.edit', $routeParams));
    }

    public function edit()
    {
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);
        $breadableId = \request()->route()->parameter('breadableId');

        /** @var null|Model|BreadableInterface|Translatable $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) abort(404);

        if (
            in_array(Translatable::class, class_uses($breadableName))
            && \request()->get('_locale') == null
        ) {
            $locale = in_array(app()->getLocale(), \Jasmine::getLocales()) ? app()->getLocale() : \Jasmine::getLocales()[0];
            return redirect(route('jasmine.bread.edit', [
                'breadableName' => $breadableKey,
                'breadableId'   => $breadable->{$breadable->getRouteKeyName()},
                '_locale'       => $locale,
            ]));
        }

        if (in_array(Translatable::class, class_uses($breadableName))) {
            $breadable->setLocale(\request()->get('_locale', 'en'));
        }

        //dd($breadable->toArray());

        return view('jasmine::app.bread.edit', compact('breadableName', 'breadableKey', 'breadable'));
    }

    public function update(Request $request)
    {
        $breadableKey = \request()->route('breadableName');
        /** @var string|BreadableInterface|Model $breadableName */
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);
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
        $breadable = $breadableName::find($breadableId);

        $routeParams = [];

        if (in_array(Translatable::class, class_uses($breadableName))) {
            $breadable->setLocale(\request()->get('_locale', 'en'));
            $routeParams['_locale'] = $breadable->getLocale();
        }

        $many_to_many_fields = [];
        foreach ($fields as $field) {
            if ($field['type'] !== 'RelationshipField') continue;

            if ($field['options']['many_to_many']) {
                $many_to_many_fields[$field['name']] = ['field' => $field, 'value' => $data[$field['name']] ?? []];
                unset($data[$field['name']]);
            } else if ($field['options']['parent_key_name']) {
                $data[$field['options']['parent_key_name']] = $data[$field['name']];
                unset($data[$field['name']]);
            }

        }

        $breadable->forceFill($data)->save();

        foreach ($many_to_many_fields as $value) {
            $breadable->{$value['field']['options']['name']}()->sync($value['value']);
        }

        $routeParams['breadableName'] = $breadableKey;
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
        $breadableKey = \request()->route('breadableName');
        $breadableName = \Jasmine::getBreadables()[$breadableKey] ?? abort(404);
        $breadableId = \request()->route()->parameter('breadableId');

        /** @var null|Model|BreadableInterface $breadable */
        $breadable = call_user_func("$breadableName::find", $breadableId);

        if (!$breadable) abort(404);

        return ['success' => $breadable->delete()];
    }

}
