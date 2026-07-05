<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;

class Author extends Model implements BreadableInterface
{
    use Breadable;
    use HasFactory;

    protected $fillable = ['name'];

    public function articles(): HasMany {
        return $this->hasMany(Article::class);
    }

    public static function browseableColumns(): array {
        return [
            'name',
            'articles_count',
        ];
    }

    public static function fieldsManifest(Model&BreadableInterface $ent): FieldsManifest {
        return new FieldsManifest([]);
    }
}
