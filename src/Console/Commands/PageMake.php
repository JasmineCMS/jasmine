<?php

namespace Jasmine\Jasmine\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class PageMake extends GeneratorCommand
{
    protected $name = 'make:jasmine-page';

    protected $description = 'Create a new Jasmine page class';

    protected $type = 'Page';

    /**
     * Resolve the fully-qualified path to the stub.
     *
     * @param string $stub
     * @return string
     */
    protected function resolveStubPath($stub) {
        return file_exists($customPath = $this->laravel->basePath(trim($stub, '/')))
            ? $customPath
            : __DIR__ . $stub;
    }

    protected function getStub() {
        return $this->resolveStubPath('/stubs/jasmine-page.stub');
    }

    /**
     * Get the default namespace for the class.
     *
     * @param string $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace) {
        return is_dir(app_path('Models')) ? $rootNamespace . '\\Pages' : $rootNamespace;
    }
}
