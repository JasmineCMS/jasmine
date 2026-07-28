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
        'hash',
        'token',
        'abilities',
        'last_used_at',
        'expires_at',
    ];

    /**
     * `hash` is the credential — a SHA-256 of the plaintext, never exposed. `token` holds only the
     * first 8 characters (`jsm_` plus four) so the UI has something to identify a row by; the
     * plaintext itself is shown exactly once, at creation.
     */
    protected $hidden = ['hash'];

    protected $casts = [
        'abilities'    => AsArrayObject::class,
        'last_used_at' => 'datetime',
        'expires_at'   => 'datetime',
    ];

    public function jasmineUser(): BelongsTo {
        return $this->belongsTo(JasmineUser::class);
    }
}
