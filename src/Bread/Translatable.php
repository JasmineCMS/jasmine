<?php

namespace Jasmine\Jasmine\Bread;

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

    protected $_locale;

    public function setLocale($locale): self
    {
        $this->_locale = $locale;
        return $this;
    }

    public function getLocale(): string
    {
        return $this->_locale ?? 'en';
    }

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

        if (is_array($value)) {
            $this->attributes[$key] = json_encode(
                array_merge(json_decode($this->attributes[$key] ?? '{}', true), [
                    $this->getLocale() => $value,
                ]));
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
