<?php

namespace Jasmine\Jasmine;

use Faker\Factory;
use Faker\Generator;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Arr;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\AbstractField;

/**
 * @property Generator $faker
 */
class ManifestFaker
{
    /** @var Generator[] */
    private array $fakers = [];

    public function __construct(private Model $model, private bool $all = false, private array $override = [])
    {
        $map = [
            'en' => 'en_US',
            'he' => 'he_IL',
        ];

        foreach (config('app.locales') as $locale) {
            $this->fakers[$locale] = Factory::create($map[$locale] ?? $locale);
        }
    }

    public function __get(string $var)
    {
        if ($var === 'faker') return $this->fakers[app()->getLocale()];

        throw new \BadMethodCallException('Undefined property via __get()');
    }

    public static function fake(Model|BreadableInterface|string $model, bool $all = false, array $override = []): array
    {
        if (is_string($model)) $model = new $model;

        return (new static($model, $all, $override))->build();
    }

    public function build(): array
    {
        $res = $this->fakeFields($this->model->fieldsManifest($this->model)->getFields());

        $keys = [];

        foreach ($this->override as $k => $v) {
            if (!str_contains($k, '.*')) {
                $ov = Arr::get($res, $k);
                $v = $v instanceof \Closure ? $v($ov, $this) : $v;
                Arr::set($res, $k, $v);

                continue;
            }

            if (!count($keys)) $keys = array_keys(Arr::dot($res));

            $k = str_replace('*', '\d+', $k);
            $k = str_replace('.', '\.', $k);

            foreach (preg_grep('/^' . $k . '$/', $keys) as $nk) {
                $ov = Arr::get($res, $nk);
                $v = $v instanceof \Closure ? $v($ov, $this) : $v;
                Arr::set($res, $nk, $v);
            }
        }

        return $res;
    }

    /**
     * @param AbstractField[] $fields *
     *
     * @throws \ReflectionException
     */
    public function fakeFields(array $fields, bool $nested = false): array
    {
        $data = [];
        foreach ($fields as $field) {
            $field = is_array($field) ? $field : $field->toArray();

            $data[$field['name']] = null;

            if (!$this->all && !in_array('required', $field['validation']) && $this->faker->boolean) {
                continue;
            } else if (method_exists(self::class, lcfirst($field['type']))) {
                if (($field['repeats'] ?? 1) > 1) {
                    $data[$field['name']] = [];
                    $fill = $this->faker->numberBetween(2, $field['repeats']);
                    for ($i = 0; $i < $fill; $i++) {
                        $data[$field['name']][] = call_user_func([self::class, lcfirst($field['type'])], $field);
                    }
                } else {
                    $data[$field['name']] = call_user_func([self::class, lcfirst($field['type'])], $field);
                }
            }
        }

        return $data;
    }

    public function groupedField(array $field): array
    {
        return $this->fakeFields($field['options']['fields'] ?? [], true);
    }

    public function switchField(array $field): bool
    {
        return $this->faker->boolean;
    }

    public function imageField(array $field): array
    {
        if ($field['options']['flexible']) {
            $w = $this->faker->numberBetween(
                (0.9 * ($field['options']['w'] ?? 0)) ?: 100,
                (1.1 * ($field['options']['w'] ?? 0)) ?: 400,
            );
            $h = $this->faker->numberBetween(
                (0.9 * ($field['options']['h'] ?? 0)) ?: 100,
                (1.1 * ($field['options']['h'] ?? 0)) ?: 400,
            );
        } else {
            $w = $field['options']['w'];
            $h = $field['options']['h'];
        }

        return [
            'alt' => $this->faker->words(rand(1, 3), true),
            'src' => $this->faker->imageUrl($w, $h),
            'w'   => $w, 'h' => $h,
        ];
    }

    public function selectField(array $field): array|string|null
    {
        if ($field['options']['multiple'] ?? null) {
            return $this->faker->randomElements(array_keys($field['options']['options']), null);
        }

        return $this->faker->randomElement(array_keys($field['options']['options']));
    }

    // TODO multiselect field

    public function geocodingField(array $field): array
    {
        return [
            'lat'     => $this->faker->latitude,
            'lng'     => $this->faker->longitude,
            'address' => $this->faker->address,
        ];
    }

    public function colorField(array $field): string
    {
        return $this->faker->hexColor;
    }

    public function dateField(array $field): string
    {
        return $this->faker->dateTimeBetween(
            $field['options']['min'] ?? '-1 year',
            $field['options']['max'] ?? 'now',
        )->format('Y-m-d');
    }

    public function videoField(array $field): array
    {
        $type = $this->faker->randomElement(['youtube', 'vimeo', 'url']);

        return [
            'type' => $type,
            'url'  => match ($type) {
                'youtube' => 'https://www.youtube.com/watch?v=YE7VzlLtp-4',
                'vimeo'   => 'https://vimeo.com/1084537',
                'url'     => 'https://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_1080p_h264.mov',
            },
        ];
    }

    public function fileField(array $field): string
    {
        return 'https://pdfobject.com/pdf/sample.pdf';
    }

    public function inputField(array $field): string
    {
        $field['options'] = (array)$field['options'];

        if ($field['type'] === 'date') return $this->dateField($field);
        if ($field['type'] === 'color') return $this->colorField($field);
        if ($field['type'] === 'checkbox') return $this->switchField($field);

        if (
            in_array('numeric', $field['validation'] ?? [])
            || in_array('integer', $field['validation'] ?? [])
        ) {
            $min = array_values(array_map(
                fn($v) => intval(explode(':', $v)[1] ?? '0'),
                array_filter($field['validation'], fn($r) => str_starts_with($r, 'min:'))
            ))[0] ?? 0;

            $max = array_values(array_map(
                fn($v) => intval(explode(':', $v)[1] ?? '2147483647'),
                array_filter($field['validation'], fn($r) => str_starts_with($r, 'max:'))
            ))[0] ?? 2147483647;

            return $this->faker->numberBetween((int)$min, (int)$max);
        }

        if ($field['name'] === 'slug') return $this->faker->unique()->slug;
        if ($field['name'] === 'country') return $this->faker->country;
        if ($field['name'] === 'city') return $this->faker->city;
        if ($field['name'] === 'address') return $this->faker->address;

        if ($field['type'] === 'password'
            || str_contains($field['name'], 'password')
        ) return 'password';

        if ($field['type'] === 'email'
            || str_contains($field['name'], 'email')
        ) return $this->faker->email;

        if ($field['type'] === 'tel'
            || str_contains($field['name'], 'phone')
        ) return $this->faker->phoneNumber;

        if ($field['type'] === 'url'
            || str_contains($field['name'], 'link')
            || str_contains($field['name'], 'url')
            || str_contains($field['name'], 'canonical')
        ) return $this->faker->url;

        /*
        $min = array_values(array_map(
            fn($v) => intval(explode(':', $v)[1] ?? '2'),
            array_filter($field['validation'], fn($r) => str_starts_with($r, 'min:'))
        ))[0] ?? (int)($field['options']['minlength'] ?? 2);
*/
        $max = array_values(array_map(
            fn($v) => intval(explode(':', $v)[1] ?? '50'),
            array_filter($field['validation'], fn($r) => str_starts_with($r, 'max:'))
        ))[0] ?? (int)($field['options']['maxlength'] ?? 50);

        return $this->faker->text($max);
    }

    public function textareaField(array $field): string
    {
        $field['options'] = (array)$field['options'];

        $res = [];
        $rows = $field['options']['rows'] ?? 3;
        $rows = $this->faker->numberBetween(ceil(0.25 * $rows), $rows);
        for ($i = 0; $i < $rows; $i++) $res[] = $this->faker->text(50);

        return implode(PHP_EOL, $res);
    }

    public function wysiwygField(array $field): string
    {
        return '<p>' . implode('</p>' . PHP_EOL . '<p>', $this->faker->paragraphs()) . '</p>';
    }
}