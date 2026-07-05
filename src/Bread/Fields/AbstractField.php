<?php

namespace Jasmine\Jasmine\Bread\Fields;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\Manifest\GridItem;
use JsonSerializable;

abstract class AbstractField implements Arrayable, GridItem, JsonSerializable
{
    abstract protected string $component {
        get;
    }

    public function __construct(
        protected string $name,
        protected int $width = 12,
        protected array $options = [],
        protected array $validation = [],
        protected ?string $label = null,
        protected ?string $id = null,
        protected ?string $description = null,
        protected int|bool $repeats = false,
        protected int $repeaterWidth = 12,
        protected mixed $default = null,
        protected string $classes = '',
    ) {
        $this->id ??= 'jf' . Str::random(4);
        $this->label ??= $this->name;
    }

    public static function for(
        $name,
        $width = 12,
        $options = [],
        $validation = [],
        $label = null,
        $id = null,
        $description = null,
        $repeats = false,
        $repeaterWidth = 12,
        $default = null,
        $classes = '',
    ): static {
        return new static(
            $name,
            $width,
            $options,
            $validation,
            $label,
            $id,
            $description,
            $repeats,
            $repeaterWidth,
            $default,
            $classes,
        );
    }

    /** @return array{width:int, classes: string} */
    public static function parseLegacyWidth(string $str): array {
        $width = null;
        $classes = [];
        foreach (preg_split('/\s+/', trim($str)) ?: [] as $token) {
            if ($token === '') continue;
            if (preg_match('/^col-(?:xs|sm|md|lg|xl|xxl)-(\d+)$/', $token, $m)) $width = (int)$m[1];
            else $classes[] = $token;
        }

        $classes = implode(' ', $classes);

        return compact('width', 'classes');
    }

    public function setName(string $name): static {
        $this->name = $name;

        return $this;
    }

    public function getName(): string {
        return $this->name;
    }

    public function setWidth(int|string $width): static {
        if (is_string($width)) {
            trigger_error(sprintf(
                'Passing a string to %s() is deprecated and will be removed soon. Pass an integer instead.',
                __METHOD__
            ), E_USER_DEPRECATED);
            $data = static::parseLegacyWidth($width);
            $width = $data['width'];
            $this->setClasses($data['classes']);
        }
        $this->width = $width;

        return $this;
    }

    public function getWidth(): int {
        return $this->width;
    }

    public function setOptions(array $options): static {
        $this->options = $options;

        return $this;
    }

    public function getOptions(): array {
        return $this->options;
    }

    public function setValidation(array $validation): static {
        $this->validation = $validation;

        return $this;
    }

    public function getValidation(): array {
        return $this->validation;
    }

    public function setLabel(?string $label): static {
        $this->label = $label;

        return $this;
    }

    public function getLabel(): ?string {
        return $this->label;
    }

    public function setId(?string $id): static {
        $this->id = $id ?: 'jf' . Str::random(4);

        return $this;
    }

    public function getId(): string {
        return $this->id;
    }

    public function setDescription(?string $description): static {
        $this->description = $description;

        return $this;
    }

    public function getDescription(): ?string {
        return $this->description;
    }

    public function setRepeats(bool|int $repeats, null|int|string $repeaterWidth = null): static {
        $this->repeats = $repeats;
        if ($repeaterWidth !== null) $this->setRepeaterWidth($repeaterWidth);

        return $this;
    }

    public function getRepeats(): bool|int {
        return $this->repeats;
    }

    public function setRepeaterWidth(int $repeaterWidth): static {
        $this->repeaterWidth = $repeaterWidth;

        return $this;
    }

    public function getRepeaterWidth(): int {
        return $this->repeaterWidth;
    }

    public function setDefault(mixed $default): static {
        $this->default = $default;

        return $this;
    }

    public function getDefault(): mixed {
        return $this->default;
    }

    public function setClasses(string $classes): static {
        $this->classes = $classes;

        return $this;
    }

    public function getClasses(): string {
        return $this->classes;
    }

    /**
     * Compute the options array shipped to the client.
     *
     * @return array<string, mixed>
     */
    protected function buildOptions(): array {
        return $this->options;
    }

    /**
     * Final pass over the serialized array.
     *
     * @param array<string, mixed> $array
     * @return array<string, mixed>
     */
    protected function modifyArray(array $array): array {
        return $array;
    }

    public function toArray(): array {
        $clientValidation = array_values(array_filter($this->getValidation(), fn($i) => is_string($i)));

        $res = $this->modifyArray([
            'type'          => class_basename($this),
            'component'     => $this->component,
            'name'          => $this->getName(),
            'width'         => $this->getWidth(),
            'options'       => $this->buildOptions(),
            'validation'    => $clientValidation !== [] ? $clientValidation : ['nullable'],
            'label'         => $this->getLabel(),
            'id'            => $this->getId(),
            'description'   => $this->getDescription(),
            'repeats'       => $this->getRepeats(),
            'repeaterWidth' => $this->getRepeaterWidth(),
            'default'       => $this->getDefault(),
            'classes'       => $this->getClasses(),
        ]);

        $res['options'] = (object)$res['options'];

        return $res;
    }

    public function jsonSerialize(): array {
        return $this->toArray();
    }
}
