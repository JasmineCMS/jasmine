<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Arr;

trait RegistersSideBarMenuItems
{
    protected array $sideBarMenuFilters = [];

    public function registerSideBarMenuItem(string $id, \Closure $item, ?int $priority = null): void
    {
        $priority ??= 50;

        $this->sideBarMenuItems[$id] = [$priority, $item];
    }

    public function registerSideBarSubMenuItem(string $parent, string $id, \Closure $item, ?int $priority = 50): void
    {
        if (!isset($this->sideBarMenuItems[$parent])) {
            dd('parent not exists!!');
        }

        $this->sideBarMenuItems[$parent]['children'][$id] = [$priority, $item];
    }

    public function getSideBarMenuItems(): array
    {
        $list = $this->sideBarMenuItems;
        $list = Arr::sort($list, fn($i) => $i[0]);

        $items = [];
        foreach ($list as $id => $item) {
            if (isset($item['children'])) {
                $childrenList = Arr::sort($item['children'], fn($c) => $c[0]);
                $items[$id] = $item[1]() + [
                    'title'  => $id,
                    'icon'   => '',
                    'class'  => '',
                    'opened' => false,
                    'hidden' => false,
                ];
                $childrenItems = [];
                foreach ($childrenList as $cid => $c) {
                    $childrenItems[$cid] = $c[1]() + [
                        'title'  => $cid,
                        'class'  => '',
                        'active' => false,
                        'icon'   => '',
                        'hidden' => false,
                    ];

                    $childrenItems[$cid]['is-route'] ??= null;
                    if ($childrenItems[$cid]['is-route'] instanceof \Closure) $childrenItems[$cid]['is-route'] = null;
                }

                $items[$id]['children'] = $childrenItems;
            } else {
                $items[$id] = $item[1]() + [
                    'title'  => $id,
                    'href'   => '#',
                    'target' => '_self',
                    'icon'   => '',
                    'class'  => '',
                    'hidden' => false,
                ];

                $items[$id]['is-route'] ??= null;
                if ($items[$id]['is-route'] instanceof \Closure) $items[$id]['is-route'] = null;
            }
        }

        return $items;
    }
}
