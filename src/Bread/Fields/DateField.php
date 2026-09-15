<?php

namespace Jasmine\Jasmine\Bread\Fields;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Throwable;

class DateField extends AbstractField
{
    protected string $component = 'input-field';

    /**
     * @param array{
     *     type?: 'date' | 'datetime-local',
     *     min?: string,
     *     max?: string,
     *     step?: string,
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }

    protected function buildOptions(): array {
        return [
            'type' => 'date',
            ...parent::buildOptions(),
        ];
    }

    public function formatValueForEdit(mixed $value, BreadableInterface&Model $model): mixed {
        if ($this->getValueForEditFormatter()) return parent::formatValueForEdit($value, $model);

        return $this->isRepeating() && is_array($value)
            ? array_map($this->formatDate(...), $value)
            : $this->formatDate($value);
    }

    private function formatDate(mixed $value): mixed {
        // Carbon parses null and '' as now
        if ($value === null || $value === '') return $value;

        try {
            $date = Carbon::parse($value)->setTimezone(date_default_timezone_get());
        } catch (Throwable) {
            return $value;
        }

        return $date->format($this->buildOptions()['type'] === 'datetime-local' ? 'Y-m-d\TH:i' : 'Y-m-d');
    }
}
