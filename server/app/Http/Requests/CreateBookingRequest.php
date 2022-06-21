<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateBookingRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */

    public function rules(): array
    {
        return [
            'name' => 'required',
            'person' => 'required',
            'phone' => 'required',
            'email' => 'required',
            'payment' => 'required',
            'bill' => '',
            'comment' => '',
            'img' => 'required',
            'from_date' => 'required',
            'to_date' => '',
            'game' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'A név kitöltése kötelező.',
            'person.required' => 'A létszám kitöltése kötelező.',
            'phone.required' => 'Kötelező megadni telefonszámot.',
            'email.required' => 'Kötelező email címet megadni.',
            'payment.required' => 'Fizetési mód kiválasztása kötelező.',
            'img.required' => 'Kötelező feltölteni képet.',
            'from_date.required' => 'Kötelező időpontot választani',
            'game.required' => 'Kötelező kiválasztani a játékot'
        ];
    }
}
