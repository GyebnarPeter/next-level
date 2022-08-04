<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|unique:admins,email',
            'username' => 'required|unique:admins,username',
            'password' => 'required'
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'A felbhasznéló nevének kitöltése kötelező.',
            'email.required' => 'Email cím megadása kötelező.',
            'email.unique' => 'Ez az email cím már foglalt.',
            'username.required' => 'A felhasználónév megadása kötelező.',
            'username.unique' => 'Ez a felhasználónév már foglalt.',
            'password.required' => 'A jelszó kitöltése kötelező.'
        ];
    }
}