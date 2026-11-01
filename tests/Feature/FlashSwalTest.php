<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Models\JasmineUser;

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();

    // the pages live in the package, not in the test app's page paths
    config()->set('inertia.testing.ensure_pages_exist', false);

    // the first user is the superuser
    $this->actingAs(JasmineUser::factory()->create(), config('jasmine.auth.guard'));
});

it('hands a flashed swal to the client with its submit and a fresh nonce', function () {
    $submit = ['url' => '/somewhere', 'method' => 'post'];

    $this->withSession(['swal' => ['title' => 'When?', 'input' => 'date', 'submit' => $submit]])
        ->get(route('jasmine.profile.show'))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->where('_swal.title', 'When?')
            ->where('_swal.submit', $submit)
            ->has('_swal.nonce')
            ->etc()
        );
});
