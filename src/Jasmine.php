<?php

namespace Jasmine\Jasmine;

use Jasmine\Jasmine\Registers\RegistersBreadables;
use Jasmine\Jasmine\Registers\RegistersCustomAssets;
use Jasmine\Jasmine\Registers\RegistersDashboardCards;
use Jasmine\Jasmine\Registers\RegistersInterfaceLocales;
use Jasmine\Jasmine\Registers\RegistersLocales;
use Jasmine\Jasmine\Registers\RegistersOauth2Sso;
use Jasmine\Jasmine\Registers\RegistersPages;
use Jasmine\Jasmine\Registers\RegistersPermissions;
use Jasmine\Jasmine\Registers\RegistersRoutes;
use Jasmine\Jasmine\Registers\RegistersSideBarMenuItems;
use Jasmine\Jasmine\Registers\RegistersTranslationServices;

class Jasmine
{
    use RegistersRoutes,
        RegistersLocales,
        RegistersInterfaceLocales,
        RegistersPermissions,
        RegistersBreadables,
        RegistersPages,
        RegistersSideBarMenuItems,
        RegistersCustomAssets,
        RegistersDashboardCards,
        RegistersOauth2Sso,
        RegistersTranslationServices;
}
