<?php

namespace Jasmine\Jasmine\Http\Controllers;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Jasmine\Jasmine\Bread\BreadableContext;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Manifest\Column;
use Jasmine\Jasmine\Dashboard\DashboardCard;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;

class AppController extends Controller
{
    public function dashboard(Request $request) {
        $cards = collect(Jasmine::getDashboardCards())->map(function (DashboardCard $card, string $id) use ($request) {
            try {
                $resolved = $card->isVue()
                    ? ['sfc' => $card->getSfc(), 'props' => $card->resolveProps($request)]
                    : ['html' => $card->render($request)];
            } catch (\Throwable $e) {
                report($e);

                return;
            }

            return [
                'id'      => $id,
                'type'    => $card->getType(),
                'width'   => $card->getWidth(),
                ...$resolved,
                'actions' => collect($card->getActions())->map(fn($a, $name) => [
                    'name'   => $name,
                    'method' => $a['method'],
                    'url'    => route('dashboard.card.action', [$id, $name]),
                ])->values(),
            ];
        })->filter()->values();

        return Inertia::render('Dashboard', ['cards' => $cards]);
    }

    public function dashboardCardAction(Request $request, string $card, string $action) {
        $card = Jasmine::getDashboardCard($card) ?? abort(404);
        $action = $card->getAction($action) ?? abort(404);

        abort_unless($request->isMethod($action['method']), 405);

        return ($action['handler'])($request);
    }

    public function search(Request $request) {
        $request->headers->set('Accept', 'application/json');

        $request->validate(['q' => ['required', 'string', 'min:2']]);

        /** @var JasmineUser $user */
        $user = AuthController::guard()->user();

        $raw = (string)$request->q;
        $needle = '%' . addcslashes(mb_strtolower($raw, 'UTF-8'), '%_\\') . '%';

        $perGroup = 5;
        $groups = [];

        $pageItems = [];
        foreach (Jasmine::getPages() as $slug => $pageClass) {
            if (!$user->jCan("pages.$slug.read")) continue;
            $name = $pageClass::getPageName();
            if (!Str::contains(Str::lower("$name $slug"), Str::lower($raw))) continue;

            $pageItems[] = ['title' => $name, 'url' => route('jasmine.page.edit', $slug)];
            if (count($pageItems) >= $perGroup) break;
        }
        if ($pageItems) $groups[] = [
            'key'   => 'pages',
            'label' => 'Pages',
            'icon'  => 'bi-file-text',
            'items' => $pageItems,
        ];

        foreach (Jasmine::getBreadables() as $key => $class) {
            /** @var class-string<BreadableInterface> $class */
            $context = new BreadableContext($key, $class);
            if (!$user->jCan($context->permission('read'))) continue;

            $columns = $this->searchableColumns($class);
            if (!$columns) continue;

            $items = $context->newQuery()->where(function (Builder $q) use ($columns, $needle, $raw) {
                foreach ($columns as $col) {
                    if ($col->searchLogic instanceof Closure) {
                        ($col->searchLogic)($q, $raw);

                        continue;
                    }

                    if ($col->isRelation()) {
                        $parts = explode('.', $col->data);
                        $relCols = array_pop($parts);
                        $path = collect($parts)->map(fn($p) => Str::camel($p))->implode('.');

                        $q->orWhereHas($path, fn(Builder $rq) => $rq->where(
                            function (Builder $rq) use ($relCols, $needle) {
                                foreach (explode(',', $relCols) as $rc) {
                                    $k = $rq->getGrammar()->wrap($rc);
                                    $rq->orWhereRaw("LOWER($k) LIKE ?", [$needle]);
                                }
                            }
                        ));
                    } else {
                        $k = $q->getGrammar()->wrap($col->data);
                        $q->orWhereRaw("LOWER($k) LIKE ?", [$needle]);
                    }
                }
            })
                ->limit($perGroup)->get()
                ->map(fn(Model&BreadableInterface $m) => [
                    'title' => $m->getTitle(),
                    'url'   => route('jasmine.bread.edit', [
                        'breadable'   => $key,
                        'breadableId' => $m->getKey(),
                    ]),
                ])->all();

            if ($items) {
                $groups[] = [
                    'key'   => $key,
                    'label' => $class::getPluralName(),
                    'icon'  => $class::getMenuIcon(),
                    'items' => $items,
                ];
            }
        }

        return ['groups' => $groups];
    }

    /**
     * @param class-string<BreadableInterface> $class
     * @return list<Column>
     */
    private function searchableColumns(string $class): array {
        $columns = [];

        foreach ($class::browseableColumns() as $k => $v) {
            $col = match (true) {
                $v instanceof Column  => $v,
                $v instanceof Closure => new Column(data: $k, render: $v),
                is_array($v)          => new Column(...$v),
                is_string($v)         => new Column($v),
                default               => null,
            };

            if (!$col || !$col->searchable) continue;
            if ($col->getAggregate() && !$col->searchLogic) continue;

            $columns[] = $col;
        }

        return $columns;
    }
}
