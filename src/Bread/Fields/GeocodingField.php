<?php

namespace Jasmine\Jasmine\Bread\Fields;

class GeocodingField extends AbstractField
{
    protected string $component = 'geocoding-field';

    protected ?string $apiKey = null;

    public function getApiKey(): ?string {
        return $this->apiKey;
    }

    public function setApiKey(string $key): static {
        $this->apiKey = $key;

        return $this;
    }

    /**
     * @param array{
     *     types?: array<string>, // TODO
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }

    protected function buildOptions(): array {
        return [
            ...parent::buildOptions(),
            'api_key' => $this->getApiKey(),
        ];
    }

    protected function modifyArray(array $array): array {

        if (!$array['default']) $array['default'] = [
            'lat'     => '31.7501995',
            'lng'     => '34.9979087',
            'address' => null,
        ];

        return $array;
    }
}
