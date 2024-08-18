<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->after('email', function (Blueprint $table) {
                $table->boolean('admin')->default(false);
                $table->json('roles')->default('[]');
                $table->json('permissions')->default('[]');
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('jasmine_users', function (Blueprint $table) {
            $table->dropColumn(['admin', 'roles', 'permissions']);
        });
    }
};
