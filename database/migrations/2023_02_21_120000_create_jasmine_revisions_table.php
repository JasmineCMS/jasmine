<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('jasmine_revisions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jasmine_user_id')->nullable()->constrained()->cascadeOnUpdate()->nullOnDelete();
            $table->morphs('revisionable');
            $table->string('locale', 6)->nullable();
            $table->json('contents')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('jasmine_revisions');
    }
};
