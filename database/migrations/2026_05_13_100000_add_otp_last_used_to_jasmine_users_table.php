<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->timestamp('otp_last_used')->nullable()->after('otp_remember_token');
        });
    }

    public function down(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->dropColumn(['otp_last_used']);
        });
    }
};
