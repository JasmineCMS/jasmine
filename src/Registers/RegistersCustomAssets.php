<?php

namespace Jasmine\Jasmine\Registers;

trait RegistersCustomAssets
{
    private array $appJs = [];

    private array $appStyles = [];

    public function getCustomJses(): array
    {
        return $this->appJs;
    }

    public function getCustomStyles(): array
    {
        return $this->appStyles;
    }

    /**
     * Register custom js file to run on backend
     *
     * @param string $path full url of the js file (prefer https)
     */
    public function registerCustomJs(string $path): void
    {
        $this->appJs[] = $path;
    }

    /**
     * Register custom stylesheet file to run on backend
     *
     * @param string $path full url of the stylesheet file (prefer https)
     */
    public function registerCustomStyle(string $path): void
    {
        $this->appStyles[] = $path;
    }
}
