<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Models\JasminePage;

trait RegistersPages
{
    /** @var array<string, class-string<JasminePage>> */
    private array $pages = [];

    /** @return array<string, class-string<JasminePage>> */
    public function getPages(): array {
        return $this->pages;
    }

    /** @return null|class-string<JasminePage> */
    public function getPage(string $name): ?string {
        return $this->pages[$name] ?? null;
    }

    /**
     * Register a page
     *
     * @param class-string<JasminePage> $page
     *
     * @throws MustExtendJasminePage
     */
    public function registerPage(string $page, bool $addMenuItem = true, int $menuPriority = 50): void {
        if (!is_a($page, JasminePage::class, true)) {
            throw new MustExtendJasminePage(
                sprintf('"%s" must extend "%s".', $page, JasminePage::class)
            );
        }

        $name = $page::getPageName();
        $slug = $page::getPageSlug();
        $this->pages[$slug] = $page;

        if ($addMenuItem) $this->registerSideBarSubMenuItem('pages', $slug, fn() => [
            'title'    => $name,
            'href'     => route('jasmine.page.edit', $slug),
            'is-route' => ['r' => 'jasmine.page.edit', 'p' => ['jasminePage' => $slug]],
            'icon'     => $page::getMenuIcon(),
            'hidden'   => !AuthController::guard()->user()->jCan('pages.' . $slug . '.read'),
        ], $menuPriority);

        foreach (['read', 'edit', 'add'] as $i) $this->registerPermission("pages.$slug.$i");
    }
}
