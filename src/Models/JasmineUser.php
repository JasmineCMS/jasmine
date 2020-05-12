<?php

namespace Jasmine\Jasmine\Models;

use Jasmine\Jasmine\Notifications\ResetPassword as ResetPasswordNotification;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

/**
 * Jasmine\Jasmine\Models\JasmineUser
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser query()
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser whereUpdatedAt($value)
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
