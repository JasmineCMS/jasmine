<?php

namespace Jasmine\Jasmine;

use Jasmine\Jasmine\Registers\RegistersBreadables;
use Jasmine\Jasmine\Registers\RegistersCustomAssets;
use Jasmine\Jasmine\Registers\RegistersLocales;
use Jasmine\Jasmine\Registers\RegistersPages;
use Jasmine\Jasmine\Registers\RegistersSideBarMenuItems;

class Jasmine
{
    use RegistersLocales,
        RegistersBreadables,
        RegistersPages,
        RegistersSideBarMenuItems,
        RegistersCustomAssets;

    public function routes(callable $group = null, callable $authedGroup = null) { require __DIR__ . '/../routes.php'; }

    /** @deprecated */
    public function useUnMinifiedAssets() { }
}
