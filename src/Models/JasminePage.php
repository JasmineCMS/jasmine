<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\Fields\FieldsManifest;

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
abstract class JasminePage extends Model
{
    protected $table = 'jasmine_pages';

    protected $fillable = [
        'url',
        'name',
        'content',
    ];

    protected $casts = [
        'content' => 'array',
    ];

    public static function getPageName(): string
    {
        $name = (new \ReflectionClass(static::class))->getShortName();
        $name = Str::snake($name);
        $name = explode('_', $name);
        $name = array_map('ucfirst', $name);
        $name = implode(' ', $name);

        return $name;
    }

    abstract public static function fieldsManifest(): FieldsManifest;
}
