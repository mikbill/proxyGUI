<?php

namespace Database\Factories;

use App\Models\ProxyClient;
use App\Models\ProxyRequest;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class ProxyRequestFactory extends Factory
{
    protected $model = ProxyRequest::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $operations = ["Activate", "Migrate", "Confirm", "addSubscription", "getBalance", "unMigrate"];

        return [
            "clientID" => ProxyClient::all()->random()->id,
            "msisdn" => random_int(380000000000, 380999999999),
            "operationName" => Arr::random($operations),
            "lifecellCode" => rand(-10, 0),
            "lifecellDescription" => "",
            "clientCode" => 0,
            "clientDescription" => "",
            "transactionId" => $this->faker->uuid()
        ];
    }
}
