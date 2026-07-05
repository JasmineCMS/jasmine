<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->after('email', function (Blueprint $table) {
                $table->boolean('admin')->default(false);
                $table->json('roles')->nullable();
                $table->json('permissions')->nullable();
            });
        });
    }

    public function down(): void {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->dropColumn(['admin', 'roles', 'permissions']);
        });
    }
};
