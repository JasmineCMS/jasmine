<?php

namespace Jasmine\Jasmine\Registers;

trait RegistersInterfaceLocales
{
    private array $interfaceLocales = [];
    
    public function getInterfaceLocales(): array { return ['en', ...array_keys($this->interfaceLocales)]; }
    
    public function registerInterfaceLocale(string $locale, string|array $strings): void
    {
        $this->interfaceLocales[$locale] = $strings;
    }
    
    public function getInterfaceLocale(string $locale): array
    {
        if (!isset($this->interfaceLocales[$locale])) return [];
        
        if (is_array($this->interfaceLocales[$locale])) return $this->interfaceLocales[$locale];
        
        if (file_exists(__DIR__ . '/../../resources/front-lang/' . $locale . '.json')) {
            $strings = json_decode(file_get_contents(__DIR__ . '/../../resources/front-lang/' . $locale . '.json'), true);
        } else {
            $strings = [];
        }
        
        if (is_string($this->interfaceLocales[$locale]) && file_exists($this->interfaceLocales[$locale])) {
            $this->interfaceLocales[$locale] = json_decode(file_get_contents($this->interfaceLocales[$locale]), true) + $strings;
        }
        
        return $this->interfaceLocales[$locale];
    }
}
