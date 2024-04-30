<?php

namespace Jasmine\Jasmine\Facades;

use Illuminate\Support\Facades\Facade;

/**
 * @method static void routes()
 * @method array getAuthenticatedRouteGroups()
 * @method array getGuestRouteGroups()
 * @method static registerAuthenticatedRouteGroup(\Closure $callback, ?string $id = null)
 * @method static registerGuestRouteGroup(\Closure $callback, ?string $id = null)
 *
 * @method static array getLocales()
 * @method static void registerLocales(array $locales)
 *
 * @method static array getInterfaceLocales()
 * @method static void registerInterfaceLocale(string $locale, string|array $strings)
 * @method static array getInterfaceLocale(string $locale)
 *
 * @method void registerPermission(string $key)
 * @method array getPermissions()
 * @method array getPermissionFields()
 *
 * @method static array getBreadables()
 * @method static void registerBreadable(string $breadable, bool $addMenuItem = true, ?int $menuPriority = null)
 *
 * @method static void registerPage(string $page, bool $addMenuItem = true)
 * @method static array getPage(string $pageSlug)
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
 * @method static array getOauth2Ssos(?string $name = null)
 *
 * @method static string registerDashboardCard(array $config, ?string $id = null)
 * @method static array|null getDashboardCards(?string $name = null)
 */
class Jasmine extends Facade { protected static function getFacadeAccessor(): string { return 'jasmine'; } }
