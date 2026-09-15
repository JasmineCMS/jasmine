<?php

namespace Jasmine\Jasmine\Bread\Fields;

use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Bread\BreadableInterface;
use LogicException;

class GroupedField extends AbstractField
{
    protected string $component = 'grouped-field';

    /** @var list<AbstractField> */
    protected array $fields = [];

    /** @param list<AbstractField> $fields */
    public function setFields(array $fields): static {
        $this->fields = $fields;

        return $this;
    }

    /** @return list<AbstractField> */
    public function getFields(): array {
        return $this->fields;
    }

    public function getDefault(): array {
        $val = [];
        foreach ($this->fields as $field) $val[$field->getName()] = $field->isRepeating() ? [] : $field->getDefault();

        return $val;
    }

    public function setDefault(mixed $default): static {
        throw new LogicException(
            'GroupedField defaults are computed from child fields; setDefault() is not supported.'
        );
    }

    /** Without a custom formatter, each child field formats its own value (on every item of a repeating group). */
    public function formatValueForEdit(mixed $value, BreadableInterface&Model $model): mixed {
        if ($this->getValueForEditFormatter() || !is_array($value)) return parent::formatValueForEdit($value, $model);

        $formatGroup = function (mixed $group) use ($model) {
            if (!is_array($group)) return $group;
            foreach ($this->fields as $field) if (isset($group[$name = $field->getName()]))
                $group[$name] = $field->formatValueForEdit($group[$name], $model);

            return $group;
        };

        return $this->isRepeating() ? array_map($formatGroup, $value) : $formatGroup($value);
    }

    protected function buildOptions(): array {
        return [
            ...parent::buildOptions(),
            'fields' => array_map(fn(AbstractField $field) => $field->toArray(), $this->fields),
        ];
    }
}
