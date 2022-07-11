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
            'bill' => 'required',
            'billName' => '',
            'billAddress' => '',
            'billEmail' => '',
            'billPhone' => '',
            'comment' => '',
            'img' => 'required',
            'from_date' => '',
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
            'bill.required' => 'Kötelező választani billt',
            'img.required' => 'Kötelező feltölteni képet.',
//            'from_date.required' => 'Kötelező időpontot választani',
            'game.required' => 'Kötelező kiválasztani a játékot'
        ];
    }
}
