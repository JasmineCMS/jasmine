<?php

// fix larastan path
$larastan_bootstrap = __DIR__ . '/vendor/larastan/larastan/bootstrap.php';

if (file_exists($larastan_bootstrap)) {
    $content = file_get_contents($larastan_bootstrap);
    if (!str_contains($content, '/laravel/bootstrap/app.php')) {
        file_put_contents(
            $larastan_bootstrap,
            str_replace('/bootstrap/app.php', '/laravel/bootstrap/app.php', $content)
        );
        echo "Successfully patched Larastan to boot via the dummy app!\n";
    }
}
