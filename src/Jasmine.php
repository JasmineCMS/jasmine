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
    protected $minifiedAssets = true;

    protected $breadables = [];

    protected $pages = [];

    protected $locales = [];

    protected $appJs = [];

    protected $appStyles = [];

    protected $sideBarMenuFilters = [];

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

    /**
     * Register a page
     *
     * @param string $page
     *
     * @throws MustExtendJasminePage
     */
    public function registerPage(string $page)
    {
        if (!is_subclass_of($page, JasminePage::class)) {
            throw new MustExtendJasminePage("\"$page\" must extend \"" . JasminePage::class . '"');
        }

        $name = Str::slug(call_user_func("$page::getPageName"));

        $this->pages[$name] = $page;

    }

    /**
     * Set available locales, overwrites existing
     *
     * @param array $locales
     */
    public function registerLocales(array $locales)
    {
        $this->locales = $locales;
    }

    public function getBreadables(): array
    {
        return $this->breadables;
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

    public function getLocales()
    {
        return $this->locales;
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
            'href'  => route('jasmine.fm.show'),
            'title' => __('File Manager'),
            'icon'  => 'fa-folder',
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


        $items = $items->map(function ($item) {
            if (isset($item['children']) && count($item['children']) > 0) {
                $item['opened'] = $item['opened'] ?? false;
            }

            return $item;
        });

        foreach ($this->sideBarMenuFilters as $filter) {
            $items = $filter($items);
        }

        return $items;
    }

    public function addSideBarMenuFilter(callable $cb)
    {
        $this->sideBarMenuFilters[] = $cb;
    }

    /**
     * Register custom js file to run on backend
     *
     * @param string $path full url of the js file (prefer https)
     */
    public function registerCustomJs(string $path)
    {
        $this->appJs[] = $path;
    }

    public function getCustomJses()
    {
        return $this->appJs;
    }

    /**
     * Register custom stylesheet file to run on backend
     *
     * @param string $path full url of the stylesheet file (prefer https)
     */
    public function registerCustomStyle(string $path)
    {
        $this->appStyles[] = $path;
    }

    public function getCustomStyles()
    {
        return $this->appStyles;
    }

    public function useUnMinifiedAssets()
    {
        $this->minifiedAssets = false;
    }

    public function appAssetsManifest()
    {
        return 'jasmine-public/app-assets' . ($this->minifiedAssets ? '/min' : '');
    }
}
