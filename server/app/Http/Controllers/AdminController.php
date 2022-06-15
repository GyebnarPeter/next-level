<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;


class AdminController extends Controller
{
    function create(Request $request)
    {
        $admin = new Admin();
        $admin->name = $request->input('name');
        $admin->email = $request->input('email');
        $admin->username = $request->input('username');
        $admin->password = Hash::make($request->input('password'));
        $admin->save();
        return $admin;
    }

    function delete($id)
    {
        $admin = Admin::find($id);

        if ($admin->delete()) {
            return "Sikeresen töröltem a(z) " . $admin->name;
        } else {
            return "Sikertelen törlés";
        }
    }

    function update(Request $request, $id)
    {
        $admin = Admin::find($id);
        $admin->update($request->all());

        return $admin;
    }

    function getAll()
    {
        $admins = Admin::all();

        foreach ($admins as $admin)
        {
            $array[] = [$admin];
        }
        return $array;
    }

    function get($id)
    {
        $admin = Admin::find($id);

        return $admin;
    }

}
