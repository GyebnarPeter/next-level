<?php

namespace App\Http\Controllers;

use http\Env\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FileController extends Controller
{
    //

    function store(Request $request): JsonResponse
    {

        if($request->has('img'))
        {
           $image = $request->file('img');
           $filename = $image->getClientOriginalName();
           $image->move('temp_images/', $filename);

           return response()->json($filename);
        }
        else
        {
            return response()->json(['message' => 'no file'], 404);
        }

    }
}
