<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProxyUsersController;
use App\Http\Controllers\ProxyRequestsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Группа API
Route::group(["prefix" => "/v1"], function () {

    // Авторизация
    Route::post("/auth", [AuthController::class, "login"]);

    // Группа авторизованых запросов
    Route::group(["middleware" => "auth:api"], function() {

        // свойства пользователя
        Route::get("/user", [UserController::class, "profile"]);

        // Список прокси пользователей
        Route::get("/proxy/users", [ProxyUsersController::class, "list"]);

        // Добавить прокси пользователя
        Route::post("/proxy/users", [ProxyUsersController::class, "create"]);

        // Свойства прокси пользователя
        Route::get("/proxy/users/{id}", [ProxyUsersController::class, "select"]);

        // Изменить прокси пользователя
        Route::patch("/proxy/users/{id}", [ProxyUsersController::class, "update"]);

        // Список прокси запросов
        Route::get("/proxy/requests", [ProxyRequestsController::class, "list"]);

        // Свойства прокси запроса
        Route::get("/proxy/requests/{id}", [ProxyRequestsController::class, "select"]);
    });
});
