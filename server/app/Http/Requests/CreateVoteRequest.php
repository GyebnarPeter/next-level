<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateVoteRequest extends FormRequest
{

    public function rules(): array
    {
        return [
            'name' => 'required',
            'subname' => 'required',
            'count' => 'required'
        ];
    }

    public function messages():array
    {
       return [
           'name.required' => 'Nincs meg a szoba neve',
           'subname.required' => 'Nincs meg a szoba alneve',
           'count.required' => 'Nem kaptam szavazatot'
       ];
    }
}