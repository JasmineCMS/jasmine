<?php

use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Models\JasmineUser;
use Jasmine\Jasmine\Models\JasmineUserApiToken;

uses(RefreshDatabase::class);

const TOKENS_TABLE = 'jasmine_user_api_tokens';

function createTokenViaProfile(JasmineUser $user): array {
    test()->actingAs($user, config('jasmine.auth.guard'))
        ->post(route('jasmine.profile.show'), ['_sec' => 'createToken', 'name' => 'ci']);

    return session('swal');
}

// ---------------------------------------------------------------------------
// Storage
// ---------------------------------------------------------------------------

it('stores a digest rather than the plaintext', function () {
    $user = JasmineUser::factory()->create();
    $plain = createTokenViaProfile($user)['inputValue'];

    $row = $user->apiTokens()->sole();

    expect($plain)->toStartWith('jsm_')
        ->and($row->hash)->toBe(hash('sha256', $plain))
        ->and($row->hash)->not->toBe($plain);

    // the plaintext must not survive anywhere in the row
    expect(DB::table(TOKENS_TABLE)->where('token', $plain)->exists())->toBeFalse();
});

it('keeps only an identifying prefix in the token column', function () {
    $user = JasmineUser::factory()->create();
    $plain = createTokenViaProfile($user)['inputValue'];

    expect($user->apiTokens()->sole()->token)
        ->toBe(Str::substr($plain, 0, 8))
        ->toStartWith('jsm_')
        ->toHaveLength(8);
});

it('hides the digest and exposes the prefix when serialised', function () {
    $user = JasmineUser::factory()->create();
    createTokenViaProfile($user);

    $array = $user->apiTokens()->sole()->toArray();

    expect($array)->not->toHaveKey('hash')
        ->and($array)->toHaveKey('token');
});

it('never ships a usable credential to the profile page', function () {
    $user = JasmineUser::factory()->create();
    $plain = createTokenViaProfile($user)['inputValue'];

    $props = $this->actingAs($user, config('jasmine.auth.guard'))
        ->withoutVite()
        ->get(route('jasmine.profile.show'))
        ->viewData('page')['props'];

    expect(json_encode($props['tokens']))->not->toContain($plain);
});

// ---------------------------------------------------------------------------
// Handing the plaintext over exactly once
// ---------------------------------------------------------------------------

it('returns the plaintext in a blocking dialog the user must dismiss', function () {
    $swal = createTokenViaProfile(JasmineUser::factory()->create());

    expect($swal['inputValue'])->toStartWith('jsm_')
        // not a toast: it must not scroll past unread
        ->and($swal)->not->toHaveKey('toast')
        ->and($swal['allowOutsideClick'])->toBeFalse()
        ->and($swal['allowEscapeKey'])->toBeFalse();
});

// ---------------------------------------------------------------------------
// Authentication
// ---------------------------------------------------------------------------

it('authenticates with the plaintext and rejects the stored digest', function () {
    $user = JasmineUser::factory()->create(['admin' => true]);
    $plain = createTokenViaProfile($user)['inputValue'];

    $this->withToken($plain)->getJson('/jasmine/api/info')->assertSuccessful();

    // the digest is not itself a bearer credential
    $this->withToken($user->apiTokens()->sole()->hash)->getJson('/jasmine/api/info')->assertStatus(401);
});

// ---------------------------------------------------------------------------
// Migration
// ---------------------------------------------------------------------------

it('moves the unique constraint onto the digest', function () {
    // `token` now holds an 8-char prefix; a unique index there would collide between users
    $user = JasmineUser::factory()->create();
    $other = JasmineUser::factory()->create();

    $user->apiTokens()->create(['name' => 'a', 'hash' => hash('sha256', 'a'), 'token' => 'jsm_SAME']);
    $other->apiTokens()->create(['name' => 'b', 'hash' => hash('sha256', 'b'), 'token' => 'jsm_SAME']);

    expect(JasmineUserApiToken::where('token', 'jsm_SAME')->count())->toBe(2);
});

it('rejects a duplicate digest', function () {
    $user = JasmineUser::factory()->create();
    $user->apiTokens()->create(['name' => 'a', 'hash' => hash('sha256', 'dup'), 'token' => 'jsm_AAAA']);

    expect(fn() => $user->apiTokens()->create([
        'name' => 'b', 'hash' => hash('sha256', 'dup'), 'token' => 'jsm_BBBB',
    ]))->toThrow(UniqueConstraintViolationException::class);
});

it('leaves the schema in the expected shape', function () {
    expect(Schema::hasColumn(TOKENS_TABLE, 'hash'))->toBeTrue()
        ->and(Schema::hasColumn(TOKENS_TABLE, 'token'))->toBeTrue();
});

/**
 * Rewind to the pre-migration schema and seed it the way an existing install looks: plaintext in
 * `token`, no `hash` column, no `jsm_` prefix. RefreshDatabase migrates an empty database, so
 * without this the backfill loop is never executed by any test.
 *
 * @return array{0: JasmineUser, 1: string} the owner and the legacy plaintext
 */
function seedLegacyPlaintextToken(): array {
    Artisan::call('migrate:rollback', ['--step' => 1]);
    expect(Schema::hasColumn(TOKENS_TABLE, 'hash'))->toBeFalse();

    $user = JasmineUser::factory()->create(['admin' => true]);
    $legacy = Str::random(33); // pre-prefix format

    DB::table(TOKENS_TABLE)->insert([
        'jasmine_user_id' => $user->id,
        'name'            => 'legacy',
        'token'           => $legacy,
        'created_at'      => now(),
        'updated_at'      => now(),
    ]);

    Artisan::call('migrate');

    return [$user, $legacy];
}

it('hashes pre-existing plaintext tokens in place', function () {
    [, $legacy] = seedLegacyPlaintextToken();

    $row = DB::table(TOKENS_TABLE)->sole();

    expect($row->hash)->toBe(hash('sha256', $legacy))
        ->and($row->token)->toBe(Str::substr($legacy, 0, 8))
        ->and($row->token)->not->toBe($legacy);
});

it('leaves an already-issued token working after the migration', function () {
    // The point of hashing in place rather than re-issuing: a client holding the old plaintext
    // still hashes to the stored digest, so nothing has to be handed out again.
    [, $legacy] = seedLegacyPlaintextToken();

    $this->withToken($legacy)->getJson('/jasmine/api/info')->assertSuccessful();
});

it('backfills every row, not just the first', function () {
    Artisan::call('migrate:rollback', ['--step' => 1]);

    $user = JasmineUser::factory()->create();
    $plains = collect(range(1, 3))->map(function (int $i) use ($user) {
        $plain = Str::random(33);
        DB::table(TOKENS_TABLE)->insert([
            'jasmine_user_id' => $user->id,
            'name'            => "legacy-$i",
            'token'           => $plain,
            'created_at'      => now(),
            'updated_at'      => now(),
        ]);

        return $plain;
    });

    Artisan::call('migrate');

    $plains->each(fn(string $p) => expect(
        DB::table(TOKENS_TABLE)->where('hash', hash('sha256', $p))->exists()
    )->toBeTrue());
});

// ---------------------------------------------------------------------------
// Expiry
// ---------------------------------------------------------------------------

it('stores an expiry supplied at creation', function () {
    $user = JasmineUser::factory()->create();
    $when = now()->addDays(30)->format('Y-m-d');

    $this->actingAs($user, config('jasmine.auth.guard'))
        ->post(route('jasmine.profile.show'), ['_sec' => 'createToken', 'name' => 'ci', 'expires_at' => $when])
        ->assertSessionHasNoErrors();

    expect($user->apiTokens()->sole()->expires_at->format('Y-m-d'))->toBe($when);
});

it('defaults to no expiry when none is given', function () {
    $user = JasmineUser::factory()->create();
    createTokenViaProfile($user);

    expect($user->apiTokens()->sole()->expires_at)->toBeNull();
});

it('rejects an expiry that is not in the future', function () {
    $user = JasmineUser::factory()->create();

    foreach ([now()->subDay(), now()] as $bad) {
        $this->actingAs($user, config('jasmine.auth.guard'))
            ->post(route('jasmine.profile.show'), [
                '_sec' => 'createToken', 'name' => 'ci', 'expires_at' => $bad->format('Y-m-d'),
            ])
            ->assertSessionHasErrors('expires_at');
    }

    expect($user->apiTokens()->count())->toBe(0);
});

it('lets an expiry be edited and cleared', function () {
    $user = JasmineUser::factory()->create();
    createTokenViaProfile($user);
    $id = $user->apiTokens()->sole()->id;
    $when = now()->addDays(7)->format('Y-m-d');

    $this->actingAs($user, config('jasmine.auth.guard'))
        ->post(route('jasmine.profile.show'), [
            '_sec' => 'updateToken', 'id' => $id, 'name' => 'ci', 'expires_at' => $when,
        ])->assertSessionHasNoErrors();

    expect($user->apiTokens()->sole()->expires_at->format('Y-m-d'))->toBe($when);

    // blank means "never" — the UI sends null for an empty date input
    $this->actingAs($user, config('jasmine.auth.guard'))
        ->post(route('jasmine.profile.show'), [
            '_sec' => 'updateToken', 'id' => $id, 'name' => 'ci', 'expires_at' => null,
        ])->assertSessionHasNoErrors();

    expect($user->apiTokens()->sole()->expires_at)->toBeNull();
});

it('refuses to authenticate an expired token', function () {
    $user = JasmineUser::factory()->create(['admin' => true]);
    $plain = createTokenViaProfile($user)['inputValue'];

    $this->withToken($plain)->getJson('/jasmine/api/info')->assertSuccessful();

    // set it in the past directly — the validator will not accept a past date on the way in
    $user->apiTokens()->sole()->forceFill(['expires_at' => now()->subMinute()])->save();

    $this->withToken($plain)->getJson('/jasmine/api/info')->assertStatus(401);
});
