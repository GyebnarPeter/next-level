<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBookingRequest;
use App\Mail\BookingAdminMail;
use App\Mail\BookingMail;
use App\Models\Booking;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    //
    function store(CreateBookingRequest $request): JsonResponse
    {

        $booking = Booking::create([
            'name' => $request->input('name'),
            'person' => $request->input('person'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
            'payment' => $request->input('payment'),
            'bill' => $request->input('bill'),
            'comment' => $request->input('comment'),
            'img' => $request->input('img'),
            'from_date' => $request->input('from_date'),
            'to_date' => $request->input('to_date'),
            'game' => $request->input('game')
        ]);

        if (Mail::to($booking->email)->send(new BookingMail()) && Mail::to('info@nextlevel.hu')->send(new BookingAdminMail())) {
            return response()->json($booking);
        }

        return response()->json($booking);
    }

    function delete($id)
    {
        $booking = Booking::find($id);

        if ($booking->delete())
        {
            return "Sikeresen törölve: " . $booking;
        }
        else
        {
            return "Sikertelen törlés";
        }
    }

    function update(Request $request, $id)
    {
        $booking = Booking::find($id);
        $booking->update($request->all());

        return $booking;
    }

    function get($id)
    {
        $booking = Booking::find($id);

        return $booking;
    }

    function getAll()
    {
        $bookings = Booking::all();

        foreach ($bookings as $booking)
        {
            $array[] = [$booking];
        }

        return $array;
    }


}

