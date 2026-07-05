<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Dashboard\DashboardCard;

trait RegistersDashboardCards
{
    /** @var array<string, DashboardCard> */
    private array $dashboardCards = [];

    /** @var array<string, DashboardCard> */
    private array $sortedDashboardCards;

    /** @return array<string, DashboardCard> */
    public function getDashboardCards(): array {
        if (isset($this->sortedDashboardCards)) return $this->sortedDashboardCards;

        $this->sortedDashboardCards = $this->dashboardCards;
        uasort($this->sortedDashboardCards, fn($a, $b) => $a->getPriority() <=> $b->getPriority());

        return $this->sortedDashboardCards;
    }

    public function getDashboardCard(string $id): ?DashboardCard {
        return $this->dashboardCards[$id] ?? null;
    }

    public function registerDashboardCard(string $id, DashboardCard $card): static {
        $this->dashboardCards[$id] = $card;

        unset($this->sortedDashboardCards);

        return $this;
    }
}
