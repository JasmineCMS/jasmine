<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->dropColumn('roles');
            $table->json('permissions')->nullable()->change();
        });

        Schema::dropIfExists('jasmine_password_resets');
        Schema::create('jasmine_password_resets', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::table('jasmine_revisions', function (Blueprint $table) {
            $table->string('locale', 7)->nullable()->change();
        });
    }

    public function down(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->json('roles')->nullable();
        });

        Schema::table('jasmine_password_resets', function (Blueprint $table) {
            $table->dropPrimary(['email']);
            $table->index('email');
        });

        Schema::table('jasmine_revisions', function (Blueprint $table) {
            $table->string('locale', 5)->nullable()->change();
        });
    }
};
