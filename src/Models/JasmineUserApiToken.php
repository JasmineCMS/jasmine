<?php

namespace Jasmine\Jasmine\Models;

use ArrayObject;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 *
 *
 * @property int              $id
 * @property int              $jasmine_user_id
 * @property string           $name
 * @property string           $token
 * @property ArrayObject|null $abilities
 * @property Carbon|null      $last_used_at
 * @property Carbon|null      $expires_at
 * @property Carbon|null      $created_at
 * @property Carbon|null      $updated_at
 * @property-read JasmineUser $jasmineUser
 * @method static Builder|JasmineUserApiToken newModelQuery()
 * @method static Builder|JasmineUserApiToken newQuery()
 * @method static Builder|JasmineUserApiToken query()
 * @method static Builder|JasmineUserApiToken whereAbilities($value)
 * @method static Builder|JasmineUserApiToken whereCreatedAt($value)
 * @method static Builder|JasmineUserApiToken whereExpiresAt($value)
 * @method static Builder|JasmineUserApiToken whereId($value)
 * @method static Builder|JasmineUserApiToken whereJasmineUserId($value)
 * @method static Builder|JasmineUserApiToken whereLastUsedAt($value)
 * @method static Builder|JasmineUserApiToken whereName($value)
 * @method static Builder|JasmineUserApiToken whereToken($value)
 * @method static Builder|JasmineUserApiToken whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JasmineUserApiToken extends Model
{
    protected $fillable = [
        'jasmine_user_id',
        'name',
        'token',
        'abilities',
        'last_used_at',
        'expires_at',
    ];

    protected $hidden = [
        'token',
    ];

    protected $casts = [
        'abilities'    => AsArrayObject::class,
        'last_used_at' => 'datetime',
        'expires_at'   => 'datetime',
    ];

    public function jasmineUser(): BelongsTo
    {
        return $this->belongsTo(JasmineUser::class);
    }
}
