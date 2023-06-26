<?php

namespace Index\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

use Index\Http\Resources\ProxyUsersResource;

/**
 * Class UserController
 * @package Index\Http\Controllers
 * @group Profile
 * @authenticated
 */
class UserController extends Controller
{
    /**
     * Свойства пользователя
     *
     * @response scenario=success {
     *  "data":{"id":1,"name":"admin","email":"admin@local.dev","email_verified_at":null}
     * }
     * @response status=404 scenario="User not found" {"error": 1, "message": "User not found"}
     * @return ProxyUsersResource|JsonResponse
     */
    public function profile(Request $request)
    {
        $user = Auth::user();
        if( empty($user) ) {
            return response()->json(['error' => 1, "message" => "User not found"])->setStatusCode(404);
        }

        return new ProxyUsersResource($user);
    }
}
