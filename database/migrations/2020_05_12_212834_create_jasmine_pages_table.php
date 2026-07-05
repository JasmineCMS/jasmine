<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jasmine_pages', function (Blueprint $table) {
            $table->id();
            $table->text('url');
            $table->text('name');
            $table->json('content');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('jasmine_pages');
    }
};
