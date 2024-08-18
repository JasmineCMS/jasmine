<?php

namespace Jasmine\Jasmine\Console\Commands;

use Illuminate\Foundation\Console\ModelMakeCommand;

class ModelMake extends ModelMakeCommand
{
    protected $name = 'make:jasmine-model';

    protected static $defaultName = 'make:jasmine-model';

    protected $description = 'Create a new Eloquent Jasmine model class';

    /**
     * Resolve the fully-qualified path to the stub.
     *
     * @param  string  $stub
     * @return string
     */
    protected function resolveStubPath($stub)
    {
        return file_exists($customPath = $this->laravel->basePath(trim($stub, '/')))
            ? $customPath
            : __DIR__ . $stub;
    }

    protected function getStub()
    {

        return $this->resolveStubPath('/stubs/jasmine-model.stub');
    }
}
