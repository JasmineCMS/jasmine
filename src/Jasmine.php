<?php


namespace Jasmine\Jasmine;


class Jasmine
{
    public function routes()
    {
        require __DIR__ . '/../routes.php';
    }

    public function getSideBarMenuItems()
    {
        $items = collect([
            [
                'href'  => route('jasmine.dashboard'),
                'title' => __('Dashboard'),
                'icon'  => 'fa-tachometer-alt',
            ],
            [
                'title'    => __('Pages'),
                'icon'     => 'fa-newspaper',
                'children' => [
                    ['href' => route('jasmine.dashboard'), 'title' => __('Home')],
                    ['href' => route('jasmine.dashboard'), 'title' => __('Home')],
                    ['href' => route('jasmine.dashboard'), 'title' => __('Home')],
                ],
            ],
            [
                'href'  => route('jasmine.dashboard'),
                'title' => __('Settings'),
                'icon'  => 'fa-sliders-h',
            ],
        ]);

        return $items->map(function ($item) {
            if (isset($item['children']) && count($item['children']) > 0) {
                $item['opened'] = $item['opened'] ?? false;
            }

            return $item;
        });
    }
}
