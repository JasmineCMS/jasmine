<?php

namespace Jasmine\Jasmine\Console\Commands;

use Egulias\EmailValidator\EmailValidator;
use Egulias\EmailValidator\Validation\RFCValidation;
use Illuminate\Console\Command;
use Jasmine\Jasmine\Models\JasmineUser;

class Migrate extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jasmine:migrate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'migrate jasmine tables';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle()
    {
        \Artisan::call('migrate', [
            '--realpath' => true,
            '--path'     => __DIR__ . '/../../../database/migrations/',
        ]);

        echo \Artisan::output();
    }
}
