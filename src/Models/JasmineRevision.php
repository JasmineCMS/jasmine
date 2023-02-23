<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;


/**
 * Jasmine\Jasmine\Models\JasmineRevision
 *
 * @property int                   $id
 * @property int|null              $jasmine_user_id
 * @property string                $revisionable_type
 * @property int                   $revisionable_id
 * @property string|null           $locale
 * @property object|null           $contents
 * @property Carbon|null           $created_at
 * @property Carbon|null           $updated_at
 * @property-read Model|\Eloquent  $revisionable
 * @property-read JasmineUser|null $user
 * @method static Builder|JasmineRevision newModelQuery()
 * @method static Builder|JasmineRevision newQuery()
 * @method static Builder|JasmineRevision query()
 * @method static Builder|JasmineRevision whereContents($value)
 * @method static Builder|JasmineRevision whereCreatedAt($value)
 * @method static Builder|JasmineRevision whereId($value)
 * @method static Builder|JasmineRevision whereJasmineUserId($value)
 * @method static Builder|JasmineRevision whereLocale($value)
 * @method static Builder|JasmineRevision whereRevisionableId($value)
 * @method static Builder|JasmineRevision whereRevisionableType($value)
 * @method static Builder|JasmineRevision whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JasmineRevision extends Model
{
    protected $fillable = [
        'jasmine_user_id',
        'revisionable_type',
        'revisionable_id',
        'locale',
        'contents',
    ];

    protected $casts = ['contents' => 'object'];

    public function user() { return $this->belongsTo(JasmineUser::class, 'jasmine_user_id'); }

    public function revisionable() { return $this->morphTo(); }
}