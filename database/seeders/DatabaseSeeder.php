<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ProxyClient;
use App\Models\ProxyRequest;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //User::factory(10)->create();
        ProxyClient::factory(10)->create();
        ProxyRequest::factory(100)->create();
    }
}
