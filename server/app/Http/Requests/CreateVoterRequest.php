<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateVoterRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required'
        ];
    }

    public function messages():array
    {
        return [
            'email.required' => 'Nincs megadva email'
        ];
    }
}