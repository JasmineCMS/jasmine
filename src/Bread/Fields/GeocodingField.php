<?php

namespace Jasmine\Jasmine\Bread\Fields;

class GeocodingField extends AbstractField
{
    protected string $component = 'geocoding-field';

    protected string $api_key;

    public function __construct(string $name)
    {
        parent::__construct($name);

        $this->default = [
            'lat'     => '31.7501995',
            'lng'     => '34.9979087',
            'address' => '',
        ];
    }

    public function setApiKey(string $key): static
    {
        $this->api_key = $key;

        return $this;
    }

    public function toArray(): array
    {
        $array = parent::toArray();

        $array['options'] = ['api_key' => $this->api_key];

        return $array;
    }
}
