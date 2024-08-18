<?php

namespace Jasmine\Jasmine\Console\Commands;

use Illuminate\Console\GeneratorCommand;

class PageMake extends GeneratorCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'make:jasmine-page';

    /**
     * The name of the console command.
     *
     * This name is used to identify the command during lazy loading.
     *
     * @var string|null
     *
     * @deprecated
     */
    protected static $defaultName = 'make:jasmine-page';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create a new Jasmine page class';

    /**
     * The type of class being generated.
     *
     * @var string
     */
    protected $type = 'Page';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        return parent::handle();
    }

    /**
     * Resolve the fully-qualified path to the stub.
     *
     * @param string $stub
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
        return $this->resolveStubPath('/stubs/jasmine-page.stub');
    }

    /**
     * Get the default namespace for the class.
     *
     * @param  string  $rootNamespace
     * @return string
     */
    protected function getDefaultNamespace($rootNamespace)
    {
        return is_dir(app_path('Models')) ? $rootNamespace . '\\Pages' : $rootNamespace;
    }
}
