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

    'auth'      => [
        'guard'  => env('JASMINE_AUTH_GUARD', 'jasmine_web'),
        'broker' => env('JASMINE_AUTH_BROKER', 'jasmine_users'),
    ],

    // TODO
    'webauthn'  => [
        'rp_id'           => env('JASMINE_WEBAUTHN_RP_ID'),   // host only; defaults to APP_URL host
        'rp_name'         => env('JASMINE_WEBAUTHN_RP_NAME'), // defaults to app.name
        'origin'          => env('JASMINE_WEBAUTHN_ORIGIN'),  // exact origin; defaults to APP_URL
        'allowed_origins' => null, // optional string[] to override (multi-domain); defaults to [origin]
    ],

    /* Number of revisions to keep, false to disable revisions, zero for unlimited */
    'revisions' => 100,

    'routes' => [
        'web' => ['register' => true, 'prefix' => 'jasmine', 'middleware' => ['web']],
        'api' => ['register' => true, 'prefix' => 'jasmine/api', 'middleware' => ['api']],
    ],
];
