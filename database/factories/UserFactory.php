<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'email' => fake()->unique()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'rate' => fake()->numberBetween(10, 50) * 100,
            'job_title' => fake()->randomElement(['Frontend Developer', 'Backend Developer', 'Fullstack Developer', 'Designer', 'Manager', 'Client']),
            'avatar' => null,
            'password' => Hash::make('password'), // password
            'remember_token' => Str::random(10),
        ];
    }
}
