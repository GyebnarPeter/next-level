<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BookingController;
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
Route::post('/create-admin', [AdminController::class, 'create']);
Route::delete('/delete-admin/{id}', [AdminController::class, 'delete']);
Route::get('/get-all-admins', [AdminController::class, 'getAll']);
Route::get('/get-admin/{id}', [AdminController::class, 'get']);
Route::put('/update-admin/{id}', [AdminController::class, 'update']);

//votes
Route::post('/add-vote', [VoteController::class, 'create']);
Route::delete('/delete-vote/{id}', [VoteController::class, 'delete']);
Route::get('/get-all-votes', [VoteController::class, 'getAll']);
Route::get('/get-vote/{id}', [VoteController::class, 'get']);
Route::put('/update-vote/{id}', [VoteController::class, 'update']);

//voters
Route::post('/add-voter', [VoterController::class, 'create']);
Route::delete('/delete-voter/{id}', [VoterController::class, 'delete']);
Route::get('/get-all-voters', [VoterController::class, 'getAll']);
Route::get('/get-voter/{id}', [VoterController::class, 'get']);

//bookings
Route::post('/add-booking', [BookingController::class, 'create']);
Route::delete('/delete-booking/{id}', [BookingController::class, 'delete']);
Route::get('/get-all-bookings', [BookingController::class, 'getAll']);
Route::get('/get-booking/{id}', [BookingController::class, 'get']);
Route::put('/update-booking/{id}', [BookingController::class, 'update']);

//increase vote and insert email
//Route::group()
