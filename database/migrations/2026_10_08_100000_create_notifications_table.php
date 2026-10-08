<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Laravel's standard `notifications` table, which Jasmine's notification UI reads.
 *
 * The table belongs to the host app and many apps already have one, so this only
 * creates it when it's missing, and never drops it.
 */
return new class extends Migration {
    public function up(): void {
        if (Schema::hasTable('notifications')) return;

        Schema::create('notifications', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('type');
            $table->morphs('notifiable');
            $table->text('data');
            $table->timestamp('read_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        // shared with the host app; leave it in place
    }
};
