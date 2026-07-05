<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Jasmine\Jasmine\Models\JasmineUser;

return new class extends Migration {
    public function up(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->string('webauthn_user_handle', 64)->nullable()->after('otp_last_used');
        });

        Schema::create('jasmine_webauthn_credentials', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(JasmineUser::class)->constrained('jasmine_users')
                ->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('name');
            $table->string('credential_id', 512)->unique();
            $table->json('source');
            $table->timestamp('last_used_at')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('jasmine_webauthn_credentials');
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->dropColumn('webauthn_user_handle');
        });
    }
};
