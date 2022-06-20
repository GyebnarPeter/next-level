<?php

use Illuminate\Http\Request;
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

    Route::get('/contact-form', function (Request $request){
        $email = $request->input('email');
        $name = $request->input('name');
        Illuminate\Support\Facades\Mail::to($email)
            ->send(new \App\Mail\ContactMail());
        Illuminate\Support\Facades\Mail::to('nextlevel@nextlevel.hu')
            ->send(new \App\Mail\AdminMail());
        return redirect('http://localhost:3000');
    });

    Route::get('/book', function () {
        $email = 'kisjanos@freemail.hu';
        Illuminate\Support\Facades\Mail::to($email)
            ->send(new \App\Mail\ContactMail());
        Illuminate\Support\Facades\Mail::to('nextlevel@nextlevel.hu')
            ->send(new \App\Mail\AdminMail());
        return redirect('http://localhost:3000');
    });
}

