<?php

namespace Jasmine\Jasmine\Notifications;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Support\Str;
use InvalidArgumentException;
use JsonSerializable;

/**
 * The `toArray()` payload Jasmine's notification UI understands.
 *
 *   public function toArray(object $notifiable): array {
 *       return JasmineNotificationData::make('Alert opened')
 *           ->message('Disk usage at 92%')
 *           ->url(route('jasmine.bread.edit', ['alerts', $this->alert->id]))
 *           ->icon('bi-exclamation-triangle')
 *           ->warning()
 *           ->toArray();
 *   }
 *
 * A plain array of the same shape works too; only `title` is expected.
 *
 * @phpstan-type Payload array{title: string, message?: string, url?: string, icon?: string, level?: string}
 *
 * @implements Arrayable<string, string>
 */
final class JasmineNotificationData implements Arrayable, JsonSerializable
{
    public const array LEVELS = ['info', 'success', 'warning', 'danger'];

    public const string DEFAULT_ICON = 'bi-bell';

    private ?string $message = null;

    private ?string $url = null;

    private ?string $icon = null;

    private string $level = 'info';

    private function __construct(private readonly string $title) {}

    public static function make(string $title): self {
        return new self($title);
    }

    /** Plain text, rendered escaped. */
    public function message(?string $message): self {
        $this->message = $message;

        return $this;
    }

    /** Opened in the same tab; non-Jasmine URLs get a full page load. */
    public function url(?string $url): self {
        $this->url = $url;

        return $this;
    }

    /** A Bootstrap Icons class, e.g. `bi-exclamation-triangle`. */
    public function icon(?string $icon): self {
        $this->icon = $icon;

        return $this;
    }

    public function level(string $level): self {
        if (!in_array($level, self::LEVELS, true)) throw new InvalidArgumentException(
            "Notification level [$level] must be one of: " . implode(', ', self::LEVELS) . '.'
        );

        $this->level = $level;

        return $this;
    }

    public function info(): self {
        return $this->level('info');
    }

    public function success(): self {
        return $this->level('success');
    }

    public function warning(): self {
        return $this->level('warning');
    }

    public function danger(): self {
        return $this->level('danger');
    }

    /** @return Payload */
    public function toArray(): array {
        return array_filter([
            'title'   => $this->title,
            'message' => $this->message,
            'url'     => $this->url,
            'icon'    => $this->icon,
            'level'   => $this->level,
        ], fn($v) => $v !== null);
    }

    /** @return Payload */
    public function jsonSerialize(): array {
        return $this->toArray();
    }

    /**
     * Read a stored notification into the shape the UI renders, tolerating
     * payloads that weren't built with this class.
     *
     * @return array{id: string, title: string, message: ?string, url: ?string, icon: string, level: string, read: bool, created_at: ?string}
     */
    public static function present(DatabaseNotification $notification): array {
        $data = (array)$notification->getAttribute('data');
        $createdAt = $notification->getAttribute('created_at');

        $string = fn(string $key) => is_string($data[$key] ?? null) && $data[$key] !== '' ? $data[$key] : null;

        return [
            'id'         => $notification->getKey(),
            'title'      => $string('title') ?? Str::headline(class_basename($notification->getAttribute('type'))),
            'message'    => $string('message'),
            'url'        => $string('url'),
            'icon'       => $string('icon') ?? self::DEFAULT_ICON,
            'level'      => in_array($data['level'] ?? null, self::LEVELS, true) ? $data['level'] : 'info',
            'read'       => $notification->getAttribute('read_at') !== null,
            'created_at' => $createdAt?->toIso8601String(),
        ];
    }
}
