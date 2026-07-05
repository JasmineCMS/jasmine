<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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

    protected $hidden = ['token'];

    protected $casts = [
        'abilities'    => AsArrayObject::class,
        'last_used_at' => 'datetime',
        'expires_at'   => 'datetime',
    ];

    public function jasmineUser(): BelongsTo {
        return $this->belongsTo(JasmineUser::class);
    }
}
