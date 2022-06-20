<?php

namespace App\Mail;

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
    public function build()
    {
            return $this
                ->subject('Foglalás érkezett')
                ->markdown('mail.admin-mail', [
//            'name' => $request->input('name')
                    'name' => 'Kis János',
                    'email' => 'kisjani@freemail.hu',
                    'time' => '2022-03-12 13:00:00',
                    'person' => '3'
                ]);
    }
}
