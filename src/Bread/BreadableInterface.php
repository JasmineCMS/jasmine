<?php

namespace Jasmine\Jasmine\Bread;

use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Bread\Manifest\Action;
use Jasmine\Jasmine\Bread\Manifest\Column;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;
use Jasmine\Jasmine\Bread\Manifest\GridItem;

/**
 * @method static null|array jasmineOnRetrievedForIndex(Model|BreadableInterface $model, array $data)
 * @method static null|array jasmineOnRetrievedForEdit(Model|BreadableInterface $model, array $data)
 * @method static null|array jasmineOnSaving(Model|BreadableInterface $model, array $data)
 * @method static null|array jasmineOnSaved(Model|BreadableInterface $model)
 * @method static null|array jasmineOnDeleting(Model|BreadableInterface $model)
 */
interface BreadableInterface
{
    public static function getBreadableKey(): string;

    public static function getPluralName(): string;

    public static function getSingularName(): string;

    public static function getMenuIcon(): string;

    /** @return array<string|int, Column|string|array|Closure> */
    public static function browseableColumns(): array;

    /** @return array<string|int, Action|null> */
    public function browseActions(): array;

    /** @return FieldsManifest|array<GridItem> */
    public static function fieldsManifest(BreadableInterface&Model $ent): array|FieldsManifest;

    public function getTitle(): string;

    public function getPublicUrl(): ?string;

    /** @return Builder<static> */
    public static function jasmineQuery(): Builder;
}
