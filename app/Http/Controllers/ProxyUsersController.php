<?php

namespace App\Http\Controllers;

use App\Models\ProxyClient;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreateProxyUserRequest;
use App\Http\Requests\UpdateProxyUserRequest;
use App\Http\Resources\ProxyUsersResource;

use Illuminate\Http\JsonResponse;

/**
 * Class Users
 * @package App\Http\Controllers\Proxy
 * @group Proxy Users
 * @authenticated
 */
class ProxyUsersController extends Controller
{
    /**
     * Список пользователей прокси
     *
     * @response scenario=success {
     * "data": [{
     *      "id": 1,
     *      "name": "admin",
     *      "update_date": "2023-12-31",
     *      "production_url": "https://devel.local/callback/production",
     *      "testing_url": "https://devel.local/callback/testing"
     *  },{
     *      "id": 2,
     *      "name": "support",
     *      "update_date": "2024-06-31",
     *      "production_url": "https://support.local/callback/production",
     *      "testing_url": "https://support.local/callback/testing"
     *  }]
     * }
     * @return mixed
     */
    public function list() {
        $proxy_users = ProxyClient::all();

        return ProxyUsersResource::collection($proxy_users);
    }

    /**
     * Свойства пользователя прокси
     *
     * @urlParam id integer required ИД пользователя прокси
     * @response scenario=success {
     *  "data":{
     *      "id": 1,
     *      "name": "admin",
     *      "update_date": "2023-12-31",
     *      "production_url": "https://devel.local/callback/production",
     *      "testing_url": "https://devel.local/callback/testing"
     *  }
     * }
     * @response status=404 scenario="Прокси юзер не найден" {"error": 1, "message": "Пользователь не найден"}
     */
    public function select($id) {
        $proxy_user = ProxyClient::find($id);
        if(empty($proxy_user)) {
            return response()->json(['error' => 1, "message" => "Пользователь не найден"])->setStatusCode(404);
        }

        return new ProxyUsersResource($proxy_user);
    }

    /**
     * Создать прокси пользователя
     *
     * @bodyParam id int required ИД прокси пользователя из ACR системы
     * @bodyParam name string required Имя клиента
     * @bodyParam update_date string required дата обновлений из ACR системы Example: 2023-12-31
     * @bodyParam production_url string required URL callback для production
     * @bodyParam testing_url string URL callback для тестирования
     * @response scenario=success {
     *  "data":{
     *      "id": 3,
     *      "name": "customer",
     *      "update_date": "2023-12-31",
     *      "production_url": "https://customer.local/callback/production",
     *      "testing_url": ""
     *  }
     * }
     * @response status=403 scenario="Такой id уже существует" {"error": 1, "message": "Пользователь с таким ID уже существует"}
     *
     * @param CreateProxyUserRequest $request
     * @return ProxyUsersResource|jsonResponse
     */
    public function create(CreateProxyUserRequest $request) {
        $data = $request->validated();

        $proxy_user = ProxyClient::find($data["id"]);
        if( !empty($proxy_user) ) {
            return response()->json(['error' => 1, "message" => "Пользователь с таким ID уже существует"])->setStatusCode(403);
        }

        $proxy_user = ProxyClient::create($data);

        return new ProxyUsersResource($proxy_user);
    }

    /**
     * Изменить прокси пользователя
     *
     * @bodyParam name string Имя клиента
     * @bodyParam update_date string дата обновлений из ACR системы
     * @bodyParam production_url string URL callback для production
     * @bodyParam testing_url string URL callback для тестирования
     * @response scenario=success {
     *  "data":{
     *      "id": 3,
     *      "name": "customer",
     *      "update_date": "2023-12-31",
     *      "production_url": "https://customer.local/callback/production",
     *      "testing_url": ""
     *  }
     * }
     * @response status=404 scenario="Прокси юзер не найден" {"error": 1, "message": "Пользователь не найден"}
     * @response status=403 scenario="Такой id уже существует" {"error": 2, "Пользователь с таким ID уже существует"}
     *
     * @param int $id
     * @param CreateProxyUserRequest $request
     * @return ProxyUsersResource|jsonResponse
     */
    public function update($id, UpdateProxyUserRequest $request) {
        $data = $request->validated();

        if( isset($data["id"]) && $data["id"] != $id ) {
            // проверка что запрашиваемый ID свободный
            $proxy_user = ProxyClient::find($data["id"]);
            if( !empty($proxy_user) ) {
                return response()->json(['error' => 2, "message" => "Пользователь с таким ID уже существует"])->setStatusCode(403);
            }
        }

        $proxy_user = ProxyClient::find($id);
        if( empty($proxy_user) ) {
            return response()->json(['error' => 1, "message" => "Пользователь не найден"])->setStatusCode(404);
        }

        $proxy_user->fill($data)->save();

        return new ProxyUsersResource($proxy_user);
    }
}
