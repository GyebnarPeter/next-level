<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\VoteController;
use App\Http\Controllers\VoterController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//admin
Route::post('/admins', [AdminController::class, 'create']);
Route::delete('/admins/{id}', [AdminController::class, 'delete']);
Route::get('/admins', [AdminController::class, 'getAll']);
Route::get('/admins/{id}', [AdminController::class, 'get']);
Route::patch('/admins/{id}', [AdminController::class, 'update']);

//votes
Route::post('/votes', [VoteController::class, 'create']);
Route::delete('/votes/{id}', [VoteController::class, 'delete']);
Route::get('/votes', [VoteController::class, 'getAll']);
Route::get('/votes/{id}', [VoteController::class, 'get']);
Route::patch('/votes/{id}', [VoteController::class, 'update']);

//voters
Route::post('/voters', [VoterController::class, 'create']);
Route::delete('/voters/{id}', [VoterController::class, 'delete']);
Route::get('/voters', [VoterController::class, 'getAll']);
Route::get('/voters/{id}', [VoterController::class, 'get']);

//bookings
Route::post('/bookings', [BookingController::class, 'store']);
Route::post('/add-temp', [FileController::class, 'store']);
Route::delete('/bookings/{id}', [BookingController::class, 'delete']);
Route::get('/bookings', [BookingController::class, 'getAll']);
Route::get('/bookings/{id}', [BookingController::class, 'get']);
Route::patch('/bookings/{id}', [BookingController::class, 'update']);
Route::get('/dates/{date}', [BookingController::class, 'getDates']);

//email
Route::post('/contact-form', [EmailController::class, 'mail']);
