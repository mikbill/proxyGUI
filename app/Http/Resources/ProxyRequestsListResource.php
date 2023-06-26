<?php

namespace Index\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

/**
 * Class ProxyRequestsResource
 * @package Index\Http\Response\Auth
 */
class ProxyRequestsListResource extends JsonResource
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
            "clientID" => $this->clientID,
            "msisdn" => $this->msisdn,
            "operationName" => $this->operationName,
            "requestCode" => $this->lifecellCode,
            "responseCode" => $this->clientCode,
            "requestTime" => $this->created_at,
            "responseTime" => $this->updated_at,
        ];
    }
}
