<?php

namespace Jasmine\Jasmine\Registers;

use Jasmine\Jasmine\Cards\Card;

trait RegistersDashboardCards
{
    /** @var array<string, Card> */
    private array $dashboardCards = [];

    /** @var array<string, Card> */
    private array $sortedDashboardCards;

    /** @return array<string, Card> */
    public function getDashboardCards(): array {
        if (isset($this->sortedDashboardCards)) return $this->sortedDashboardCards;

        $this->sortedDashboardCards = $this->dashboardCards;
        uasort($this->sortedDashboardCards, fn($a, $b) => $a->getPriority() <=> $b->getPriority());

        return $this->sortedDashboardCards;
    }

    public function getDashboardCard(string $id): ?Card {
        return $this->dashboardCards[$id] ?? null;
    }

    public function registerDashboardCard(string $id, Card $card): static {
        $this->dashboardCards[$id] = $card;

        unset($this->sortedDashboardCards);

        return $this;
    }
}
