<?php

namespace Jasmine\Jasmine\Bread\Fields;

class FileField extends AbstractField
{
    protected string $component = 'file-field';

    protected ?string $disk = null;

    public function getDisk(): ?string {
        return $this->disk ?: config('file-manager.diskList.0', 'public');
    }

    public function setDisk(?string $disk): static {
        $this->disk = $disk;

        return $this;
    }

    protected function buildOptions(): array {
        return [
            ...$this->options,
            'disk' => $this->getDisk(),
        ];
    }
}
