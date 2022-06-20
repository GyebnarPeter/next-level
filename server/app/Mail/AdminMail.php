<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminMail extends Mailable
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
            ->subject('Kérdés érkezett!')
            ->markdown('mail.admin-mail', [
//            'name' => $request->input('name')
                'name' => 'Kis János',
                'email' => 'kisjani@freemail.hu',
                'body' => 'Sziasztok, hány embernek ajánlott a szoba?'
            ]);
    }
}
