<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'username' => 'satria_rajendra',
            'password' => bcrypt('12345678'),
            'name' => 'Satria Rajendra',
            'email' => 'satriarajen@upi.edu',
        ]);

        DB::table('users')->insert([
            'username' => 'fauzan_azmi',
            'password' => bcrypt('12345678'),
            'name' => 'fauzan azmi',
            'email' => 'fauzan.azmi@suryaenergi.com',
        ]);
    }
}
