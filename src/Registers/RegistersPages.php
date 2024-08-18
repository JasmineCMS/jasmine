<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
use Jasmine\Jasmine\Models\JasminePage;
use Jasmine\Jasmine\Models\JasmineUser;

trait RegistersPages
{
    private array $pages = [];

    /**
     * Register a page
     *
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

        /** @var JasmineUser|null $user */
        $user = Auth::guard(config('jasmine.guard'))->user();

        if ($addMenuItem) {
            $this->registerSideBarSubMenuItem('pages', $slug, function () use ($page, $slug, $user) {
                return [
                    'title'    => $page::getPageName(),
                    'href'     => route('jasmine.page.edit', $slug),
                    'is-route' => ['r' => 'jasmine.page.edit', 'p' => ['jasminePage' => $slug]],
                    'hidden'   => !$user?->jCan('pages.' . $slug . '.read'),
                ];
            });
        }

        foreach (['read', 'edit'] as $p) $this->registerPermission(
            'pages.' . $slug . '.' . $p,
        );
    }

    public function getPage(string $pageSlug): ?string
    {
        return $this->pages[$pageSlug] ?? null;
    }
}
