<?php

namespace Index\Http\Controllers;

use Index\Models\ProxyRequest;
use Index\Http\Controllers\Controller;
use Index\Http\Resources\ProxyRequestsListResource;
use Index\Http\Resources\ProxyRequestResource;
use Index\Http\Requests\ProxyRequestsFilterRequest;

use Illuminate\Http\JsonResponse;

/**
 * Class ProxyRequestsController
 * @package Index\Http\Controllers
 * @group Proxy Requests
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
     * @response status=404 scenario="Proxy request not found" {"error": 1, "message": "Proxy request not found"}
     * @return ProxyRequestResource|JsonResponse
     */
    public function select($id) {
        $proxy_request = ProxyRequest::find($id);
        if(empty($proxy_request)) {
            return response()->json(['error' => 1, "message" => "Proxy request not found"])->setStatusCode(404);
        }

        return new ProxyRequestResource($proxy_request);
    }
}
