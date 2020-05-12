<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class JasminePage
 *
 * @property int                             $id
 * @property string                          $url
 * @property string                          $name
 * @property array                           $content
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Jasmine\Jasmine\Models\JasmineUser query()
 * @mixin \Eloquent
 */
class JasminePage extends Model
{
    protected $fillable = [
        'url',
        'name',
        'content',
    ];

    protected $casts = [
        'content' => 'array',
    ];
}
