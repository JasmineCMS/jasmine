<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;
use Jasmine\Jasmine\Http\Controllers\AuthController;

trait RegistersBreadables
{
    /** @var array<string, class-string<BreadableInterface>> */
    private array $breadables = [];

    /** @return array<string, class-string<BreadableInterface>> */
    public function getBreadables(): array {
        return $this->breadables;
    }

    /**
     * Register a breadable model
     *
     * @param class-string<BreadableInterface> $breadable
     *
     * @throws MustImplementBreadableInterface
     */
    public function registerBreadable(string $breadable, bool $addMenuItem = true, int $menuPriority = 50): void {
        if (!is_a($breadable, BreadableInterface::class, true)) {
            throw new MustImplementBreadableInterface(
                sprintf('"%s" must implement "%s".', $breadable, BreadableInterface::class)
            );
        }

        $key = $breadable::getBreadableKey();
        $this->breadables[$key] = $breadable;

        if ($addMenuItem) $this->registerSideBarMenuItem($key, fn() => [
            'title'    => $breadable::getPluralName(),
            'href'     => route('jasmine.bread.index', $key),
            'is-route' => ['r' => 'jasmine.bread.*', 'p' => ['breadable' => $key]],
            'icon'     => $breadable::getMenuIcon(),
            'hidden'   => !AuthController::guard()->user()->jCan('models.' . $key . '.browse'),
        ], $menuPriority);

        foreach (['browse', 'read', 'edit', 'add', 'delete'] as $i) $this->registerPermission("models.$key.$i");
    }
}
