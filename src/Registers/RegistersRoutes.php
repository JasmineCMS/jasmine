<?php

namespace Jasmine\Jasmine\Registers;

use Closure;
use LogicException;

trait RegistersRoutes
{
    /** @var array<string, Closure[]> */
    private array $jasmineRouteGroups = [
        'authed' => [],
        'api'    => [],
        'guest'  => [],
    ];

    /** @return Closure[] */
    public function getAuthenticatedRouteGroups(): array {
        return $this->jasmineRouteGroups['authed'];
    }

    /** @return Closure[] */
    public function getApiRouteGroups(): array {
        return $this->jasmineRouteGroups['api'];
    }

    /** @return Closure[] */
    public function getGuestRouteGroups(): array {
        return $this->jasmineRouteGroups['guest'];
    }

    /**
     * Register a route group for authenticated users.
     *
     * @param Closure     $cb The route definitions closure.
     * @param string|null $id Optional named key. Throws if already registered.
     *
     * @throws LogicException If $id is already registered.
     */
    public function registerAuthenticatedRouteGroup(Closure $cb, ?string $id = null): static {
        $this->addRouteGroup('authed', $cb, $id);

        return $this;
    }

    /**
     * Register a route group for API (stateless) requests.
     *
     * @param string|null $id Optional named key. Throws if already registered.
     *
     * @throws LogicException If $id is already registered.
     */
    public function registerApiRouteGroup(Closure $cb, ?string $id = null): static {
        $this->addRouteGroup('api', $cb, $id);

        return $this;
    }

    /**
     * Register a route group for guest (unauthenticated) users.
     *
     * @param string|null $id Optional named key. Throws if already registered.
     *
     * @throws LogicException If $id is already registered.
     */
    public function registerGuestRouteGroup(Closure $cb, ?string $id = null): static {
        $this->addRouteGroup('guest', $cb, $id);

        return $this;
    }

    public function unregisterAuthenticatedRouteGroup(string $id): static {
        unset($this->jasmineRouteGroups['authed'][$id]);

        return $this;
    }

    public function unregisterApiRouteGroup(string $id): static {
        unset($this->jasmineRouteGroups['api'][$id]);

        return $this;
    }

    public function unregisterGuestRouteGroup(string $id): static {
        unset($this->jasmineRouteGroups['guest'][$id]);

        return $this;
    }

    public function resetRouteGroups(): static {
        $this->jasmineRouteGroups = ['authed' => [], 'api' => [], 'guest' => []];

        return $this;
    }

    public function routes(): void {
        (static function (): void {
            require realpath(__DIR__ . '/../../routes/web.php');
        })();
    }

    public function apiRoutes(): void {
        (static function (): void {
            require realpath(__DIR__ . '/../../routes/api.php');
        })();
    }

    private function addRouteGroup(string $type, Closure $cb, ?string $id): void {
        if ($id !== null) {
            if (array_key_exists($id, $this->jasmineRouteGroups[$type])) throw new LogicException(
                "A route group with id \"$id\" is already registered in the \"$type\" group. " .
                'unregister it first if you intend to replace it.'
            );

            $this->jasmineRouteGroups[$type][$id] = $cb;
        } else $this->jasmineRouteGroups[$type][] = $cb;
    }
}
