<?php

namespace Jasmine\Jasmine\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Jasmine\Jasmine\Models\JasmineUser;

/**
 * @extends Factory<JasmineUser>
 */
class JasmineUserFactory extends Factory
{
    protected $model = JasmineUser::class;

    /** The current password being used by the factory. */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array {
        return [
            'name'     => fake()->name(),
            'email'    => fake()->unique()->safeEmail(),
            'password' => static::$password ??= Hash::make('password'),
        ];
    }

    /** Indicate that the model's email address should be unverified. */
    public function unverified(): static {
        return $this->state(fn(array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
