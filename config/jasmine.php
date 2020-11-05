<?php
return [

    /*
    |--------------------------------------------------------------------------
    | Jasmine configuration
    |--------------------------------------------------------------------------
    |
    |
    |
    */

    'auth' => [
        'guard'  => env('JASMINE_AUTH_GUARD', 'jasmine_web'),
        'broker' => env('JASMINE_AUTH_GUARD', 'jasmine_users'),
    ],
];
