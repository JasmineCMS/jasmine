<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;
use Jasmine\Jasmine\Models\JasminePage;

trait RegistersSideBarMenuItems
{
    private array $sideBarMenuItems = [];

    protected array $sideBarMenuFilters = [];

    public function registerSideBarMenuItem(string $id, \Closure $item, ?int $priority = 50)
    {
        $this->sideBarMenuItems[$id] = [$priority, $item];
    }


    public function registerSideBarSubMenuItem(string $parent, string $id, \Closure $item, ?int $priority = 50)
    {
        if (!isset($this->sideBarMenuItems[$parent])) {
            dd('parent not exists!!');
        }

        $this->sideBarMenuItems[$parent]['children'][$id] = [$priority, $item];
    }


    public function getSideBarMenuItems(): array
    {
        $list = $this->sideBarMenuItems;
        $list = \Arr::sort($list, fn($i) => $i[0]);

        $items = [];
        foreach ($list as $id => $item) {
            if (isset($item['children'])) {
                $childrenList = \Arr::sort($item['children'], fn($c) => $c[0]);
                $items[$id] = $item[1]() + [
                        'title'  => $id,
                        'icon'   => '',
                        'class'  => '',
                        'opened' => false,
                    ];
                $childrenItems = [];
                foreach ($childrenList as $cid => $c) {
                    $childrenItems[$cid] = $c[1]() + [
                            'title'  => $cid,
                            'class'  => '',
                            'active' => false,
                        ];

                    if (!isset($items[$id]['opened']) || !$items[$id]['opened']) {
                        if (isset($childrenItems[$cid]['is-route'])) {
                            $isRoute = $childrenItems[$cid]['is-route'];
                            $items[$id]['opened'] = $isRoute instanceof \Closure ? $isRoute() : \Route::is($isRoute);
                            $childrenItems[$cid]['active'] = $items[$id]['opened'];

                            //$items[$id]['opened'] = $items[$id]['active'];
                        }
                    }
                }

                $items[$id]['children'] = $childrenItems;
            } else {
                $items[$id] = $item[1]() + [
                        'title'  => $id,
                        'href'   => '#',
                        'target' => '_self',
                        'icon'   => '',
                        'class'  => '',
                    ];

                $items[$id]['active'] = false;
                if (isset($items[$id]['is-route'])) {
                    $isRoute = $items[$id]['is-route'];
                    $items[$id]['active'] = $isRoute instanceof \Closure ? $isRoute() : \Route::is($isRoute);
                }
            }
        }

        return $items;
    }


    /** @deprecated use registerSideBarMenuItem */
    public function addSideBarMenuFilter(callable $cb) { }
}
