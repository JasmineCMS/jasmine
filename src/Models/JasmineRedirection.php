<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

/**
 * Jasmine\Jasmine\Models\JasmineRedirection
 *
 * @property int         $id
 * @property string      $from
 * @property string      $to
 * @property int         $regex
 * @property int         $permanent
 * @property int         $enabled
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|JasmineRedirection newModelQuery()
 * @method static Builder|JasmineRedirection newQuery()
 * @method static Builder|JasmineRedirection query()
 * @method static Builder|JasmineRedirection whereCreatedAt($value)
 * @method static Builder|JasmineRedirection whereEnabled($value)
 * @method static Builder|JasmineRedirection whereFrom($value)
 * @method static Builder|JasmineRedirection whereId($value)
 * @method static Builder|JasmineRedirection wherePermanent($value)
 * @method static Builder|JasmineRedirection whereRegex($value)
 * @method static Builder|JasmineRedirection whereTo($value)
 * @method static Builder|JasmineRedirection whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class JasmineRedirection extends Model
{
    protected $fillable = [
        'from',
        'to',
        'regex',
        'permanent',
        'enabled',
    ];

    protected $casts = [
        'regex'     => 'boolean',
        'permanent' => 'boolean',
        'enabled'   => 'boolean',
    ];
}
