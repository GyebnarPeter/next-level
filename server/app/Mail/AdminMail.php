<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Http\Request;
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

    public function build(Request $request)
    {
        return $this
            ->subject('Új üzenete érkezett!')
            ->markdown('mail.admin-mail', [
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'message' => $request->input('message')
            ]);
    }
}
