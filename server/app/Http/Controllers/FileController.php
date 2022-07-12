<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    //

    function store(Request $request)
    {

        if($request->has('img'))
        {
           $image = $request->file('img');
           $filename = $image->getClientOriginalName();
           $image->move('temp_images/', $filename);

           return $filename;
        }
        else
        {
            return 'No file';
        }

    }
}
