<?php

namespace Jasmine\Jasmine;

use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;

class Jasmine
{
    protected $breadables = [];

    public function routes()
    {
        require __DIR__ . '/../routes.php';
    }

    /**
     * Register a breadable model
     *
     * @param string $breadable
     *
     * @throws MustImplementBreadableInterface
     */
    public function registerBreadable(string $breadable)
    {
        if (!in_array(BreadableInterface::class, class_implements($breadable))) {
            throw new MustImplementBreadableInterface("\"$breadable\" must implement \"" . BreadableInterface::class . '"');
        }

        $this->breadables[] = $breadable;
    }

    public function getBreadables(): array
    {
        return $this->breadables;
    }

    public function getSideBarMenuItems()
    {
        $items = collect([]);

        $items->push([
            'href'  => route('jasmine.dashboard'),
            'title' => __('Dashboard'),
            'icon'  => 'fa-tachometer-alt',
        ]);

        $items->push([
            'title'    => __('Pages'),
            'icon'     => 'fa-newspaper',
            'children' => [
                ['href' => route('jasmine.dashboard'), 'title' => __('Home')],
                ['href' => route('jasmine.dashboard'), 'title' => __('Home')],
                ['href' => route('jasmine.dashboard'), 'title' => __('Home')],
            ],
        ]);

        foreach ($this->breadables as $breadable) {
            $item = [];
            $item['href'] = route('jasmine.bread.index', $breadable);
            $item['title'] = call_user_func("$breadable::getPluralName");

            if ($icon = call_user_func("$breadable::getMenuIcon")) {
                $item['icon'] = $icon;
            }

            $items->push($item);
        }

        $items->push([
            'href'  => route('jasmine.dashboard'),
            'title' => __('Settings'),
            'icon'  => 'fa-sliders-h',
        ]);


        return $items->map(function ($item) {
            if (isset($item['children']) && count($item['children']) > 0) {
                $item['opened'] = $item['opened'] ?? false;
            }

            return $item;
        });
    }
}
