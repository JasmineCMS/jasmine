<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Carbon;

/**
 * @property int         $id
 * @property int         $jasmine_user_id
 * @property string      $name
 * @property string      $credential_id base64url-encoded raw credential id
 * @property array       $source        serialized PublicKeyCredentialSource
 * @property Carbon|null $last_used_at
 */
class JasmineWebauthnCredential extends Model
{
    protected $fillable = [
        'name',
        'credential_id',
        'source',
        'last_used_at',
    ];

    protected function casts(): array {
        return [
            'source'       => 'array',
            'last_used_at' => 'datetime',
        ];
    }

    public function user(): BelongsTo {
        return $this->belongsTo(JasmineUser::class, 'jasmine_user_id');
    }
}
