<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;
use Jasmine\Jasmine\Models\JasminePage;

trait RegistersPages
{
    private array $pages = [];


    /**
     * Register a page
     *
     * @param string|JasminePage $page
     *
     * @throws MustExtendJasminePage
     */
    public function registerPage(string $page, bool $addMenuItem = true)
    {
        if (!is_subclass_of($page, JasminePage::class)) {
            throw new MustExtendJasminePage("\"$page\" must extend \"" . JasminePage::class . '"');
        }

        $slug = \Str::slug($page::getPageName());

        $this->pages[$slug] = $page;

        if ($addMenuItem) {
            $this->registerSideBarSubMenuItem('pages', $slug, function () use ($page, $slug) {
                return [
                    'title'    => $page::getPageName(),
                    'href'     => route('jasmine.page.edit', $slug),
                    'is-route' => fn() => \Route::is('jasmine.page.*')
                        && \request()->route('jasminePage')->name === $slug,
                ];
            });
        }

    }

    public function getPage(string $pageSlug)
    {
        return $this->pages[$pageSlug] ?? null;
    }
}
