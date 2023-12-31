<?php

namespace App\Http\Controllers;

use App\Models\ProxyRequest;
use App\Http\Controllers\Controller;
use App\Http\Resources\ProxyRequestsListResource;
use App\Http\Resources\ProxyRequestResource;
use App\Http\Requests\ProxyRequestsFilterRequest;

use Illuminate\Http\JsonResponse;

/**
 * Class ProxyRequestsController
 * @package App\Http\Controllers
 * @group Proxy Requests
 * @authenticated
 */
class ProxyRequestsController extends Controller
{
    /**
     * Список прокси запросов
     *
     * @urlParam clientID integer запросы только от этого пользователя прокси
     * @urlParam msisdn integer запросы только от этого msisdn
     * @response scenario=success {
     * "data": [{
            "id": 1,
            "clientID": 1,
            "msisdn": 192649172738,
            "operationName": GetBalance,
            "requestCode": 0,
            "responseCode": 0,
            "requestTime": "2023-06-22 10:08:38",
            "responseTime": "2023-06-22 10:08:39"
        },
        {
            "id": 2,
            "clientID": 1,
            "msisdn": 192649172738,
            "operationName": AddSubscription,
            "requestCode": 0,
            "responseCode": 0,
            "requestTime": "2023-06-22 10:12:11",
            "responseTime": "2023-06-22 10:12:12"
        }]
     * }
     * @return mixed
     */
    public function list(ProxyRequestsFilterRequest $request) {
        $filter = $request->validated();

        if( empty($filter) ) {
            $proxy_requests = ProxyRequest::paginate(15);
        } else {
            $ProxyRequest = ProxyRequest::query();

            if( isset($filter["clientID"]) ) {
                $ProxyRequest->where("clientID", "=", $filter["clientID"]);
            }

            if( isset($filter["msisdn"]) ) {
                $ProxyRequest->where("msisdn", "=", $filter["msisdn"]);
            }

            $proxy_requests = $ProxyRequest->paginate(50);
        }

        return ProxyRequestsListResource::collection($proxy_requests);
    }

    /**
     * Свойства прокси запроса
     *
     * @urlParam id integer required ИД прокси запроса
     * @response scenario=success {
     *  "data":{
            "id": 2,
            "clientID": 1,
            "msisdn": 192649172738,
            "operationName": "AddSubscription",
            "requestCode": "0",
            "requestDesc": "Success",
            "responseCode": "0",
            "responseDesc": "Success",
            "requestTime": "2023-06-22 10:12:11",
            "responseTime": "2023-06-22 10:12:12",
            "transactionId": "f8b8d63a-9a72-31ff-9e3a-7901c9f3ad84"
        }
     * }
     * @response status=404 scenario="Прокси запрос не найден" {"error": 1, "message": "Прокси запрос не найден"}
     * @return ProxyRequestResource|JsonResponse
     */
    public function select($id) {
        $proxy_request = ProxyRequest::find($id);
        if(empty($proxy_request)) {
            return response()->json(['error' => 1, "message" => "Прокси запрос не найден"])->setStatusCode(404);
        }

        return new ProxyRequestResource($proxy_request);
    }
}
