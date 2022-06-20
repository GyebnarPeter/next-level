<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

if (\Illuminate\Support\Facades\App::environment('local')) {
    Route::get('/playground', function (){
        $email = 'kisjanos@freemail.hu';
        Illuminate\Support\Facades\Mail::to($email)
            ->send(new \App\Mail\ContactMail());
        Illuminate\Support\Facades\Mail::to('nextlevel@nextlevel.hu')
            ->send(new \App\Mail\AdminMail());
        return null;
    });
}

