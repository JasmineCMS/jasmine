<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Str;

trait RegistersDashboardCards
{
    private array $dashboard_cards = [];
    
    public function registerDashboardCard(array $config, ?string $id = null): string
    {
        $id ??= Str::random(6);
        
        $this->dashboard_cards[$id] = [...$config, ...compact('id')];
        
        return $id;
    }
    
    public function getDashboardCards(?string $id = null): ?array
    {
        return $id ? $this->dashboard_cards[$id] ?? null : $this->dashboard_cards;
    }
}