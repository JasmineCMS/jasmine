<?php

namespace Jasmine\Jasmine\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableInterface;

/**
 * @property int   $id
 * @property array $content
 */
abstract class JasminePage extends Model implements BreadableInterface
{
    use Breadable;

    protected $table = 'jasmine_pages';

    protected $primaryKey = 'name';

    protected $keyType = 'string';

    public $incrementing = false;

    protected $fillable = ['url', 'name', 'content'];

    public array $translatable = ['content'];

    protected function casts(): array {
        return ['content' => 'array'];
    }

    public function getRouteKeyName(): string {
        return 'url';
    }

    public static function getPageName(): string {
        return Str::headline(class_basename(static::class));
    }

    public static function getPageSlug(): string {
        return Str::slug(static::getPageName());
    }

    public function getTitle(): string {
        return $this::getPageName();
    }

    public static function browseableColumns(): array {
        return [];
    }

    public static function jasmineOnRetrievedForEdit(JasminePage $model): array {
        return (array)$model->content;
    }

    public static function jLoad(?string $slug = null): static {
        return static::query()->where('name', $slug ?? static::getPageSlug())->firstOrFail();
    }
}
