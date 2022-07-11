<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBookingRequest;
use App\Mail\BookingAdminMail;
use App\Mail\BookingMail;
use App\Models\Booking;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Nette\Utils\DateTime;

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
            'bill' => $request->input('bill'),
            'bill_address' => $request->input('billAddress'),
            'bill_name' => $request->input('billName'),
            'bill_phone' => $request->input('billPhone'),
            'bill_email' => $request->input('billEmail'),
            'comment' => $request->input('comment'),
            'img' => $request->input('img'),
            'from_date' => '2022-08-08 12:00:00',
            'game' => $request->input('game')
        ]);

        if (Mail::to($booking->email)->send(new BookingMail()) && Mail::to('info@nextlevel.hu')->send(new BookingAdminMail())) {
            return response()->json($booking);
        }
        return response()->json('ok');
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

        $array = array();

        foreach ($bookings as $booking)
        {
            array_push($array, $booking);
        }

        return $array;
    }

    function getDates($date)
    {
        $bookings = Booking::whereDate('from_date', "$date")->get();

        $array = array();

        foreach ($bookings as $booking)
        {
            $bookingTime = date('H:i', strtotime($booking['from_date']));
            array_push($array, $bookingTime);
        }

        return $array;
    }


}

