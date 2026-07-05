<?php

namespace Jasmine\Jasmine\Dashboard;

use Closure;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use InvalidArgumentException;

/**
 * @phpstan-type BladeRenderer callable(Request): (View|Htmlable|string)
 * @phpstan-type PropsResolver callable(Request): array<string, mixed>
 */
final class DashboardCard
{
    public const array METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

    /** @var array<string, array{method: string, handler: Closure}> */
    private array $actions = [];

    private int $priority = 50;

    private int $width = 4;

    /** @param int $width Grid columns 1–12 (full width on mobile regardless). */
    public function width(int $width): self {
        $this->width = max(1, min(12, $width));

        return $this;
    }

    public function getWidth(): int {
        return $this->width;
    }

    private function __construct(
        private readonly string $type,
        private readonly ?Closure $renderer = null,
        private readonly ?string $sfc = null,
        private readonly ?Closure $props = null,
    ) {}

    /** @param BladeRenderer $renderer */
    public static function blade(callable $renderer): self {
        return new self('blade', renderer: $renderer(...));
    }

    /** @param PropsResolver|null $props */
    public static function vue(string $sfc, ?callable $props = null): self {
        return new self('vue', sfc: $sfc, props: $props === null ? null : $props(...));
    }

    /** @param PropsResolver|null $props */
    public static function vueFile(string $path, ?callable $props = null): self {
        if (!is_file($path)) throw new InvalidArgumentException("SFC file not found: [$path]");

        return self::vue(file_get_contents($path), $props);
    }

    /** @param callable(Request): mixed $handler */
    public function action(string $name, callable $handler, string $method = 'POST'): self {
        $method = strtoupper($method);

        if (!in_array($method, self::METHODS, true)) throw new InvalidArgumentException(
            "Dashboard card action [$name]: invalid method [$method]."
        );

        $this->actions[$name] = ['method' => $method, 'handler' => $handler(...)];

        return $this;
    }

    /** @param callable(Request): mixed $handler Read-only action (cacheable, no CSRF token). */
    public function get(string $name, callable $handler): self {
        return $this->action($name, $handler, 'GET');
    }

    /** @param callable(Request): mixed $handler */
    public function post(string $name, callable $handler): self {
        return $this->action($name, $handler, 'POST');
    }

    public function priority(int $priority): self {
        $this->priority = $priority;

        return $this;
    }

    public function getType(): string {
        return $this->type;
    }

    public function getPriority(): int {
        return $this->priority;
    }

    public function isBlade(): bool {
        return $this->type === 'blade';
    }

    public function isVue(): bool {
        return $this->type === 'vue';
    }

    /** Render the blade card to an HTML string. */
    public function render(Request $request): string {
        if (!$this->isBlade()) throw new \LogicException('Only blade cards can render().');

        $result = ($this->renderer)($request);

        return $result instanceof View || $result instanceof Htmlable
            ? $result->toHtml()
            : (string)$result;
    }

    public function getSfc(): string {
        if (!$this->isVue()) throw new \LogicException('Only vue cards have an SFC.');

        return $this->sfc;
    }

    /** @return array<string, mixed> */
    public function resolveProps(Request $request): array {
        return $this->props ? ($this->props)($request) : [];
    }

    /** @return array{method: string, handler: Closure}|null */
    public function getAction(string $name): ?array {
        return $this->actions[$name] ?? null;
    }

    /** @return array<string, array{method: string, handler: Closure}> */
    public function getActions(): array {
        return $this->actions;
    }
}
