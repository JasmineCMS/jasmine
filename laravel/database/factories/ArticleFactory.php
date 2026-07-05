<?php

namespace Database\Factories;

use App\Models\Article;
use App\Models\Author;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Article>
 */
class ArticleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        return [
            'author_id' => Author::factory(),
            'title'     => [
                'en' => fake('en_US')->sentence(3),
                'he' => fake('he_IL')->sentence(3),
            ],
            'content'   => [
                'en' => fake('en_US')->randomHtml(),
                'he' => fake('he_IL')->randomHtml(),
            ],
        ];
    }
}
