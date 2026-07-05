<?php

namespace Jasmine\Jasmine\Bread\Manifest;

use Faker\Generator;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Translatable;
use Jasmine\Jasmine\Bread\Translations;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasminePage;

class ManifestFaker
{
    /** @var Generator[] */
    private array $fakers = [];

    private bool $translatable;

    public function __construct(private Model $model, private bool $all = false, private array $override = []) {
        $this->translatable = in_array(Translatable::class, class_uses($this->model));

        $map = [
            'en' => 'en_US',
            'he' => 'he_IL',
        ];

        foreach (Jasmine::getLocales() as $locale) {
            $this->fakers[$locale] = fake($map[$locale] ?? $locale);
        }
    }

    /** Replaces magic __get property for better static analysis and IDE support. */
    protected function faker(): Generator {
        return $this->fakers[app()->getLocale()];
    }

    public static function fake(Model|BreadableInterface|string $model, bool $all = false, array $override = []): array {
        if (is_string($model)) $model = new $model;

        return new static($model, $all, $override)->build();
    }

    public function build(): array {
        $res = $this->fakeFields($this->model->fieldsManifest($this->model)->getFields());
        $keys = [];

        foreach ($this->override as $k => $v) {
            if (!str_contains($k, '.*')) {
                $ov = Arr::get($res, $k);
                Arr::set($res, $k, $v instanceof \Closure ? $v($ov, $this) : $v);

                continue;
            }

            if (empty($keys)) $keys = array_keys(Arr::dot($res));

            $k = str_replace(['*', '.'], ['\d+', '\.'], $k);

            foreach (preg_grep('/^' . $k . '$/', $keys) as $nk) {
                $ov = Arr::get($res, $nk);
                Arr::set($res, $nk, $v instanceof \Closure ? $v($ov, $this) : $v);
            }
        }

        return $res;
    }

    /** @param AbstractField[]|array $fields */
    public function fakeFields(array $fields, bool $nested = false): array {
        $data = [];

        foreach ($fields as $field) {
            $field = is_array($field) ? $field : $field->toArray();
            $name = $field['name'];
            $data[$name] = null;

            $isRequired = in_array('required', $field['validation'] ?? []);

            if (!$this->all && !$isRequired && $this->faker()->boolean()) continue;

            $methodName = lcfirst($field['type']);

            if (!method_exists($this, $methodName)) continue;

            // Generate field value (handling repeats natively)
            $generateValue = function () use ($field, $methodName) {
                $repeats = $field['repeats'] ?? false;

                if ($repeats === true || $repeats > 1) {
                    $max = $repeats === true ? 100 : min($repeats, 100);
                    $fill = $this->faker()->numberBetween(2, $max);

                    return collect()->times($fill, fn() => $this->{$methodName}($field))->toArray();
                }

                return $this->{$methodName}($field);
            };

            // Handle Translatable Fields
            $isTranslatable = !$nested
                && $this->translatable
                && !($this->model instanceof JasminePage)
                && in_array($name, $this->model->getTranslatableAttributes());

            if ($isTranslatable) {
                $appLocale = app()->getLocale();
                $translations = new Translations;

                foreach (config('app.locales', [config('app.locale')]) as $locale) {
                    app()->setLocale($locale);
                    $translations[$locale] = $generateValue();
                }

                $data[$name] = $translations;
                app()->setLocale($appLocale);
            } else {
                $data[$name] = $generateValue();
            }
        }

        return $data;
    }

    public function groupedField(array $field): array {
        return $this->fakeFields($field['options']['fields'] ?? [], true);
    }

    public function switchField(array $field): bool {
        return $this->faker()->boolean();
    }

    public function imageField(array $field): array {
        if ($field['options']['flexible'] ?? false) {
            $w = $this->faker()->numberBetween(
                (int)(0.9 * ($field['options']['w'] ?? 111)),
                (int)(1.1 * ($field['options']['w'] ?? 363))
            );
            $h = $this->faker()->numberBetween(
                (int)(0.9 * ($field['options']['h'] ?? 111)),
                (int)(1.1 * ($field['options']['h'] ?? 363))
            );
        } else {
            $w = $field['options']['w'] ?? 400;
            $h = $field['options']['h'] ?? 400;
        }

        return [
            'alt' => $this->faker()->words(rand(1, 3), true),
            'src' => $this->faker()->imageUrl($w, $h),
            'w'   => $w,
            'h'   => $h,
        ];
    }

    public function selectField(array $field): array|string|null {
        $options = $field['options']['options'] ?? [];

        if ($field['options']['multiple'] ?? false) {
            if (empty($options)) return [];

            return $this->faker()->randomElements(array_keys($options), null);
        }

        return $this->faker()->randomElement(array_keys($options));
    }

    public function multiSelectField(array $field): array|string|null {
        $options = $field['options']['options'] ?? [];
        if ($options instanceof Arrayable) {
            $options = $options->toArray();
        }

        $values = array_column($options, 'value');

        if (($field['options']['mode'] ?? '') === 'single') {
            return empty($values) ? null : $this->faker()->randomElement($values);
        }

        return empty($values) ? [] : $this->faker()->randomElements($values, null);
    }

    public function geocodingField(array $field): array {
        return [
            'lat'     => $this->faker()->latitude(),
            'lng'     => $this->faker()->longitude(),
            'address' => $this->faker()->address(),
        ];
    }

    public function colorField(array $field): string {
        return $this->faker()->hexColor();
    }

    public function dateField(array $field, string $format = 'Y-m-d'): string {
        return $this->faker()->dateTimeBetween(
            $field['options']['min'] ?? '-1 year',
            $field['options']['max'] ?? 'now'
        )->format($format);
    }

    public function videoField(array $field): array {
        $type = $this->faker()->randomElement(['youtube', 'vimeo', 'url']);

        return [
            'type' => $type,
            'url'  => match ($type) {
                'youtube' => 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
                'vimeo'   => 'https://vimeo.com/1084537',
                'url'     => 'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_h264.mov',
            },
        ];
    }

    public function fileField(array $field): string {
        return 'https://pdfobject.com/pdf/sample.pdf';
    }

    public function inputField(array $field): string|int|null {
        $field['options'] = (array)($field['options'] ?? []);
        $type = $field['options']['type'] ?? null;

        if ($type === 'date') return $this->dateField($field);
        if ($type === 'datetime-local') return $this->dateField($field, 'Y-m-d H:i:s');
        if ($type === 'color') return $this->colorField($field);
        if ($type === 'checkbox') return $this->switchField($field);

        $validation = $field['validation'] ?? [];

        // Number extraction logic
        if ($type === 'number' || in_array('numeric', $validation) || in_array('integer', $validation)) {

            // Replaced messy array_filter/map with Laravel Collections helper function
            $getRuleValue = fn(string $rule) => collect($validation)
                ->filter(fn($r) => is_string($r) && str_starts_with($r, "{$rule}:"))
                ->map(fn($v) => (int)explode(':', $v)[1])
                ->first();

            $min = $getRuleValue('min') ?? $field['options']['min'] ?? 0;
            $max = $getRuleValue('max') ?? $field['options']['max'] ?? 2147483647;

            return $this->faker()->numberBetween((int)$min, (int)$max);
        }

        // String Types handling
        $name = $field['name'] ?? '';
        $type = $field['type'] ?? '';

        if ($name === 'slug') return $this->faker()->unique()->slug();
        if ($name === 'country') return $this->faker()->country();
        if ($name === 'city') return $this->faker()->city();
        if ($name === 'address') return $this->faker()->address();

        if ($type === 'password' || str_contains($name, 'password')) return 'password';
        if ($type === 'email' || str_contains($name, 'email')) return $this->faker()->email();
        if ($type === 'tel' || str_contains($name, 'phone')) return $this->faker()->phoneNumber();
        if ($type === 'url' || str_contains($name, 'link') || str_contains($name, 'url') || str_contains($name, 'canonical')) {
            return $this->faker()->url();
        }

        // Max text length
        $max = collect($validation)
            ->filter(fn($r) => is_string($r) && str_starts_with($r, 'max:'))
            ->map(fn($v) => (int)explode(':', $v)[1])
            ->first() ?? (int)($field['options']['maxlength'] ?? 50);

        return $this->faker()->text($max);
    }

    public function textareaField(array $field): string {
        $rows = $field['options']['rows'] ?? 3;
        $rows = $this->faker()->numberBetween((int)ceil(0.25 * $rows), (int)$rows);

        $res = collect()->times($rows, fn() => $this->faker()->text(50))->toArray();

        return implode(PHP_EOL, $res);
    }

    public function wysiwygField(array $field): string {
        return '<p>' . implode('</p>' . PHP_EOL . '<p>', $this->faker()->paragraphs()) . '</p>';
    }
}
