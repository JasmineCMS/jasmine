<?php

namespace App\Models;

use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Jasmine\Jasmine\Bread\Breadable;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\CodeField;
use Jasmine\Jasmine\Bread\Fields\FileField;
use Jasmine\Jasmine\Bread\Fields\GeocodingField;
use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Fields\JsonField;
use Jasmine\Jasmine\Bread\Fields\MultiSelectField;
use Jasmine\Jasmine\Bread\Fields\VideoField;
use Jasmine\Jasmine\Bread\Fields\WysiwygField;
use Jasmine\Jasmine\Bread\Manifest\Column;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;
use Jasmine\Jasmine\Bread\Manifest\Section;
use Jasmine\Jasmine\Bread\Sortable;
use Jasmine\Jasmine\Bread\Translatable;

class Article extends Model implements BreadableInterface, Sortable
{
    use Breadable;

    /** @use HasFactory<ArticleFactory> */
    use HasFactory;

    use Translatable;

    public array $sortable = ['order_column_name' => 'order', 'sort_when_creating' => true];

    protected $fillable = ['author_id', 'title', 'content'];

    public $translatable = ['title', 'content'];

    public function author(): BelongsTo {
        return $this->belongsTo(Author::class);
    }

    public function tags(): BelongsToMany {
        return $this->belongsToMany(Tag::class)->withTimestamps();
    }

    public function getPublicUrl(): ?string {
        return 'pub--url';
    }

    public static function browseableColumns(): array {
        return [
            'title',
            new Column(data: 'author.name')->filterable(),
            'author.articles_count',
            'tags_count',
            'tags.name',
            'tags.articles_count',
        ];
    }

    public static function fieldsManifest(Model&BreadableInterface $ent): FieldsManifest {
        return new FieldsManifest([
            new Section(7, 'Main', [
                InputField::for('title')->setValidation(['required'])
                    ->setWidth(2)
                    ->setRepeats(15),
                WysiwygField::for('content')->setOptions([
                    'placeholder' => 'Type something...',
                ]),
                VideoField::for('vid'),
                FileField::for('pdf'),
                GeocodingField::for('location'),
                JsonField::for('json'),

                MultiSelectField::for('authors')->setOptions([
                    'mode'    => 'single',
                    'options' => Author::all()->map(fn($i) => ['value' => $i->id, 'label' => $i->name])->toArray(),
                ]),

                // CodeField::for('code')->setOptions(),
            ]),
        ]);
    }
}
