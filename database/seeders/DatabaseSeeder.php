<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        \App\Models\catalogue\User::create([
        'name' => 'Owner',
        'email' => 'admin@fayyfir.com',
        'password' => bcrypt('password123'), // Anda juga bisa pakai helper bcrypt()
    ]);
    }
}
