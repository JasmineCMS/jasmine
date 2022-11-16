<?php

namespace Jasmine\Jasmine;

use Jasmine\Jasmine\Registers\RegistersBreadables;
use Jasmine\Jasmine\Registers\RegistersCustomAssets;
use Jasmine\Jasmine\Registers\RegistersInterfaceLocales;
use Jasmine\Jasmine\Registers\RegistersLocales;
use Jasmine\Jasmine\Registers\RegistersOauth2Sso;
use Jasmine\Jasmine\Registers\RegistersPages;
use Jasmine\Jasmine\Registers\RegistersPermissions;
use Jasmine\Jasmine\Registers\RegistersSideBarMenuItems;

class Jasmine
{
    use RegistersLocales,
        RegistersInterfaceLocales,
        RegistersPermissions,
        RegistersBreadables,
        RegistersPages,
        RegistersSideBarMenuItems,
        RegistersCustomAssets,
        RegistersOauth2Sso;
    
    public function routes(callable $group = null, callable $authedGroup = null): void { require __DIR__ . '/../routes.php'; }
}
