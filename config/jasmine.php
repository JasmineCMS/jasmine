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
        'guard'       => env('JASMINE_AUTH_GUARD', 'jasmine_web'),
        'broker'      => env('JASMINE_AUTH_BROKER', 'jasmine_users'),

        /*
        | Require every user to have a second factor (OTP or a security key).
        |
        | Users without one are limited to the profile page until they enroll,
        | and cannot remove their last remaining factor. Sessions whose latest
        | login came through an SSO provider registered with `mfaTrusted`
        | (the default) are exempt — that IdP is trusted to enforce its own MFA.
        */
        'mfa'         => [
            'required' => env('JASMINE_MFA_REQUIRED', false),
        ],

        /*
        | New accounts are created without a usable password; the single-use
        | onboarding link e-mailed to the user is their only way in. Expiry is
        | in minutes (default 20 minutes) — once it lapses, an administrator has
        | to send a fresh link from the users list.
        */
        'onboarding'  => [
            'expire' => env('JASMINE_ONBOARDING_EXPIRE', 20),
        ],

        /*
        | Throttling for the authentication endpoints.
        |
        | attempts    max failed attempts per account (email + IP) before lockout
        | ip_attempts max failed attempts per IP across all accounts (blocks
        |             credential spraying / user enumeration from one source)
        | decay       seconds an attempt is remembered by the limiter
        |
        | `api` throttles bearer-token auth failures keyed by IP only!
        |
        | Set any `attempts` value to 0 to disable that limiter entirely — handy
        | in the test environment, not recommended in production.
        */
        'rate_limits' => [
            'login'    => [
                'attempts'    => env('JASMINE_THROTTLE_LOGIN_ATTEMPTS', 5),
                'ip_attempts' => env('JASMINE_THROTTLE_LOGIN_IP_ATTEMPTS', 30),
                'decay'       => env('JASMINE_THROTTLE_LOGIN_DECAY', 60),
                'ip_decay'    => env('JASMINE_THROTTLE_LOGIN_IP_DECAY', 60),
            ],
            'forgot'   => [
                'attempts'    => env('JASMINE_THROTTLE_FORGOT_ATTEMPTS', 3),
                'ip_attempts' => env('JASMINE_THROTTLE_FORGOT_IP_ATTEMPTS', 10),
                'decay'       => env('JASMINE_THROTTLE_FORGOT_DECAY', 600),
                'ip_decay'    => env('JASMINE_THROTTLE_FORGOT_DECAY', 600),
            ],
            'otp'      => [
                'attempts' => env('JASMINE_THROTTLE_OTP_ATTEMPTS', 5),
                'decay'    => env('JASMINE_THROTTLE_OTP_DECAY', 900),
            ],
            'webauthn' => [
                'attempts' => env('JASMINE_THROTTLE_WEBAUTHN_ATTEMPTS', 5),
                'decay'    => env('JASMINE_THROTTLE_WEBAUTHN_DECAY', 900),
            ],
            'api'      => [
                'attempts' => env('JASMINE_THROTTLE_API_ATTEMPTS', 5),
                'decay'    => env('JASMINE_THROTTLE_API_DECAY', 300),
            ],
        ],
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
