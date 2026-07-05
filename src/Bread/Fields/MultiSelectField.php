<?php

namespace Jasmine\Jasmine\Bread\Fields;

/**
 * @phpstan-type Option array{value: mixed, label: string, disabled?: bool}
 * @phpstan-type OptionGroup array{label: string, options: iterable<Option>}
 */
class MultiSelectField extends AbstractField
{
    protected string $component = 'multi-select-field';

    /**
     * @param array{
     *     mode?: 'single' | 'multiple' | 'tags',
     *     searchable?: bool,
     *     groups?: bool,
     *     options?: iterable<Option> | iterable<OptionGroup>,
     *     disabled?: bool,
     *     sortable?: bool,
     *     placeholder?: string,
     *     slots?: array{option?: string, tag?: string},
     * } $options
     *
     * mode        — selection mode, defaults to 'single'.
     *               'single':   value is scalar (or null);
     *               'multiple': value is an array, selections shown as a count;
     *               'tags':     value is an array, selections shown as removable chips.
     * searchable  — enables the type-to-filter input.
     * groups      — when true, `options` must be a list of OptionGroup
     *               ({label, options}) instead of a flat Option list.
     * options     — flat Option list, or OptionGroup list when `groups` is true.
     *               Option `value` may be null (e.g. a "None" entry); per-option
     *               `disabled` renders the entry unselectable. Lists over 100
     *               options are virtualized on the frontend automatically.
     * disabled    — disables the whole field.
     * sortable    — tags mode only: chips become drag-reorderable, and the
     *               saved array follows chip order (order is data).
     * placeholder — input placeholder, shown while nothing is selected.
     * slots       — optional Vue template strings rendered for each dropdown
     *               option ('option') or selected chip ('tag'); the template
     *               receives the full Option as `props.option`. Requires the
     *               runtime-compiler Vue build.
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }

    protected function modifyArray(array $array): array {
        $options = (array)$array['options'];
        $mode = $options['mode'] ?? null;

        if (!is_array($array['default']) && !in_array($mode, ['single', null], true)) $array['default'] = [];

        return $array;
    }
}
