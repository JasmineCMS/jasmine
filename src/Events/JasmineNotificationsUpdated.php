<?php

namespace Jasmine\Jasmine\Events;

use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Jasmine\Jasmine\Models\JasmineUser;

/**
 * Tells a Jasmine user's open tabs that their notifications changed.
 * Carries only the unread count, read when the broadcast goes out.
 */
class JasmineNotificationsUpdated implements ShouldBroadcast
{
    use Dispatchable, SerializesModels;

    public function __construct(public JasmineUser $user) {}

    public static function channelName(JasmineUser $user): string {
        return 'jasmine.user.' . $user->getKey();
    }

    public function broadcastOn(): PrivateChannel {
        return new PrivateChannel(static::channelName($this->user));
    }

    public function broadcastAs(): string {
        return 'notifications.updated';
    }

    /** @return array{unread: int} */
    public function broadcastWith(): array {
        return ['unread' => $this->user->unreadNotifications()->count()];
    }
}
