<?php

namespace Jasmine\Jasmine\Registers;

trait RegistersCustomAssets
{
    /** @var array<string, string> */
    private array $customScripts = [];

    /** @var array<string, string> */
    private array $customStyles = [];

    /**
     * Register a custom JS file to load in the admin panel.
     *
     * @param string $path Absolute URL (prefer https).
     */
    public function registerCustomScript(string $path): void {
        $this->customScripts[$path] = $path;
    }

    /**
     * Register a custom stylesheet to load in the admin panel.
     *
     * @param string $path Absolute URL (prefer https).
     */
    public function registerCustomStyle(string $path): void {
        $this->customStyles[$path] = $path;
    }

    /** @return list<string> */
    public function getCustomScripts(): array {
        return array_values($this->customScripts);
    }

    /** @return list<string> */
    public function getCustomStyles(): array {
        return array_values($this->customStyles);
    }
}
