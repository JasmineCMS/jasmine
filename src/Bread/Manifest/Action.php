<?php

namespace Jasmine\Jasmine\Bread\Manifest;

use Illuminate\Contracts\Support\Arrayable;
use JsonSerializable;

class Action implements Arrayable, JsonSerializable
{
    /**
     * @param '_self'|'_blank'|'_top'|'_parent'         $target
     * @param array<string, array<string, string>>|null $confirm
     * @param 'GET'|'POST'|'PUT'|'DELETE'               $method
     */
    public function __construct(
        public private(set) string $name,
        public private(set) ?string $icon = null,
        public private(set) ?string $url = null,
        public private(set) string $target = '_self',
        public private(set) ?string $permission = null,
        public private(set) ?array $confirm = null,
        public private(set) ?string $label = null,
        public private(set) ?string $classes = null,
        public private(set) string $method = 'GET',
        public private(set) bool $bulk = false,
        public private(set) ?\Closure $handler = null,
    ) {
        $this->label ??= $this->name;
    }

    /**
     * @param '_self'|'_blank'|'_top'|'_parent'         $target
     * @param array<string, array<string, string>>|null $confirm
     * @param 'GET'|'POST'|'PUT'|'DELETE'               $method
     */
    public static function for(
        string $name,
        ?string $icon = null,
        ?string $url = null,
        string $target = '_self',
        ?string $permission = null,
        ?array $confirm = null,
        ?string $label = null,
        ?string $classes = null,
        string $method = 'GET',
        bool $bulk = false,
        ?\Closure $handler = null,
    ): self {
        return new self(
            $name,
            $icon,
            $url,
            $target,
            $permission,
            $confirm,
            $label,
            $classes,
            $method,
            $bulk,
            $handler,
        );
    }

    public function toArray(): array {
        return array_filter([
            'name'    => $this->name,
            'icon'    => $this->icon,
            'url'     => $this->url,
            'target'  => $this->target,
            'confirm' => $this->confirm,
            'label'   => $this->label,
            'classes' => $this->classes,
            'method'  => $this->method,
            'bulk'    => $this->bulk,
        ], fn($v) => $v !== null);
    }

    public function jsonSerialize(): array {
        return $this->toArray();
    }

    public function setName(string $name): Action {
        $this->name = $name;

        return $this;
    }

    public function setIcon(?string $icon): Action {
        $this->icon = $icon;

        return $this;
    }

    public function setUrl(?string $url): Action {
        $this->url = $url;

        return $this;
    }

    public function setTarget(string $target): Action {
        $this->target = $target;

        return $this;
    }

    public function setPermission(?string $permission): Action {
        $this->permission = $permission;

        return $this;
    }

    /** @param array<string, string[]>|null $confirm */
    public function setConfirm(?array $confirm): Action {
        $this->confirm = $confirm;

        return $this;
    }

    public function setClasses(?string $classes): Action {
        $this->classes = $classes;

        return $this;
    }

    public function setMethod(string $method): Action {
        $this->method = $method;

        return $this;
    }

    public function setBulk(bool $bulk): Action {
        $this->bulk = $bulk;

        return $this;
    }

    public function getHandler(): ?\Closure {
        return $this->handler;
    }

    public function setHandler(?\Closure $handler): Action {
        $this->handler = $handler;

        return $this;
    }
}
