<?php

namespace Jasmine\Jasmine\Bread\Fields;

class CodeField extends AbstractField
{
    protected string $component = 'code-field';

    /**
     * @param array{
     *     class?: string,
     *     language?: 'javascript'|'typescript'|'jsx'|'tsx'|'json'|'html'|'css'|'php'|'markdown'|'python'|'sql'|'xml'|'yaml'|'rust'|'cpp'|'java'|'go'|'vue'|'sass',
     *     placeholder?: string,
     *     readonly?: bool,
     *     wrap?: bool,
     *     tab?: bool,
     *     tabSize?: int,
     *     basic?: bool,
     *     minimal?: bool,
     *     dark?: bool,
     *     height?: string,
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }
}
