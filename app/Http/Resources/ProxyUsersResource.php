<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ProxyUsersResource
 * @package App\Http\Response\Auth
 */
class ProxyUsersResource extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param Request $request
     * @return array<int|string, mixed>
     */
    public function toArray($request): array
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "update_date" => $this->update_date,
            "production_url" => $this->production_url,
            "testing_url" => $this->testing_url,
        ];
    }
}
