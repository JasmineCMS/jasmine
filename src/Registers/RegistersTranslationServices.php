<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Str;

trait RegistersTranslationServices
{
    private array $services = [];

    /**
     * @param string                                                        $id
     * @param Closure(string $source, string $target, array $fields): array $closure
     *
     * @return void
     */
    public function registerTranslationService(string $id, \Closure $closure): void {
        if (count((new \ReflectionFunction($closure))->getParameters()) < 3) {
            throw new \InvalidArgumentException(
                "Closure for translation service \"$id\" must have at least 3 parameters: string \$source, string \$target, array \$fields)",
            );
        }

        $this->services[$id] = $closure;
    }

    public function getTranslationService(?string $id = null): array|\Closure|null {
        if ($id) return $this->services[$id] ?? null;

        return $this->services;
    }

    public function listTranslationServices(): array {
        $items = array_keys($this->services);

        return array_map(fn($i) => __(Str::headline($i)), array_combine($items, $items));
    }
}
