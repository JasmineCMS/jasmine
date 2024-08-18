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

    'locale' => 'en',

    'auth'      => [
        'guard'  => env('JASMINE_AUTH_GUARD', 'jasmine_web'),
        'broker' => env('JASMINE_AUTH_BROKER', 'jasmine_users'),
    ],

    /* Number of revisions to keep, false to disable revisions, zero for unlimited */
    'revisions' => 100,
];
