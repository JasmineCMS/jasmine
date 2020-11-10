<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Jasmine\Jasmine\Models\JasmineRedirection
 *
 * @property int                             $id
 * @property string                          $from
 * @property string                          $to
 * @property int                             $regex
 * @property int                             $permanent
 * @property int                             $enabled
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection query()
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereEnabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereFrom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection wherePermanent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereRegex($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereTo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|JasmineRedirection whereUpdatedAt($value)
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
