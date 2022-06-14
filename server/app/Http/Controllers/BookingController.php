<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;
use function GuzzleHttp\Promise\all;

class BookingController extends Controller
{
    //
    function create(Request $request)
    {
        $booking = new Booking();

        $booking->name = $request->input('name');
        $booking->person = $request->input('person');
        $booking->phone = $request->input('phone');
        $booking->email = $request->input('email');
        $booking->payment = $request->input('payment');
        $booking->bill = $request->input('bill');
        $booking->comment = $request->input('comment');
        $booking->img = $request->input('img');
        $booking->from_date = $request->input('from');
        $booking->to_date = $request->input('to');
        $booking->game = $request->input('game');

        $booking->save();

        return $booking;
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

