<?php


namespace Jasmine\Jasmine\Bread\Fields;


class FileField extends AbstractField
{
    protected string $component = 'file-field';
    
    protected ?string $disk = null;
    
    public function getDisk(): ?string { return $this->disk ?: config('file-manager.diskList.0', 'public'); }
    
    public function setDisk(?string $disk): static
    {
        $this->disk = $disk;
        
        return $this;
    }
    
    public function toArray(): array
    {
        $array = parent::toArray();
        
        if ($array['options'] instanceof \stdClass) $array['options'] = (array)$array['options'];
        
        $array['options']['disk'] = $this->getDisk();
        
        return $array;
    }
}
