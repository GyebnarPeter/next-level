<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateContactRequest extends FormRequest
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
            'email' => 'required',
            'message' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Kötelező a név mező kitöltése!',
            'email.required' => 'Kötelező az email mező kitöltése!',
            'message.rewuired' => 'Kötelező az üzenet mező kitöltése!'
        ];
    }
}
