<?php

namespace App\Http\Controllers;

use App\Mail\AdminMail;
use App\Mail\BookingAdminMail;
use App\Mail\BookingMail;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class EmailController extends Controller
{
    //

    public function mail(Request $request)
    {

        $email = $request->input('email');

        //Mail Function
        if (Mail::to($email)->send(new ContactMail()) && Mail::to('info@nextlevel.hu')->send(new AdminMail()))
        {
            return 'buci ár';
        }
        else
        {
            return 'lenyomat szín';
        }

    }

    public function book(Request $request)
    {
        $email = $request->input('email');

        if (Mail::to($email)->send(new BookingMail()) && Mail::to('info@nextlevel.hu')->send(new BookingAdminMail()))
        {
            return 'buci ár';
        }
        else
        {
            return 'lenyomat szín';
        }
    }
}
