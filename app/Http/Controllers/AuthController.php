<?php

namespace Index\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Index\Http\Requests\AuthRequest;

/**
 * Class AuthController
 * @package Index\Http\Controllers
 * @group Auth
 * Получение JWT токена для дальнейшей работы с API
 */
class AuthController extends Controller
{
    /**
     * @bodyParam name string required Имя пользователя Example: admin
     * @bodyParam password string required пароль
     * @response scenario=success {
     *  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC92MVwvYXV0aCIsImlhdCI6MTY4NzUxODM3OCwiZXhwIjoxNjg3NTIxOTc4LCJuYmYiOjE2ODc1MTgzNzgsImp0aSI6ImE1djByWTdwTGQ2aU1QVkgiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.HBxradYbt2jd-nNjdS9RJ_6YXXdYJAuN99DXQ3zApMw"
     * }
     * @response status=404 scenario="Invalid credentials" {"error": 1, "message": "Invalid credentials"}
     *
     * @param AuthRequest $request
     * @return array|jsonResponse
     */
    public function login(AuthRequest $request)
    {
        $data = $request->validated();

        if (! $token = auth("api")->attempt($data)) {
            return response()->json(['error' => 1, "message" => "Invalid credentials"])->setStatusCode(404);
        }

        return response()->json(["access_token" => $token])->setStatusCode(200);
    }
}
