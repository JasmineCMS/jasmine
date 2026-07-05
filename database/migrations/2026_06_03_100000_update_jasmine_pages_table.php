<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('jasmine_pages', function (Blueprint $table) {
            $table->string('name')->change();
            $table->string('url')->nullable()->change();
            $table->unique('name');
            $table->unique('url');
        });
    }

    public function down(): void {
        Schema::table('jasmine_pages', function (Blueprint $table) {
            $table->dropUnique(['name']);
            $table->dropUnique(['url']);

            $table->text('name')->change();
            $table->text('url')->change();
        });
    }
};
