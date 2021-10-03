<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Notifications\DatabaseNotification;
use Illuminate\Notifications\DatabaseNotificationCollection;
use Illuminate\Support\Carbon;
use Jasmine\Jasmine\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * Jasmine\Jasmine\Models\JasmineUser
 *
 * @property int                                                        $id
 * @property string                                                     $name
 * @property string                                                     $email
 * @property string                                                     $password
 * @property string|null                                                $remember_token
 * @property Carbon|null                                                $created_at
 * @property Carbon|null                                                $updated_at
 * @property-read DatabaseNotificationCollection|DatabaseNotification[] $notifications
 * @property-read int|null                                              $notifications_count
 * @method static Builder|JasmineUser newModelQuery()
 * @method static Builder|JasmineUser newQuery()
 * @method static Builder|JasmineUser query()
 * @method static Builder|JasmineUser whereCreatedAt($value)
 * @method static Builder|JasmineUser whereEmail($value)
 * @method static Builder|JasmineUser whereId($value)
 * @method static Builder|JasmineUser whereName($value)
 * @method static Builder|JasmineUser wherePassword($value)
 * @method static Builder|JasmineUser whereRememberToken($value)
 * @method static Builder|JasmineUser whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JasmineUser extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];


    /**
     * Send the password reset notification.
     *
     * @param string $token
     *
     * @return void
     */
    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }
}
