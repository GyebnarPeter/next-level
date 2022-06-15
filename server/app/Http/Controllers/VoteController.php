<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use App\Models\Voter;
use Illuminate\Http\Request;

class VoteController extends Controller
{
    //
    function create(Request $request) {

        $vote = new Vote();
        $vote->name = $request->input('name');
        $vote->subname = $request->input('subname');
        $vote->count = $request->input('count');
        $vote->save();

        return $vote;
    }

    function delete($id) {
        $vote = Vote::find($id);
        if ($vote->delete()) {
            return "Sikeresen kitöröltem: " . $id;
        } else {
            return "Sikertelen törlés: " . $id;
        }
    }

    function update(Request $request, $id)
    {
        $vote = Vote::find($id);
        $vote->increment('count');
        {
            $voter = new Voter();

            $voter->email = $request->input('email');
            $voter->save();
        }

        return "Szavazat sikeresen mentve!";
    }

    function get($id)
    {
        $vote = Vote::find($id);

        return $vote;
    }

    function getAll()
    {
        $votes = Vote::all();

        foreach ($votes as $vote)
        {
            $array[] = [$vote];
        }

        return $array;
    }

}
