<?php

namespace Jasmine\Jasmine\Registers;

trait RegistersRoutes
{
    private array $authed = [];
    private array $guest = [];
    
    
    public function getAuthenticatedRouteGroups(): array { return $this->authed; }
    
    public function getGuestRouteGroups(): array { return $this->guest; }
    
    public function registerAuthenticatedRouteGroup(\Closure $callback, ?string $id = null): static
    {
        if ($id) $this->authed[$id] = $callback;
        else $this->authed[] = $callback;
        return $this;
    }
    
    public function registerGuestRouteGroup(\Closure $callback, ?string $id = null): static
    {
        if ($id) $this->guest[$id] = $callback;
        else $this->guest[] = $callback;
        return $this;
    }
    
    public function routes(): void { require __DIR__ . '/../../routes.php'; }
}
