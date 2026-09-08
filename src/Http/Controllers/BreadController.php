<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Closure;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Jasmine\Jasmine\Bread\BreadableContext;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Manifest\Action;
use Jasmine\Jasmine\Bread\Manifest\Column;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;
use Jasmine\Jasmine\Bread\Sortable;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasminePage;
use Jasmine\Jasmine\Models\JasmineRevision;
use Jasmine\Jasmine\Models\JasmineUser;
use Throwable;

class BreadController extends Controller
{
    private static array $traitCache = [];

    private const array DATE_CASTS = ['date', 'datetime', 'immutable_date', 'immutable_datetime', 'timestamp'];

    private static function fireEvent(string $event, Model&BreadableInterface $model, ?array $data = null): ?array {
        $class = get_class($model);

        if (!isset(self::$traitCache[$class])) self::$traitCache[$class] = class_uses_recursive($model);

        $methodSuffix = ucfirst($event);

        // Fire Trait Hooks
        $res = $data;
        foreach (self::$traitCache[$class] as $trait) {
            $traitMethod = lcfirst(class_basename($trait)) . 'JasmineOn' . $methodSuffix;
            if (method_exists($model, $traitMethod)) $res = $model::$traitMethod($model, $res);
        }

        // Fire Model Hook
        $modelMethod = 'jasmineOn' . $methodSuffix;
        if (method_exists($model, $modelMethod)) $res = $model::$modelMethod($model, $res);

        return $res;
    }

    /**
     * Resolve the model actually holding the column, walking the relations of a dotted path.
     *
     * @return null|array{0: Model, 1: string}
     */
    private static function ownerOf(Model $model, string $data): ?array {
        $parts = explode('.', $data);
        $attr = array_pop($parts);

        foreach ($parts as $part) {
            $relation = Str::camel($part);
            if (!$model->isRelation($relation)) return null;

            try {
                $rel = $model->{$relation}();
            } catch (Throwable) {
                return null;
            }

            if (!$rel instanceof Relation) return null;

            $model = $rel->getRelated();
        }

        return [$model, $attr];
    }

    /**
     * Formatter for a date column, picked up from the model casts (or the eloquent
     * timestamps, which never show up in the casts). Null when it is not a date.
     */
    private static function dateRender(Model $model, string $data): ?Closure {
        [$owner, $attr] = self::ownerOf($model, $data) ?? [null, null];
        if (!$owner) return null;

        $cast = $owner->getCasts()[$attr] ?? (in_array($attr, $owner->getDates(), true) ? 'datetime' : null);
        if (!$cast) return null;

        // a cast may carry its own format, e.g. 'datetime:d/m/Y' — do not lowercase it, the format is case sensitive
        [$type, $castFormat] = array_pad(explode(':', $cast, 2), 2, null);
        $type = strtolower($type);
        if (!in_array($type, self::DATE_CASTS, true)) return null;

        // TODO: allow custom formatting for the casts that do not declare one?
        $format = $castFormat ?? (in_array($type, ['date', 'immutable_date'], true) ? 'd.m.Y' : 'd.m.Y H:i:s');

        return fn($v) => match (true) {
            $v === null || $v === ''        => null,
            $type === 'timestamp'           => Carbon::createFromTimestamp($v)->format($format),
            $v instanceof DateTimeInterface => $v->format($format),
            default                         => Carbon::parse($v)->format($format),
        };
    }

    private function buildRules(AbstractField $field, string $prefix) {
        $rules = [];
        $key = $prefix . '.' . $field->getName();

        if ($field->getRepeats() > 1 || $field->getRepeats() === true) {
            $rules[$key] = ['array'];
            $key .= '.*';
        }

        if ($field instanceof GroupedField) {
            $rules[$key] = ['array'];
            foreach ($field->getFields() as $child) $rules = array_merge($rules, $this->buildRules($child, $key));
        } else $rules[$key] = $field->getValidation() !== [] ? $field->getValidation() : ['nullable'];

        return $rules;
    }

    public function index(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        // Check permission
        abort_unless($user->jCan($breadable->permission('browse')), 403);

        $model = $breadable->newInstance();

        // Sortability
        $groupBy = $model instanceof Sortable ? ($model->sortable['group_by'] ?? null) : null;
        $reordering = $model instanceof Sortable && $request->boolean('reordering');
        $group = $request->input('group');

        /** @var Column[] $columns */
        $columns = [];
        $data = [];

        // App defined columns
        foreach ($breadable->class::browseableColumns() as $k => $v) {
            $col = match (true) {
                $v instanceof Column  => $v,
                $v instanceof Closure => new Column(data: $k, render: $v),
                is_array($v)          => new Column(...$v),
                is_string($v)         => new Column($v),
                default               => null,
            };
            if (!$col) continue;

            // date columns format themselves, unless the app renders them on its own
            if (!$col->render && ($render = self::dateRender($model, $col->data))) $col->render($render);

            $columns[] = $col;
            $data[] = $col->data;
        }

        // prepend primary key
        if ($model->getKeyName() && !in_array($model->getKeyName(), $data)) {
            $columns = [new Column($model->getKeyName()), ...$columns];
        }

        // timestamps
        if ($model->usesTimestamps()) foreach ([$model->getUpdatedAtColumn(), $model->getCreatedAtColumn()] as $ts) {
            if (!$ts || in_array($ts, $data)) continue;

            $columns[] = new Column(data: $ts, filtering: 'date', render: self::dateRender($model, $ts));
        }

        // input validation
        $request->validate([
            'filters'   => ['nullable', 'array'],
            'filters.*' => ['nullable', 'string'],
            'q'         => ['nullable', 'string'],
            'sortBy'    => ['nullable', 'string'],
            'sort'      => ['nullable', 'string', 'in:asc,desc'],
            'perPage'   => ['nullable', 'integer', 'min:1', 'max:100'],
            '_locale'   => ['sometimes', 'string', Rule::in(Jasmine::getLocales())],
        ]);

        // initiate an eloquent query
        $query = $breadable->newQuery();

        // load aggregates
        $aggregates = [];
        foreach ($columns as $col) {
            if (!($info = $col->getAggregate())) continue;
            $aggregates[] = $col->data;

            // check the first-level relationship.
            $checkRel = $info['path'] ? explode('.', $info['path'])[0] : $info['relation'];
            if (!method_exists($model, $checkRel)) continue;

            // direct relation
            if (!$info['path']) match ($info['fn']) {
                'count' => $query->withCount($info['relation']),
                'sum'   => $query->withSum($info['relation'], $info['column']),
                'avg'   => $query->withAvg($info['relation'], $info['column']),
                'min'   => $query->withMin($info['relation'], $info['column']),
                'max'   => $query->withMax($info['relation'], $info['column']),
                default => null,
            };
            // nested relation
            else $query->with([$info['path'] => fn(Relation $q) => match ($info['fn']) {
                'count' => $q->withCount($info['relation']),
                'sum'   => $q->withSum($info['relation'], $info['column']),
                'avg'   => $q->withAvg($info['relation'], $info['column']),
                'min'   => $q->withMin($info['relation'], $info['column']),
                'max'   => $q->withMax($info['relation'], $info['column']),
                default => null,
            }]);
        }

        // load relations
        $eagerLoads = $query->getEagerLoads();
        foreach ($columns as $col) {
            if (!$col->isRelation()) continue;

            $parts = explode('.', $col->data);
            array_pop($parts); // last segment is the column (or comma-separated columns)
            if (empty($parts)) continue;

            // TODO: load specific columns?

            $path = collect($parts)->map(fn($p) => Str::camel($p))->implode('.');
            if (!array_key_exists($path, $eagerLoads)) $query->with($path);
        }

        if (method_exists($model, 'getLocale')) {
            $locale = request('_locale', Jasmine::getLocales()[0] ?? app()->getLocale());
        } else $locale = null;

        $sorting = false;
        if ($model instanceof Sortable) {
            $sorting = ['by' => $model->determineOrderColumnName(), 'group_by' => $groupBy, 'groups' => null];
            if ($groupBy) $sorting['groups'] = method_exists($model, 'getJasmineSortingGroups')
                ? $model->getJasmineSortingGroups() : $breadable->newQuery()->select($groupBy)->distinct()
                    ->orderBy($groupBy)->pluck($groupBy)
                    ->map(fn($v) => ['v' => $v])->values()->all();
        }

        return Inertia::render('BreadIndex', [
            'breadable' => Inertia::once(fn() => [
                'key'      => $breadable->key,
                'singular' => $breadable->class::getSingularName(),
                'plural'   => $breadable->class::getPluralName(),
                'sortable' => $sorting,
                'columns'  => array_map(function (Column $c) use ($breadable, $model) {
                    if ($c->filtering === []) {
                        $res = [];
                        if (!$c->isRelation()) $res = $breadable->newQuery()->distinct()->whereNotNull($c->data)
                            ->orderBy($c->data)->pluck($c->data)->toArray();
                        else {
                            // Walk the dotted path (minus the trailing column list) to the terminal related model
                            $parts = explode('.', $c->data);
                            $relCols = array_pop($parts);
                            $firstCol = explode(',', $relCols)[0];

                            $inst = $model;
                            foreach ($parts as $p) {
                                $method = Str::camel($p);
                                if (!method_exists($inst, $method)) {
                                    $inst = null;
                                    break;
                                }
                                $inst = $inst->{$method}()->getRelated();
                            }

                            // TODO: limit? or maybe round-trip lookup (autocomplete)
                            if ($inst) $res = $inst->newQuery()->distinct()->whereNotNull($firstCol)
                                ->orderBy($firstCol)->pluck($firstCol)->toArray();
                        }

                        $c->filterable(array_map(fn($v) => match (true) {
                            is_bool($v) => $v ? '_T' : '_F',
                            default     => $v,
                        }, $res));
                    }

                    return $c->toArray();
                }, $columns),
            ])->as('breadable.index.' . $breadable->key),
            'locales'   => Inertia::once(fn() => $locale ? Jasmine::getLocales() : [])->as('breadable.locales.' . $breadable->key),
            'locale'    => $locale,
            'can'       => Inertia::once(function () use ($user, $breadable) {
                $res = ['b'];
                if ($user->jCan($breadable->permission('read'))) $res[] = 'r';
                if ($user->jCan($breadable->permission('edit'))) $res[] = 'e';
                if ($user->jCan($breadable->permission('add'))) $res[] = 'a';
                if ($user->jCan($breadable->permission('delete'))) $res[] = 'd';

                return $res;
            })->as('breadable.can.' . $breadable->key),
            'paginator' => $query
                ->when(request('filters'), function (Builder $q, array $filters) use ($columns) {
                    foreach ($filters as $fld => $val) {
                        if ($val === null || $val === '') continue;

                        // handle boolean
                        if ($val === '_T') $val = true;
                        elseif ($val === '_F') $val = false;

                        /** @var Column|null $col */
                        $col = array_find($columns, fn(Column $c) => $c->data === $fld);
                        if (!$col || $col->filtering === null) continue;

                        // ---- Date range "from,to" with either side optional ----
                        if ($col->filtering === 'date') {
                            [$from, $to] = array_pad(explode(',', $val, 2), 2, '');
                            $from = $from !== '' ? $from : null;
                            $to = $to !== '' ? $to : null;
                            if (!$from && !$to) continue;

                            $apply = function (Builder $b, string $column) use ($from, $to) {
                                if ($from) $b->whereDate($column, '>=', $from);
                                if ($to) $b->whereDate($column, '<=', $to);
                            };

                            if ($col->isRelation()) {
                                $parts = explode('.', $fld);
                                $relCol = array_pop($parts);
                                $relPath = collect($parts)->map(fn($p) => Str::camel($p))->implode('.');
                                $q->whereHas($relPath, fn(Builder $rq) => $apply($rq, $relCol));
                            } else $apply($q, $fld);

                            continue;
                        }

                        // ---- Multi-select: comma-separated values, whereIn-style ----
                        $values = array_values(array_filter(explode(',', $val), fn($v) => $v !== ''));
                        if (empty($values)) continue;

                        if ($col->isRelation()) {
                            $parts = explode('.', $fld);
                            $relCols = array_pop($parts);
                            $relPath = collect($parts)->map(fn($p) => Str::camel($p))->implode('.');

                            $q->whereHas($relPath, fn(Builder $rq) => $rq->where(
                                function (Builder $rq) use ($relCols, $values) {
                                    foreach (explode(',', $relCols) as $rc) $rq->orWhereIn($rc, $values);
                                }
                            ));
                        } else $q->whereIn($fld, $values);
                    }
                })
                ->when(request('q'), fn(Builder $q, $v) => $q->where(
                    function (Builder $q) use ($columns, $aggregates, $v) {
                        $needle = '%' . addcslashes(mb_strtolower($v, 'UTF-8'), '%_\\') . '%';

                        foreach ($columns as $col) {
                            if (!$col->searchable || (in_array($col->data, $aggregates) && !$col->searchLogic)) continue;

                            if ($col->searchLogic instanceof Closure)($col->searchLogic)($q, $v);
                            elseif ($col->isRelation()) {
                                $parts = explode('.', $col->data);

                                // The last element contains the column(s)
                                $relationCols = array_pop($parts);

                                // The remaining elements form the nested relation path.
                                // We camelCase each segment individually to ensure "user_profile.data" becomes "userProfile.data"
                                $path = collect($parts)->map(fn($part) => Str::camel($part))->implode('.');

                                // Laravel magically handles 'post.comments.likes.user' here
                                $q->orWhereHas($path,
                                    fn(Builder $rq) => $rq->where(function (Builder $rq) use ($relationCols, $needle) {
                                        foreach (explode(',', $relationCols) as $rc) {
                                            $k = $rq->getGrammar()->wrap($rc);
                                            $rq->orWhereRaw("LOWER($k) LIKE ?", [$needle]);
                                        }
                                    })
                                );
                            } else {
                                $k = $q->getGrammar()->wrap($col->data);
                                $q->orWhereRaw("LOWER($k) LIKE ?", [$needle]);
                            }
                        }
                    }
                ))
                ->when($reordering ? null : request('sortBy'), function (Builder $q, $v) use ($columns) {
                    $col = array_find($columns, fn(Column $i) => $i->data === $v);
                    if (!$col?->sortable) return;

                    $dir = request('sort', 'asc');

                    if (!$col->isRelation()) {
                        $q->orderBy($v, $dir);

                        return;
                    }

                    $parts = explode('.', $v);
                    if (count($parts) !== 2) abort(400, 'Sorting by nested relations is not supported');

                    [$relation, $relationCol] = $parts;
                    $relation = Str::camel($relation);

                    /** @var Relation $rel */
                    $rel = $q->getModel()->{$relation}();
                    $sub = $rel->getRelated()->newQuery()->select($relationCol);

                    if ($rel instanceof BelongsTo) {
                        $sub->whereColumn($rel->getQualifiedOwnerKeyName(), $rel->getQualifiedForeignKeyName());
                    } elseif ($rel instanceof HasOne) {
                        $sub->whereColumn($rel->getQualifiedForeignKeyName(), $rel->getQualifiedParentKeyName())->take(1);
                    } else {
                        abort(400, 'Cannot sort by this relation type');
                    }

                    $q->orderBy($sub, $dir);
                })
                ->when($reordering && $groupBy && $group !== null, fn(Builder $q) => $q->where($groupBy, $group))
                ->when($reordering, fn(Builder $q) => $q->ordered())
                ->paginate($reordering ? max(1, (clone $query)->count()) : request('perPage', 10))
                ->through(function (Model&BreadableInterface $m) use ($columns, $locale, $user) {
                    if ($locale) {
                        /** @var Translatable $translatable scoped alias — a @var on $m would retype it for the whole closure */
                        $translatable = $m;
                        $translatable->setLocale($locale);
                    }

                    $res = ['jasmine' => ['title' => $m->getTitle()]];

                    foreach ($columns as $col) {
                        $v = $res[$col->data] = data_get($m, $col->data);
                        if ($col->render instanceof Closure) $res[$col->data] = ($col->render)($v, $m);
                    }

                    if ($v = $m->getPublicUrl()) $res['jasmine']['public_url'] = $v;

                    $actions = array_filter($m->browseActions(),
                        fn(?Action $i) => $i && (!$i->permission || $user->jCan($i->permission)));

                    $res['jasmine']['actions'] = array_map(fn(string $k, Action $i) => [
                        ...$i->toArray(),
                        'url' => $i->handler ? route('jasmine.bread.action', [
                            'breadable'   => $m::getBreadableKey(),
                            'breadableId' => $m->getKey(),
                            'action'      => $k,
                        ]) : $i->url,
                    ], array_keys($actions), $actions);

                    return self::fireEvent('retrievedForIndex', $m, $res);
                }),
        ]);
    }

    public function edit(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');
        $breadableId = $request->route('breadableId');

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        // Check permission
        if ($breadableId) {
            abort_unless($user->jCan($breadable->permission('read')), 403);
            $model = $breadable->find($breadableId);
        } else {
            abort_unless($user->jCan($breadable->permission('add')), 403);
            $model = $breadable->newInstance();
            if ($v = session('bread_data')) $model->fill($v);
        }

        $request->validate([
            '_locale' => ['sometimes', 'string', Rule::in(Jasmine::getLocales())],
            'rev'     => ['nullable', 'date_format:Y-m-d-H-i-s'],
        ]);

        if (method_exists($model, 'setLocale')) {
            $locale = request('_locale', Jasmine::getLocales()[0] ?? app()->getLocale());
            /** @type Translatable $model */
            $model->setLocale($locale);
        } else $locale = null;

        $revisionableId = $model instanceof JasminePage ? $model->id : $model->getKey();

        if ($rev = request('rev')) {
            $revision = JasmineRevision::whereRevisionableType($model::class)->whereRevisionableId($revisionableId)
                ->where('created_at', Carbon::createFromFormat('Y-m-d-H-i-s', $rev))
                ->firstOrFail();

            $data = self::fireEvent('retrievedForEdit', $model, $revision->contents?->toArray() ?? []);
        } else {
            $data = self::fireEvent('retrievedForEdit', $model, $model->toArray());
        }

        return Inertia::render('BreadEdit', [
            'breadable' => Inertia::once(function () use ($breadable, $model) {
                $manifest = $breadable->class::fieldsManifest($model);
                if (is_array($manifest)) $manifest = new FieldsManifest($manifest);

                return [
                    'key'      => $model instanceof JasminePage ? 'pages' : $breadable->key,
                    'singular' => $breadable->class::getSingularName(),
                    'plural'   => $breadable->class::getPluralName(),
                    'manifest' => $manifest->toArray(),
                    'fields'   => $manifest->getFields(),
                ];
            })->as("breadable.edit.$breadable->key." . $locale),

            'locales'   => Inertia::once(fn() => $locale ? Jasmine::getLocales() : [])
                ->as('breadable.locales.' . $breadable->key),
            'locale'    => $locale,
            'can'       => Inertia::once(function () use ($user, $breadable) {
                $res = ['r'];
                if ($user->jCan($breadable->permission('browse'))) $res[] = 'b';
                if ($user->jCan($breadable->permission('edit'))) $res[] = 'e';
                if ($user->jCan($breadable->permission('add'))) $res[] = 'a';
                if ($user->jCan($breadable->permission('delete'))) $res[] = 'd';

                return $res;
            })->as('breadable.can.' . $breadable->key),
            'id'        => $model->getKey(),
            'ent'       => (object)$data,
            'title'     => $model->exists ? $model->getTitle() : null,
            'publicUrl' => $model->exists ? $model->getPublicUrl() : null,
            'loadedRev' => isset($revision) ? $revision->created_at : null,
            'revisions' => JasmineRevision::whereRevisionableType($model::class)->whereRevisionableId($revisionableId)
                ->latest()->with('user:id,name,email')
                ->get(['id', 'jasmine_user_id', 'locale', 'created_at'])
                ->map(fn(JasmineRevision $r) => [
                    'rev'    => $r->created_at->format('Y-m-d-H-i-s'),
                    'locale' => $r->locale,
                    'date'   => $r->created_at->format('d.m.y H:i:s'),
                    'user'   => $r->user?->only(['name', 'email', 'avatar_url']),
                ]),

            'translationServices' => (object)[],
            // TODO: translation service, file manager?
        ]);
    }

    public function save(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');
        $breadableId = $request->route('breadableId');

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        // Check permission
        if ($breadableId) {
            abort_unless($user->jCan($breadable->permission('edit')), 403);
            $model = $breadable->find($breadableId);
        } else {
            abort_unless($user->jCan($breadable->permission('add')), 403);
            $model = $breadable->newInstance();
        }

        $manifest = $breadable->class::fieldsManifest($model);
        if (is_array($manifest)) $manifest = new FieldsManifest($manifest);

        $rules = [
            '_locale' => ['sometimes', 'string', Rule::in(Jasmine::getLocales())],
            'v'       => ['array', 'required'],
        ];
        foreach ($manifest->getFields() as $field) {
            $rules = array_merge($rules, $this->buildRules($field, 'v'));
        }

        $data = $request->validate($rules)['v'];

        // handle pages
        if ($model instanceof JasminePage) {
            $data = ['content' => $data];
            $revisionableId = $model->id;
        } else {
            $revisionableId = $breadableId;
        }

        if (method_exists($model, 'setLocale')) {
            $locale = request('_locale', Jasmine::getLocales()[0] ?? app()->getLocale());
            /** @type Translatable $model */
            $model->setLocale($locale);
        } else $locale = null;

        $old = $model->exists ? $model->toArray() : null;
        $data = self::fireEvent('saving', $model, $data);

        $model->fill($data);
        $changed = $model->exists && $model->isDirty();
        $model->save();

        self::fireEvent('saved', $model);

        if ($changed && $old !== null) {
            $max = property_exists($model, 'jasmine_revisions')
                ? $model->jasmine_revisions
                : config('jasmine.revisions', 100);

            if ($max !== false) {
                if (intval($max) > 0) JasmineRevision::whereRevisionableType($model::class)
                    ->whereRevisionableId($revisionableId)->latest()->take(PHP_INT_MAX)
                    ->skip($max - 1)->get()->each->delete();

                JasmineRevision::create([
                    'jasmine_user_id'   => AuthController::guard()->id(),
                    'revisionable_type' => $model::class,
                    'revisionable_id'   => $revisionableId,
                    'locale'            => method_exists($model, 'getLocale') ? $model->getLocale() : null,
                    'contents'          => $old,
                ]);
            }
        }

        $to = $model instanceof JasminePage
            ? to_route('jasmine.page.edit', [
                'jasminePage' => $breadable->key,
                '_locale'     => $locale,
            ])
            : to_route('jasmine.bread.edit', [
                'breadable'   => $breadable->key,
                'breadableId' => $model->getKey(),
                '_locale'     => $locale,
            ]);

        return $to->with('swal', [
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

    public function fake(Request $request) {
        abort_unless(!app()->environment('production'), 404);

        $data = request()->validate(['count' => ['required', 'integer', 'min:1', 'max:100']]);

        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        abort_unless($user->jCan($breadable->permission('add')), 403);

        if (!method_exists($breadable->class, 'factory')) return redirect()->back()->with('swal', [
            'title' => 'Missing factory',
            'This bread does not have a factory.',
        ]);

        $request->validate([
            '_locale' => ['sometimes', 'string', Rule::in(Jasmine::getLocales())],
        ]);

        $orgLocale = app()->getLocale();
        $locale = request('_locale', Jasmine::getLocales()[0] ?? app()->getLocale());
        app()->setLocale($locale);
        $breadable->class::factory($data['count'])->create();
        app()->setLocale($orgLocale);

        return redirect()->back()->with('swal', [
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

    public function clone(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');
        $breadableId = $request->route('breadableId');

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        abort_unless($user->jCan($breadable->permission('read')), 403);
        $model = $breadable->find($breadableId);

        $request->validate([
            '_locale' => ['sometimes', 'string', Rule::in(Jasmine::getLocales())],
        ]);

        return redirect()->route('jasmine.bread.create', [
            'breadable' => $breadable->key,
            ...(request('_locale') ? ['_locale' => request('_locale')] : []),
        ])->with('bread_data', collect($model->toArray())->except([$model->getKeyName()]));
    }

    public function action(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');
        $breadableId = $request->route('breadableId');

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        abort_unless($user->jCan($breadable->permission('read')), 403);
        $model = $breadable->find($breadableId);

        $action = $model->browseActions()[$request->route('action')] ?? null;
        if (!$action?->getHandler()) abort(404);

        // the index merely hides unauthorized actions — the endpoint must enforce
        if ($action->permission) abort_unless($user->jCan($action->permission), 403);

        $res = $action->getHandler()($request, $model);

        if ($res) return $res;

        return redirect()->back();
    }

    public function delete(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');

        $model = $breadable->find($request->route('breadableId'));

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        // Check permission
        abort_unless($user->jCan($breadable->permission('delete')), 403);

        self::fireEvent('deleting', $model);

        $model->delete();

        return redirect()->back()->with('swal', ['title' => 'Deleted!']);
    }

    public function reorder(Request $request) {
        /** @var BreadableContext $breadable */
        $breadable = $request->route('breadable');

        abort_unless(AuthController::guard()->user()->jCan($breadable->permission('edit')), 403);

        $model = $breadable->newInstance();
        abort_unless($model instanceof Sortable, 400, 'Model is not sortable');

        /** @var Sortable $model */
        $orderColumn = $model->determineOrderColumnName();
        $pk = $model->getKeyName();

        $data = $request->validate(['ids' => ['required', 'array', 'min:1'], 'ids.*' => ['required', 'distinct']]);

        $model->getConnection()->transaction(function () use ($breadable, $model, $data, $orderColumn, $pk) {
            // order values currently occupied by exactly these rows: [id => value]
            $current = $breadable->newQuery()->whereIn($pk, $data['ids'])->pluck($orderColumn, $pk);

            // guard: all submitted rows must live in the same group (per-group sequences mustn't mix)
            if ($groupBy = $model->sortable['group_by'] ?? null) {
                $groups = $breadable->newQuery()->whereIn($pk, $data['ids'])->distinct()->pluck($groupBy);
                abort_if($groups->count() > 1, 422, 'All rows must belong to the same group');
            }

            $ids = array_values(array_filter($data['ids'], fn($id) => $current->has($id)));
            $pool = $current->values()->sort()->values(); // same values, ascending

            foreach ($ids as $i => $id) $breadable->newQuery()->whereKey($id)->update([$orderColumn => $pool[$i]]);
        });

        return back();
    }
}
