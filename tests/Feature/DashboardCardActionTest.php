<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Dashboard\DashboardCard;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();

    Jasmine::registerDashboardCard('pinger', DashboardCard::blade(fn() => '<p>ping</p>')
        ->post('ping', fn(Request $request) => response()->json(['pong' => true])));

    $this->actingAs(JasmineUser::factory()->create(), config('jasmine.auth.guard'));
});

it('renders the dashboard with a card that has an action', function () {
    $this->get(route('jasmine.dashboard'))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Dashboard', false)
            ->where('cards.0.id', 'pinger')
            ->where('cards.0.actions.0.name', 'ping')
            ->where('cards.0.actions.0.method', 'POST')
            ->where('cards.0.actions.0.url', route('jasmine.dashboard.card.action', ['pinger', 'ping']))
        );
});

it('runs the card action through its route', function () {
    $this->post(route('jasmine.dashboard.card.action', ['pinger', 'ping']))
        ->assertOk()
        ->assertJson(['pong' => true]);
});

it('rejects an action called with the wrong method', function () {
    $this->get(route('jasmine.dashboard.card.action', ['pinger', 'ping']))
        ->assertStatus(405);
});

it('404s an unknown card or action', function () {
    $this->post(route('jasmine.dashboard.card.action', ['pinger', 'nope']))->assertNotFound();
    $this->post(route('jasmine.dashboard.card.action', ['nope', 'ping']))->assertNotFound();
});
