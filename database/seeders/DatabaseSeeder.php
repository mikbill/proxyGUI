<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Index\Models\ProxyClient;
use Index\Models\ProxyRequest;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \Index\Models\User::factory(10)->create();
        ProxyClient::factory(10)->create();
        ProxyRequest::factory(100)->create();
    }
}
