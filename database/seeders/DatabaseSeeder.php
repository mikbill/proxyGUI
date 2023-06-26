<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProxyClient;
use App\Models\ProxyRequest;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        ProxyClient::factory(10)->create();
        ProxyRequest::factory(100)->create();
    }
}
