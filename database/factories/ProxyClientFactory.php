<?php

namespace Database\Factories;

use Index\Models\ProxyClient;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * Class ProxyClientFactory
 * @package Database\Factories
 */
class ProxyClientFactory extends Factory
{
    protected $model = ProxyClient::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "name" => $this->faker->name(),
            "update_date" => $this->faker->date("Y-m-d", "2025-12-31"),
            "production_url" => $this->faker->url(),
        ];
    }
}
