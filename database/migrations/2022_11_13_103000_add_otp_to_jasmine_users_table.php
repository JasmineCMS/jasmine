<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->after('password', function (Blueprint $table) {
                $table->text('otp_secret')->nullable();
                $table->string('otp_remember_token', 100)->nullable();
            });
        });
    }

    public function down(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->dropColumn(['otp_secret', 'otp_remember_token']);
        });
    }
};
