<?php

namespace Jasmine\Jasmine\Cards;

use Closure;
use Illuminate\Contracts\Support\Htmlable;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use InvalidArgumentException;
use Jasmine\Jasmine\Bread\BrowseContext;
use Jasmine\Jasmine\Models\JasmineUser;

/**
 * A widget rendered in a grid — on the dashboard, or above a breadable's browse table.
 * Renderers, props resolvers and action handlers get the request, followed by whatever
 * the host passes along (a breadable widget gets a {@see BrowseContext}, dashboard cards nothing more).
 *
 * @phpstan-type BladeRenderer callable(Request, BrowseContext): (View|Htmlable|string)
 * @phpstan-type PropsResolver callable(Request, BrowseContext): array<string, mixed>
 */
class Card
{
    public const array METHODS = ['GET', 'POST', 'PUT', 'DELETE'];

    /** @var array<string, array{method: string, handler: Closure}> */
    private array $actions = [];

    private int $priority = 50;

    private int $width = 4;

    private ?string $permission = null;

    /** @param int $width Grid columns 1–12 (full width on mobile regardless). */
    public function width(int $width): static {
        $this->width = max(1, min(12, $width));

        return $this;
    }

    public function getWidth(): int {
        return $this->width;
    }

    final private function __construct(
        private readonly string $type,
        private readonly ?Closure $renderer = null,
        private readonly ?string $sfc = null,
        private readonly ?Closure $props = null,
    ) {}

    /** @param BladeRenderer $renderer */
    public static function blade(callable $renderer): static {
        return new static('blade', renderer: $renderer(...));
    }

    /** @param PropsResolver|null $props */
    public static function vue(string $sfc, ?callable $props = null): static {
        return new static('vue', sfc: $sfc, props: $props === null ? null : $props(...));
    }

    /** @param PropsResolver|null $props */
    public static function vueFile(string $path, ?callable $props = null): static {
        if (!is_file($path)) throw new InvalidArgumentException("SFC file not found: [$path]");

        return static::vue(file_get_contents($path), $props);
    }

    /** @param callable(Request, BrowseContext): mixed $handler */
    public function action(string $name, callable $handler, string $method = 'POST'): static {
        $method = strtoupper($method);

        if (!in_array($method, self::METHODS, true)) throw new InvalidArgumentException(
            "Card action [$name]: invalid method [$method]."
        );

        $this->actions[$name] = ['method' => $method, 'handler' => $handler(...)];

        return $this;
    }

    /** @param callable(Request, BrowseContext): mixed $handler Read-only action (cacheable, no CSRF token). */
    public function get(string $name, callable $handler): static {
        return $this->action($name, $handler, 'GET');
    }

    /** @param callable(Request, BrowseContext): mixed $handler */
    public function post(string $name, callable $handler): static {
        return $this->action($name, $handler, 'POST');
    }

    public function priority(int $priority): static {
        $this->priority = $priority;

        return $this;
    }

    /** Only users holding this permission see the card and may call its actions. */
    public function permission(?string $permission): static {
        $this->permission = $permission;

        return $this;
    }

    public function getPermission(): ?string {
        return $this->permission;
    }

    public function visibleTo(JasmineUser $user): bool {
        return !$this->permission || $user->jCan($this->permission);
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
    public function render(Request $request, mixed ...$args): string {
        if (!$this->isBlade()) throw new \LogicException('Only blade cards can render().');

        $result = ($this->renderer)($request, ...$args);

        return $result instanceof View || $result instanceof Htmlable
            ? $result->toHtml()
            : (string)$result;
    }

    public function getSfc(): string {
        if (!$this->isVue()) throw new \LogicException('Only vue cards have an SFC.');

        return $this->sfc;
    }

    /** @return array<string, mixed> */
    public function resolveProps(Request $request, mixed ...$args): array {
        return $this->props ? ($this->props)($request, ...$args) : [];
    }

    /** @return array{method: string, handler: Closure}|null */
    public function getAction(string $name): ?array {
        return $this->actions[$name] ?? null;
    }

    /** @return array<string, array{method: string, handler: Closure}> */
    public function getActions(): array {
        return $this->actions;
    }

    /**
     * Serialize cards for the frontend, sorted by priority. A card that throws while
     * rendering is reported and left out, so one broken card never takes the page down.
     *
     * @param array<string, Card> $cards
     * @param Closure(string $id, string $action): string $actionUrl
     * @return list<array<string, mixed>>
     */
    public static function serializeAll(array $cards, Request $request, Closure $actionUrl, mixed ...$args): array {
        uasort($cards, fn(Card $a, Card $b) => $a->getPriority() <=> $b->getPriority());

        $res = [];
        foreach ($cards as $id => $card) {
            try {
                $resolved = $card->isVue()
                    ? ['sfc' => $card->getSfc(), 'props' => $card->resolveProps($request, ...$args)]
                    : ['html' => $card->render($request, ...$args)];
            } catch (\Throwable $e) {
                report($e);

                continue;
            }

            $res[] = [
                'id'      => $id,
                'type'    => $card->getType(),
                'width'   => $card->getWidth(),
                ...$resolved,
                'actions' => array_map(fn(string $name, array $a) => [
                    'name'   => $name,
                    'method' => $a['method'],
                    'url'    => $actionUrl($id, $name),
                ], array_keys($card->getActions()), $card->getActions()),
            ];
        }

        return $res;
    }
}
