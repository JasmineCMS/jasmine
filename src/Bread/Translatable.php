<?php

namespace Jasmine\Jasmine\Bread;

use Spatie\Translatable\HasTranslations;

/**
 * @property array $translatable
 */
trait Translatable
{
    use HasTranslations;

    public function getLocale(): string {
        return $this->translationLocale ?: app()->getLocale();
    }

    public function setAttribute($key, $value) {
        if (!$this->isTranslatableAttribute($key)) return parent::setAttribute($key, $value);

        if ($value instanceof Translations) return $this->setTranslations($key, $value->toArray());

        return $this->setTranslation($key, $this->getLocale(), $value);
    }

    public function toArray(): array {
        $attrs = $this->attributesToArray();
        $translatables = array_filter($this->getTranslatableAttributes(), fn($key) => array_key_exists($key, $attrs));
        foreach ($translatables as $field) $attrs[$field] = $this->getTranslation($field, $this->getLocale());

        return array_merge($attrs, $this->relationsToArray());
    }
}
