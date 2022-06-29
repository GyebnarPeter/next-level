<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateFileRequest;
use Illuminate\Http\Request;
use phpDocumentor\Reflection\File;

class FileController extends Controller
{
    //

    function store(CreateFileRequest $request)
    {
        $file = File::create([
            'path' => $request->file('img')
        ]);

        $file->store('/temp_uploads', ['disk' => 'public_uploads']);

        $fullPath = '/temp_uploads/' . $file;

        return $fullPath;
    }
}
