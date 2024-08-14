<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\Fields\FieldsManifest;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\ManifestFaker;

/**
 * Class JasminePage
 *
 * @property int         $id
 * @property string      $url
 * @property string      $name
 * @property array       $content
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @method static Builder|JasmineUser newModelQuery()
 * @method static Builder|JasmineUser newQuery()
 * @method static Builder|JasmineUser query()
 * @mixin \Eloquent
 * @method string jasmineGetPublicUrl()
 */
abstract class JasminePage extends Model
{
    protected $table = 'jasmine_pages';

    public $translatable = ['content'];

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

    /**
     * @param string|null $slug
     *
     * @return JasminePage|static
     */
    public static function jLoad(string $slug = null)
    {
        $slug = $slug ?? Str::slug(static::getPageName());
        $page = static::query()->whereUrl($slug)->firstOrFail();

        if (in_array(Translatable::class, class_uses(static::class))) {
            $page->setLocale(session('locale', app()->getLocale()));
        }

        return $page;
    }
    
    public static function fake(bool $all = false, array $override = []): array
    {
        return ManifestFaker::fake(static::class, $all, $override);
    }
    
    abstract public static function fieldsManifest(): FieldsManifest;
}
