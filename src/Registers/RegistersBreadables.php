<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;

trait RegistersBreadables
{
    private array $breadables = [];

    public function getBreadables(): array { return $this->breadables; }

    /**
     * Register a breadable model
     *
     * @param string|BreadableInterface $breadable
     *
     * @throws MustImplementBreadableInterface
     */
    public function registerBreadable(string $breadable, bool $addMenuItem = true)
    {
        if (!in_array(BreadableInterface::class, class_implements($breadable))) {
            throw new MustImplementBreadableInterface("\"$breadable\" must implement \"" . BreadableInterface::class . '"');
        }

        $key = $breadable::getBreadableKey();
        $this->breadables[$key] = $breadable;

        if ($addMenuItem) {
            $this->registerSideBarMenuItem($breadable, function () use ($breadable, $key) {
                return [
                    'title'    => $breadable::getPluralName(),
                    'href'     => route('jasmine.bread.index', $key),
                    'is-route' => fn() => \Route::is('jasmine.bread.*')
                        && \request()->route('breadableName') === $key,
                    'icon'     => $breadable::getMenuIcon(),
                ];
            });
        }
    }
}
