<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class BookingAdminMail extends Mailable
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
                ->subject('Foglalás érkezett')
                ->markdown('mail.admin-booking', [
                    'name' => $request->input('name'),
                    'person' => $request->input('person'),
                    'phone' => $request->input('phone'),
                    'email' => $request->input('email'),
                    'payment' => $request->input('payment'),
                    'bill' => $request->input('bill'),
                    'comment' => $request->input('comment'),
                    'img' => $request->input('img'),
                    'from_time' => $request->input('from'),
                    'game' => $request->input('game')
                ]);
    }
}
