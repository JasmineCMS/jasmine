<?php

namespace Jasmine\Jasmine\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void routes()
 * @method static void apiRoutes()
 * @method static array getAuthenticatedRouteGroups()
 * @method static array getApiRouteGroups()
 * @method static array getGuestRouteGroups()
 * @method static self registerAuthenticatedRouteGroup(\Closure $callback, ?string $id = null)
 * @method static self registerApiRouteGroup(\Closure $callback, ?string $id = null)
 * @method static self registerGuestRouteGroup(\Closure $callback, ?string $id = null)
 *
 * @method static array getLocales()
 * @method static void registerLocales(array $locales)
 *
 * @method static array getInterfaceLocales()
 * @method static void registerInterfaceLocale(string $locale, string|array $strings)
 * @method static array getInterfaceLocale(string $locale)
 *
 * @method static void registerPermission(string $key)
 * @method static array getPermissions()
 * @method static array getPermissionFields()
 *
 * @method static array getBreadables()
 * @method static void registerBreadable(string|mixed $breadable, bool $addMenuItem = true, ?int $menuPriority = null)
 *
 * @method static void registerPage(string|mixed $page, bool $addMenuItem = true)
 * @method static string|null getPage(string $pageSlug)
 *
 * @method static void registerSideBarMenuItem(string $id, \Closure $item, ?int $priority = 50)
 * @method static void registerSideBarSubMenuItem(string $parent, string $id, \Closure $item, ?int $priority = 50)
 * @method static array getSideBarMenuItems()
 *
 * @method static array getCustomJses()
 * @method static array getCustomStyles()
 * @method static void registerCustomJs(string $path)
 * @method static void registerCustomStyle(string $path)
 *
 * @method static void registerOauth2Sso(string $name, string $icon, string $client_id, string $client_secret, string $authorize_url, string $token_url, array $scopes, \Closure|bool $allowCreate, \Closure $userDataCallback)
 * @method static array|null getOauth2Ssos(?string $name = null)
 *
 * @method static string registerDashboardCard(array $config, ?string $id = null)
 * @method static array|null getDashboardCards(?string $name = null)
 *
 * @method static void registerTranslationService(string $id, \Closure $closure)
 * @method static array|\Closure|null getTranslationService(?string $id = null)
 * @method static array listTranslationServices()
 *
 * @see \Jasmine\Jasmine\Jasmine
 */
class Jasmine extends Facade { protected static function getFacadeAccessor(): string { return 'jasmine'; } }
