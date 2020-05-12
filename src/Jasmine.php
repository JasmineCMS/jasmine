<?php

namespace Jasmine\Jasmine;

use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\PageInterface;
use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;
use Jasmine\Jasmine\Models\JasminePage;

class Jasmine
{
    protected $breadables = [];

    protected $pages = [];

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

    public function registerPage(string $page)
    {
        if (!is_subclass_of($page, JasminePage::class)) {
            throw new MustExtendJasminePage("\"$page\" must extend \"" . JasminePage::class . '"');
        }

        $name = Str::slug(call_user_func("$page::getPageName"));

        $this->pages[$name] = $page;

    }

    public function getPages(): array
    {
        $pages = [];
        foreach ($this->pages as $name => $page) {
            $pages[] = [
                'href'  => route('jasmine.page.edit', Str::slug($name)),
                'title' => __($name),
            ];
        }

        return $pages;
    }


    public function getPage(string $pageSlug)
    {
        return $this->pages[$pageSlug] ?? null;
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
            'children' => $this->getPages(),
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
