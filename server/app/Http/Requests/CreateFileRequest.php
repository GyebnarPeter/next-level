<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateFileRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'path' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'path.required' => 'Kötelező a név mező kitöltése!'
        ];
    }

}