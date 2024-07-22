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
        Schema::create('jasmine_revisions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('jasmine_user_id')->nullable()->constrained()->cascadeOnUpdate()->nullOnDelete();
            $table->morphs('revisionable');
            $table->string('locale', 5)->nullable();
            $table->json('contents')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jasmine_revisions');
    }
};
