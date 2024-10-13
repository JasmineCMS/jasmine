<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\Arr;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Bread\SortableTrait;
use Jasmine\Jasmine\Models\JasmineRevision;

class BreadController extends Controller
{
    public function index()
    {
        $bKey = \request()->route('breadableName');
        /** @var BreadableInterface|Model $breadableClass */
        $breadableClass = Jasmine::getBreadables()[$bKey] ?? abort(404);

        // Check permission
        $user = Auth::guard(config('jasmine.auth.guard'))->user();
        if (!$user->jCan('models.' . $bKey . '.browse')) abort(401);

        $permissions = ['b'];
        if ($user->jCan('models.' . $bKey . '.read')) $permissions[] = 'r';
        if ($user->jCan('models.' . $bKey . '.edit')) $permissions[] = 'e';
        if ($user->jCan('models.' . $bKey . '.add')) $permissions[] = 'a';
        if ($user->jCan('models.' . $bKey . '.delete')) $permissions[] = 'd';

        $q = method_exists($breadableClass, 'jasmineQuery')
            ? $breadableClass::jasmineQuery()
            : $breadableClass::query();

        $columns = [$q->getModel()->getKeyName() => ['data' => $q->getModel()->getKeyName()]];

        $sortable = false;
        if (in_array(SortableTrait::class, class_uses($breadableClass))) {
            $sortable = true;

            /** @var Model|Breadable $bi */
            $bi = $q->getModel();
            $columns['j_sort'] = [
                'id'    => 'j_sort',
                'data'  => $bi->determineOrderColumnName(),
                'label' => __('Order'),
                //'sortable' => false,
            ];

            if ($bi->sortable['group_by'] ?? null) {
                if (method_exists($bi, 'getJasmineSortingGroups')) {
                    $columns['j_sort']['groups'] = $bi->getJasmineSortingGroups();
                } else {
                    $columns['j_sort']['groups'] =
                        $breadableClass
                            ::select($bi->sortable['group_by'])->distinct()->get()
                            ->map(fn($i) => ['v' => $i->{$bi->sortable['group_by']}]);
                }
            }
        }

        foreach ($breadableClass::browseableColumns() as $k => $v) {
            if (is_array($v)) $columns[$k] = $v;
            else if ($v instanceof \Closure) $columns[$k] = ['data' => $k, 'render' => $v];
            else $columns[$v] = ['data' => $v];
        }

        if ($q->getModel()->usesTimestamps()) {
            $timestamps = [
                $q->getModel()->getUpdatedAtColumn(),
                $q->getModel()->getCreatedAtColumn(),
            ];

            foreach ($timestamps as $ts) {
                if (in_array($ts, array_keys($columns))) continue;

                $columns[$ts] = [
                    'data'   => $ts, 'sortable' => true, 'filtering' => 'date',
                    'render' => fn($v) => $v->format('d.m.Y H:i:s'),
                ];
            }

        }

        if (!isset($columns['j_actions'])) $columns['j_actions'] = [
            'data'     => $q->getModel()->getKeyName(),
            'label'    => __('Actions'),
            'id'       => 'j_actions',
            'sortable' => false,
        ];

        // load relations
        $relations = [];
        foreach ($columns as $id => $col) {
            if (!str_contains($col['data'], '.')) continue;

            [$relation, $relation_cols] = explode('.', $col['data']);
            $relation = Str::camel($relation);
            $relations[$relation] ??= [];
            if (str_contains($relation_cols, ',')) $columns[$id]['sortable'] = false;
            foreach (explode(',', $relation_cols) as $relation_col) $relations[$relation][] = $relation_col;
        }

        // count
        foreach ($columns as $id => $col) {
            if (!str_ends_with($col['data'], '_count')) continue;
            [$relation] = explode('_count', $col['data']);
            $relation = Str::camel($relation);
            if (!$q->getModel()->isRelation($relation)) continue;
            $q->withCount($relation);

            $columns[$id]['label'] ??= __(Str::title($relation));
        }


        foreach ($relations as $relation => $cols) {
            $cols = array_unique($cols);

            /** @var Relation $rb */
            $rb = (new $breadableClass)->{$relation}();

            $key = null;
            if ($rb instanceof HasMany) $key = $rb->getForeignKeyName();
            if ($rb instanceof BelongsTo) $key = $rb->getOwnerKeyName();
            if ($rb instanceof HasOneThrough) $key = $rb->getSecondLocalKeyName();

            if ($key && !in_array($key, $cols)) array_unshift($cols, $key);
            if (in_array('*', $cols)) $cols = ['*'];
            $q->with([$relation => fn($rq) => $rq->select($cols)]);
        }

        $locale = null;

        // load filter options
        foreach ($columns as $k => $col) if (
            is_array($col['filtering'] ?? null)
            && count($col['filtering']) === 0
        ) {
            if (str_contains($col['data'], '.')) {
                $columns[$k]['filtering'] = []; // TODO?
            } else {
                $columns[$k]['filtering'] = $q->getModel()->newQuery()
                    ->select($col['data'])->distinct()->pluck($col['data'])->toArray();
            }
        }


        if (in_array(Translatable::class, class_uses($breadableClass))) {
            $locale = request('_locale', Jasmine::getLocales()[0]);
        }

        // label
        foreach ($columns as $k => $v) $columns[$k]['label'] ??= __(Str::headline($v['data']));

        return inertia('Bread/Index', [
            'b'         => [
                'key'      => $bKey,
                'singular' => $breadableClass::getSingularName(),
                'plural'   => $breadableClass::getPluralName(),
                'sortable' => $sortable,
            ],
            'can'       => $permissions,
            'locale'    => $locale,
            'columns'   => array_map(function ($c) {
                $c = Arr::except($c, ['render']);
                $c['data'] = explode(',', $c['data'])[0];
                return $c;
            }, array_values($columns)),
            'paginator' => $q
                ->when(request('filters'), fn(Builder $q, $v) => $q->where(function (Builder $q) use ($v, $columns) {
                    if (!is_array($v)) return;

                    $filterable = array_column(array_filter($columns,
                        fn($x) => $x['filtering'] ?? null
                    ), 'data');

                    foreach (array_filter($v) as $ff => $fv) {
                        if (!in_array($ff, $filterable)) continue;
                        // TODO handle relationships

                        if (str_contains($ff, '.')) {
                            $col = array_values(array_filter($columns, fn($x) => $x['data'] === $ff))[0];
                            [$relation, $relation_col] = explode('.', $col['data']);
                            $q->whereHas($relation, function (Builder $fq) use ($col, $fv, $relation, $relation_col) {
                                if ($col['filtering'] === 'date') $fq->whereBetween($relation_col, explode(',', $fv));
                                else $fq->whereIn($relation_col, explode(',', $fv));
                            });
                        } else {
                            $col = array_values(array_filter($columns, fn($x) => $x['data'] === $ff))[0];
                            if ($col['filtering'] === 'date') $q->whereBetween($ff, explode(',', $fv));
                            else $q->whereIn($ff, explode(',', $fv));
                        }
                    }
                }))
                ->when(request('q'), function (Builder $q, $v) use ($columns, $relations) {
                    return $q->where(function (Builder $q) use ($v, $columns, $relations) {
                        $relations_used = [];
                        foreach (array_unique(array_map(fn($c) => $c['data'],
                            array_filter($columns, fn($c) => $c['searchable'] ?? true),
                        )) as $c) {
                            if (str_contains($c, '.')) {
                                [$relation, $relation_cols] = explode('.', $c);
                                if (in_array($relation, $relations_used)) continue;
                                $relations_used[] = $relation;
                                $relation = Str::camel($relation);
                                $q->orWhereHas($relation, function ($rq) use ($relation, $relations, $v) {
                                    $rq->where(function ($rq) use ($relations, $relation, $v) {
                                        foreach ($relations[$relation] as $rc) {
                                            $rq->orWhereRaw("LOWER(`$rc`)" . ' LIKE ?', ['%' . strtolower($v) . '%']);
                                        }
                                    });
                                });
                            } else {
                                $q->orWhereRaw("LOWER(`$c`)" . ' LIKE ?', ['%' . strtolower($v) . '%']);
                            }
                        }
                    });
                })
                ->when(request('sortBy'), function (Builder $q, $v) use ($breadableClass, $columns) {
                    $col = $columns[$v] ?? array_values(array_filter($columns, fn($c) => $c['data'] === $v))[0] ?? null;
                    if (!$col) abort(404);
                    if (isset($col['sortable']) && !$col['sortable']) return;
                    if (str_contains($v, '.')) {
                        [$relation, $relation_col] = explode('.', $v);
                        $relation = Str::camel($relation);

                        /** @var Relation $rb */
                        $rb = (new $breadableClass)->{$relation}();
                        $rq = $rb->getRelated()->newQuery()->select([$relation_col]);

                        if ($rb instanceof BelongsTo) {
                            $rq->whereColumn(
                                $rb->getQualifiedOwnerKeyName(),
                                $rb->getQualifiedForeignKeyName(),
                            );
                        }

                        $q->orderBy($rq, \request('sort', 'asc'));
                    } else {
                        $q->orderBy($v, \request('sort', 'asc'));
                    }
                })
                ->when(request('sortGroup'), function (Builder $q, $v) {
                    $q->where($q->getModel()->sortable['group_by'], $v);
                })
                ->paginate(request('perPage', 10))->withQueryString()
                ->through(function (Model|BreadableInterface $m) use ($columns, $locale, $relations) {

                    if (in_array(Translatable::class, class_uses($m))) {
                        $locale = request('_locale', Jasmine::getLocales()[0]);
                        $m->setLocale($locale);
                    }

                    // localize relations
                    foreach ($relations as $r => $rf) {
                        if ($locale && in_array(Translatable::class, class_uses($m->{$r}))) {
                            $m->{$r}->setLocale($locale);
                        }
                    }

                    $d = static::fireEvent('retrievedForIndex', $m);

                    foreach ($columns as $col => $v) if (isset($v['render'])) {
                        $col = is_array($v) ? $v['data'] : $col;
                        $field = $col;
                        if (str_contains($col, '.')) $field = explode('.', $col)[0];
                        $d[$col] = $v['render']($m->{$field}, $m);
                    }

                    $d['jasmine_title'] = $m->getTitle();

                    if (method_exists($m, 'jasmineGetPublicUrl')) {
                        $d['jasmine_public_url'] = $m->jasmineGetPublicUrl();
                    }

                    return $d;
                }),
        ]);
    }

    public function edit()
    {
        $bKey = \request()->route('breadableName');
        /** @var BreadableInterface|Model $breadableClass */
        $breadableClass = Jasmine::getBreadables()[$bKey] ?? abort(404);
        $breadableId = \request()->route()->parameter('breadableId');

        // Check permission
        $user = Auth::guard(config('jasmine.auth.guard'))->user();
        if (!$user->jCan('models.' . $bKey . '.' . ($breadableId ? 'read' : 'add'))) abort(401);

        $permissions = ['r'];
        if ($user->jCan('models.' . $bKey . '.browse')) $permissions[] = 'b';
        if ($user->jCan('models.' . $bKey . '.edit')) $permissions[] = 'e';
        if ($user->jCan('models.' . $bKey . '.add')) $permissions[] = 'a';
        if ($user->jCan('models.' . $bKey . '.delete')) $permissions[] = 'd';

        /** @var BreadableInterface|Model $ent */
        $ent = $breadableId
            ? $breadableClass::find($breadableId)
            : new $breadableClass();

        $locale = app()->getLocale();

        if (in_array(Translatable::class, class_uses($breadableClass))) {
            $locale = request('_locale', Jasmine::getLocales()[0]);
            $ent->setLocale($locale);
        }

        if (request('rev')) {
            $rev = JasmineRevision::whereRevisionableType($breadableClass)->whereRevisionableId($breadableId)
                ->where('created_at', Carbon::createFromFormat('Y-m-d-H-i-s', request('rev')))
                ->firstOrFail();
            $data = $rev->contents;
        } else {
            $data = static::fireEvent('retrievedForEdit', $ent);
        }

        return inertia('Bread/Edit', [
            'can'        => $permissions,
            'b'          => [
                'key'      => $bKey,
                'singular' => $breadableClass::getSingularName(),
                'plural'   => $breadableClass::getPluralName(),
                'manifest' => $breadableClass::fieldsManifest($ent),
                'fields'   => $breadableClass::fieldsManifest($ent)->getFields(),
            ],
            'entId'      => $breadableId,
            'ent'        => $data,
            'title'      => $ent->exists ? $ent->getTitle() : null,
            'fm_path'    => $breadableClass::getPluralName() . '/' . $ent->getKey(),
            'locale'     => $locale,
            'public_url' => $ent->exists ? method_exists($ent, 'jasmineGetPublicUrl') ? $ent->jasmineGetPublicUrl() : null : null,
            'loadedRev'  => isset($rev) ? $rev->created_at : null,
            'revisions'  => JasmineRevision
                ::whereRevisionableType($ent::class)
                ->whereRevisionableId($ent->getKey())
                ->latest()
                ->with('user:id,name,email')
                ->get(['id', 'jasmine_user_id', 'locale', 'created_at'])
                ->map(fn(JasmineRevision $r) => [
                    ...$r->only(['locale', 'created_at']),
                    'created_at_h' => $r->created_at->format('d.m.y H:i:s'),
                    'user'         => $r->user?->only(['name', 'email', 'avatar_url']),
                ]),
        ]);
    }

    public function save()
    {
        $bKey = \request()->route('breadableName');
        /** @var BreadableInterface|Model $breadableClass */
        $breadableClass = Jasmine::getBreadables()[$bKey] ?? abort(404);
        $breadableId = \request()->route()->parameter('breadableId');

        /** @var BreadableInterface|Model $ent */
        $ent = $breadableId
            ? $breadableClass::find($breadableId)
            : new $breadableClass();

        // Check permission
        if (
            !Auth::guard(config('jasmine.auth.guard'))
                ->user()
                ->jCan('models.' . $bKey . '.' . ($ent->exists ? 'edit' : 'add'))
        ) abort(401);

        $rules = [];
        foreach ($breadableClass::fieldsManifest($ent)->getFields() as $f) {
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
        if (in_array(Translatable::class, class_uses($breadableClass))) {
            $locale = request('_locale', Jasmine::getLocales()[0]);
            $ent->setLocale($locale);
        }

        $many_to_many_fields = [];
        foreach ($breadableClass::fieldsManifest($ent)->getFields() as $field) {
            $field = $field->toArray();
            if ($field['type'] !== 'RelationshipField') continue;

            if ($field['options']['many_to_many']) {
                $many_to_many_fields[$field['name']] = ['field' => $field, 'value' => $data[$field['name']] ?? []];
                unset($data[$field['name']]);
            } else if ($field['options']['parent_key_name']) {
                $data[$field['options']['parent_key_name']] = $data[$field['name']];
                unset($data[$field['name']]);
            }
        }

        $old = static::fireEvent('retrievedForEdit', $ent);

        $data = static::fireEvent('saving', $ent, $data);

        $ent->fill($data);
        $changed = $ent->exists && $ent->isDirty();
        $ent->save();

        static::fireEvent('saved', $ent);

        if ($changed) $this->recordRevision($ent, $old);

        foreach ($many_to_many_fields as $value) {
            $ent->{$value['field']['options']['name']}()->sync($value['value']);
        }

        return redirect()->route('jasmine.bread.edit', [$bKey, $ent->getKey(), '_locale' => $locale])->withSwal([
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

    public function delete()
    {
        $bKey = \request()->route('breadableName');
        $breadableId = \request()->route()->parameter('breadableId');
        /** @var BreadableInterface|Model $breadableClass */
        $breadableClass = Jasmine::getBreadables()[$bKey] ?? abort(404);


        // Check permission
        if (
            !Auth::guard(config('jasmine.auth.guard'))->user()->jCan('models.' . $bKey . '.delete')
        ) abort(401);

        /** @var Model|BreadableInterface $model */
        $model = $breadableClass::findOrFail($breadableId);

        static::fireEvent('deleting', $model);

        $model->delete();

        return redirect()->back();
    }

    public function reorder()
    {
        $bKey = \request()->route('breadableName');
        /** @var BreadableInterface|Model $breadableClass */
        $breadableClass = Jasmine::getBreadables()[$bKey] ?? abort(404);

        // Check permission
        if (
            !Auth::guard(config('jasmine.auth.guard'))->user()->jCan('models.' . $bKey . '.edit')
        ) abort(401);

        $data = request()->validate([
            'order'   => 'required|array',
            'order.*' => 'required|integer',
        ]);

        foreach ($data['order'] as $id => $order) {
            /** @var Model|Breadable|SortableTrait $m */
            $m = $breadableClass::find($id);
            if (!$m) continue;

            $m->{$m->determineOrderColumnName()} = $order;
            $m->save();
        }

        return redirect()->back();
    }

    private static function fireEvent(string $event, Model $m, ?array $data = null): ?array
    {
        switch ($event) {
            case 'retrievedForIndex':
                foreach (class_uses_recursive($m) as $trait) {
                    if (method_exists($m, class_basename($trait) . 'JasmineOnRetrievedForIndex'))
                        $m::{class_basename($trait) . 'JasmineOnRetrievedForIndex'}($m);
                }

                if (method_exists($m, 'jasmineOnRetrievedForIndex')) return $m::jasmineOnRetrievedForIndex($m);
                return $m->toArray();
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
            case 'deleting':
                foreach (class_uses_recursive($m) as $trait) {
                    if (method_exists($m, class_basename($trait) . 'JasmineOnDeleting'))
                        $m::{class_basename($trait) . 'JasmineOnDeleting'}($m);
                }

                if (method_exists($m, 'jasmineOnDeleting')) $m::jasmineOnDeleting($m);
                break;
        }

        return null;
    }

    private function recordRevision(Model|BreadableInterface $m, array $old)
    {
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

    public function fake()
    {
        $data = request()->validate(['count' => ['required', 'integer', 'min:1', 'max:100']]);
        $bKey = \request()->route('breadableName');
        /** @var BreadableInterface|Breadable|Model $breadableClass */
        $breadableClass = Jasmine::getBreadables()[$bKey] ?? abort(404);

        $breadableClass::factory($data['count'])->create();

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
