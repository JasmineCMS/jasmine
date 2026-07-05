<?php

use App\Models\Author;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /** Run the migrations. */
    public function up(): void {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->integer('order');
            $table->foreignIdFor(Author::class)->nullable()->constrained()->nullOnDelete()->cascadeOnUpdate();
            $table->json('title')->nullable();
            $table->json('content')->nullable();
            $table->timestamps();
        });
    }

    /** Reverse the migrations. */
    public function down(): void {
        Schema::dropIfExists('articles');
    }
};
