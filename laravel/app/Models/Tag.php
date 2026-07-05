<?php

namespace App\Models;

use Database\Factories\TagFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;

class Tag extends Model implements BreadableInterface
{
    use Breadable;

    /** @use HasFactory<TagFactory> */
    use HasFactory;

    protected $fillable = ['article_id', 'tag_id'];

    public function articles(): BelongsToMany {
        return $this->belongsToMany(Article::class)->withTimestamps();
    }

    public static function browseableColumns(): array {
        return ['name', 'articles_count'];
    }

    public static function fieldsManifest(Model&BreadableInterface $ent): FieldsManifest {
        return new FieldsManifest([]);
    }
}
