<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateContactRequest;
use App\Mail\AdminMail;
use App\Mail\BookingAdminMail;
use App\Mail\BookingMail;
use App\Mail\ContactMail;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    //

    public function mail(CreateContactRequest $request): JsonResponse
    {

        $email = $request->input('email');

        //Mail Function
        if (Mail::to($email)->send(new ContactMail()) && Mail::to('info@nextlevel.hu')->send(new AdminMail()))
        {
            return response()->json("buci ár");
        }
        else
        {
            return response()->json();
        }

    }
}
