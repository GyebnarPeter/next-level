<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateBookingRequest;
use App\Mail\BookingAdminMail;
use App\Mail\BookingMail;
use App\Models\Booking;
Use Illuminate\Support\Facades\File;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{

    function store(CreateBookingRequest $request): JsonResponse
    {
        $filename = $request->input('img');

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
            'img' => $filename,
            'from_date' => $request->input('fromDate'),
            'game' => $request->input('game')
        ]);

        File::move('temp_images/'.$filename, 'uploads/'.$filename);

        if (!File::exists('uploads/'.$filename)) {
            return response()->json(['message' => 'Sikertelen fájlfeltöltés!'], 404);
        }

        Mail::to($booking->email)->send(new BookingMail());
        Mail::to('info@nextlevel.hu')->send(new BookingAdminMail());

        if (Mail::flushMacros()) {
            return response()->json(['message' => 'Email küldés sikertelen!'], 404);
        }

        return response()->json($booking);
    }

    function delete(int $id): JsonResponse
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Nem található foglalás!'], 404);
        }

        Booking::destroy($id);

        return response()->json([], 204);
    }

    function update(Request $request, int $id): JsonResponse
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Nem található foglalás!'], 404);
        }

        $booking->update($request->all());

        return response()->json($booking);
    }

    function get(int $id): JsonResponse
    {
        $booking = Booking::find($id);

        if (!$booking) {
            return response()->json(['message' => 'Nem található foglalás!'], 404);
        }

        return response()->json($booking);
    }

    function getAll(): JsonResponse
    {
        $bookings = Booking::all();

        if (!$bookings) {
            return response()->json(['message' => 'Nem található egy foglalás sem!'], 404);
        }

        return response()->json($bookings);
    }

    function getDates($date): JsonResponse
    {
        $bookings = Booking::whereDate('from_date', "$date")->get();

        $allDates = array();

        foreach ($bookings as $booking)
        {
            $bookingTime = date('H:i', strtotime($booking['from_date']));
            array_push($allDates, $bookingTime);
        }

        return response()->json($allDates);
    }

}

