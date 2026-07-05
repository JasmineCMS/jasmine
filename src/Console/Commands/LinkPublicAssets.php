<?php

namespace Jasmine\Jasmine\Console\Commands;

use Illuminate\Console\Command;

class LinkPublicAssets extends Command
{
    protected $signature = 'jasmine:link-public-assets';

    protected $description = 'Create symlink to public assets in app public';

    public function handle(): int {
        $link = public_path('jasmine-public');
        $target = realpath(__DIR__ . '/../../../public');

        if ($target === false) {
            $this->components->error('Jasmine public assets directory not found.');

            return self::FAILURE;
        }

        if (is_link($link) && realpath($link) !== $target) app('files')->delete($link);

        if (file_exists($link)) {
            $this->components->info("The [$link] link already exists.");

            return self::SUCCESS;
        }

        try {
            app('files')->relativeLink($target, $link);
        } catch (\Throwable $e) {
            $this->components->error("Failed to create link: {$e->getMessage()}");

            return self::FAILURE;
        }

        $this->components->info("The [$link] link has been connected to [$target].");

        return self::SUCCESS;
    }
}
