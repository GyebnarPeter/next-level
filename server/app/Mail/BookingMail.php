<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BookingMail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build(Request $request)
    {
        return $this
            ->subject('Foglalásod rögzítettük!')
            ->markdown('mail.booking', [
                'name' => $request->input('name'),
                'person' => $request->input('person'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
                'payment' => $request->input('payment'),
                'bill' => $request->input('bill'),
                'comment' => $request->input('comment'),
                'img' => $request->input('img'),
                'from_time' => $request->input('from_date'),
                'game' => $request->input('game')
            ]);
    }
}
