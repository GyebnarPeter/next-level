<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\VoteController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//admin
Route::post('/create-admin', [AdminController::class, 'create']);
Route::delete('/delete-admin/{id}', [AdminController::class, 'delete']);
Route::get('/get-all-admins', [AdminController::class, 'getAll']);
Route::get('/get-admin/{id}', [AdminController::class, 'get']);

//votes
Route::post('/add-vote', [VoteController::class, 'create']);
Route::delete('/delete-vote/{id}', [VoteController::class, 'delete']);
Route::get('/get-all-votes', [VoteController::class, 'getAll']);
Route::get('/get-vote/{id}', [VoteController::class, 'get']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
