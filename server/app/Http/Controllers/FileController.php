<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateFileRequest;
use App\Models\File;
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
           $image->move('uploads/', $filename);

           $fullPath = 'uploads/' . $filename;
           return $fullPath;
        }
        else
        {
            return 'No file';
        }

    }
}
