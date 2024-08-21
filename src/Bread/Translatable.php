<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Casts\Json;
use Spatie\Translatable\HasTranslations;

/**
 * Trait Translatable
 *
 * @property array $translatable
 * @package Jasmine\Jasmine\Bread
 */
trait Translatable
{
    use HasTranslations;

    protected string $_locale;

    public function setLocale($locale): self
    {
        $this->_locale = $locale;
        return $this;
    }

    public function getLocale(): string { return $this->_locale ?? app()->getLocale(); }

    /**
     * Convert the model instance to an array.
     *
     * @return array
     */
    public function toArray()
    {
        $attributes = parent::toArray();

        foreach ($this->getTranslatableAttributes() as $name) {
            $attributes[$name] = $this->getTranslation($name, $this->getLocale());
        }

        return $attributes;
    }

    public function setAttribute($key, $value)
    {
        // Pass arrays and untranslatable attributes to the parent method.
        if (!$this->isTranslatableAttribute($key)) {
            return parent::setAttribute($key, $value);
        }

        if (is_array($value) || $value instanceof Translations) {
            $this->attributes[$key] = Json::encode(array_merge(
                Json::decode($this->attributes[$key] ?? '{}', true),
                $value instanceof Translations ? $value->toArray() : [$this->getLocale() => $value]
            ));
            return $this;
        } else {
            // If the attribute is translatable and not already translated, set a
            // translation for the current app locale.
            return $this->setTranslation($key, $this->getLocale(), $value);
        }

    }

    public static function bootTranslatable()
    {
        static::retrieved(function ($model) {
            /** @var Translatable $model */
            $model->setLocale(app()->getLocale());
        });
    }
}
