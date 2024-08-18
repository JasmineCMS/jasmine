<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
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
    public function registerPage(string $page, bool $addMenuItem = true): void
    {
        if (!is_subclass_of($page, JasminePage::class)) {
            throw new MustExtendJasminePage("\"$page\" must extend \"" . JasminePage::class . '"');
        }

        $slug = Str::slug($page::getPageName());

        $this->pages[$slug] = $page;

        if ($addMenuItem) {
            $this->registerSideBarSubMenuItem('pages', $slug, function () use ($page, $slug) {
                return [
                    'title'    => $page::getPageName(),
                    'href'     => route('jasmine.page.edit', $slug),
                    'is-route' => ['r' => 'jasmine.page.edit', 'p' => ['jasminePage' => $slug]],
                    'hidden'   => !Auth::guard(config('jasmine.guard'))
                        ->user()?->jCan('pages.' . $slug . '.read'),
                ];
            });
        }

        foreach (['read', 'edit'] as $p) $this->registerPermission(
            'pages.' . $slug . '.' . $p,
            ucfirst($p) . ' ' . $page::getPageName()
        );
    }

    public function getPage(string $pageSlug): ?string
    {
        return $this->pages[$pageSlug] ?? null;
    }
}
