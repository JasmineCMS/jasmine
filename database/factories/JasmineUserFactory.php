<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Models\JasmineUser;

/**
 * @extends Factory<JasmineUser>
 */
class JasmineUserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;
    
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'     => fake()->name(),
            'email'    => fake()->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('password'),
            //'remember_token'    => Str::random(10),
        ];
    }
    
    public function verified(): static
    {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => now(),
        ]);
    }
}
