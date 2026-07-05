<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class JasmineRevision extends Model
{
    protected $fillable = [
        'jasmine_user_id',
        'revisionable_type',
        'revisionable_id',
        'locale',
        'contents',
    ];

    protected function casts(): array {
        return [
            'contents' => AsArrayObject::class,
        ];
    }

    public function user(): BelongsTo {
        return $this->belongsTo(JasmineUser::class, 'jasmine_user_id');
    }

    public function revisionable(): MorphTo {
        return $this->morphTo();
    }
}
