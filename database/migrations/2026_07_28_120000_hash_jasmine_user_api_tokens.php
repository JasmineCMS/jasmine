<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

/**
 * Move API tokens from plaintext-at-rest to a SHA-256 digest.
 *
 * Existing tokens keep working: the plaintext a client already holds still hashes to the value
 * stored here, so nothing has to be re-issued. `token` is truncated in the same pass to the
 * leading 8 characters, which is all the UI needs to identify a row.
 *
 * The unique constraint moves with the credential. Leaving it on `token` would be a live bug once
 * that column holds only a prefix — `jsm_` plus four random characters is 62^4 ≈ 14.7M
 * combinations, which collides at better than even odds somewhere around 4,500 tokens, and the
 * constraint is global rather than per-user.
 */
return new class extends Migration {
    private const string TABLE = 'jasmine_user_api_tokens';

    public function up(): void {
        Schema::table(self::TABLE, function (Blueprint $table) {
            $table->string('hash', 64)->nullable()->after('name');
        });

        // Dropped before the backfill, not after: truncating `token` to 8 characters can collide
        // between two existing rows, which would abort the migration against the old constraint.
        //
        // Guarded because down() cannot honestly put this index back — `token` holds prefixes by
        // then, which may collide — so a rollback followed by a re-migrate would otherwise die
        // trying to drop an index that is no longer there.
        if (Schema::hasIndex(self::TABLE, ['token'], 'unique')) {
            Schema::table(self::TABLE, function (Blueprint $table) {
                $table->dropUnique(['token']);
            });
        }

        DB::table(self::TABLE)->orderBy('id')->chunkById(500, function ($rows) {
            foreach ($rows as $row) {
                if ($row->token === null || $row->token === '') continue;

                DB::table(self::TABLE)->where('id', $row->id)->update([
                    'hash'  => hash('sha256', $row->token),
                    'token' => Str::substr($row->token, 0, 8),
                ]);
            }
        });

        Schema::table(self::TABLE, function (Blueprint $table) {
            $table->string('hash', 64)->nullable(false)->change();
            $table->unique('hash');
            $table->index('token');
        });
    }

    /**
     * Irreversible in the way that matters: the plaintext is gone, so rolling back leaves a table
     * that cannot authenticate anything. Every token has to be re-issued afterwards. The old unique
     * constraint is deliberately not restored — `token` now holds prefixes, which may collide.
     */
    public function down(): void {
        Schema::table(self::TABLE, function (Blueprint $table) {
            $table->dropUnique(['hash']);
            $table->dropIndex(['token']);
            $table->dropColumn('hash');
        });
    }
};
