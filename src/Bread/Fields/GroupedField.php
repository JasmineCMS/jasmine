<?php

namespace Jasmine\Jasmine\Bread\Fields;

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
        foreach ($this->fields as $field) $val[$field->getName()] = $field->repeats > 1 || $field->repeats === true
            ? [] : $field->getDefault();

        return $val;
    }

    public function setDefault(mixed $default): static {
        throw new LogicException(
            'GroupedField defaults are computed from child fields; setDefault() is not supported.'
        );
    }

    protected function buildOptions(): array {
        return [
            ...parent::buildOptions(),
            'fields' => array_map(fn(AbstractField $field) => $field->toArray(), $this->fields),
        ];
    }
}
