<?php

namespace Jasmine\Jasmine\Notifications;

use Carbon\CarbonInterval;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OnboardingInvite extends Notification
{
    public function __construct(public private(set) readonly string $url) {}

    public function via(object $notifiable): array {
        return ['mail'];
    }

    public function toMail(object $notifiable): MailMessage {
        $expiresIn = CarbonInterval::minutes((int)config('jasmine.auth.onboarding.expire', 20))
            ->cascade()->forHumans();

        return (new MailMessage)
            ->subject(__('Set up your :app account', ['app' => config('app.name')]))
            ->line(__('An account has been created for you. Choose a password to activate it.'))
            ->action(__('Set up account'), $this->url)
            ->line(__('This link can be used once and expires in :time. If it has expired, ask an administrator to send you a new one.', ['time' => $expiresIn]))
            ->line(__('If you were not expecting this email, no action is needed.'));
    }
}
