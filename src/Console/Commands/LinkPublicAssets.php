<?php

namespace Jasmine\Jasmine\Console\Commands;

use Illuminate\Console\Command;

class LinkPublicAssets extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'jasmine:link-public-assets';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Add symlink to public assets in app public';

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
     * @return int
     */
    public function handle()
    {
        if (!file_exists(public_path('jasmine-public'))) {
            app('files')->link(__DIR__ . '/../../../public', public_path('jasmine-public'));
        }

        return 0;
    }
}
