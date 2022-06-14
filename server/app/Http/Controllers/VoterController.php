<?php

namespace App\Http\Controllers;

use App\Models\Voter;
use Illuminate\Http\Request;

class VoterController extends Controller
{
    //
    function create(Request $request)
    {
        $voter = new Voter();

        $voter->email = $request->input('email');
        $voter->save();

        return $voter;
    }

    function delete($id)
    {
        $voter = Voter::find($id);
        $voter->delete();

        return "Sikeresen törölve: " . $voter->email;
    }

    function get($id)
    {
        $voter = Voter::find($id);

        return $voter->email;
    }

    function getAll()
    {
        $voters = Voter::all();

        foreach ($voters as $voter)
        {
            $array[] = [$voter];
        }

        if (!empty($array))
        {
            return $array;
        }
        else
        {
            return "Nem található szavazó...";
        }
    }
}
