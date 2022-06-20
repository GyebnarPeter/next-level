<?php

namespace App\Http\Controllers;

use App\Models\Vote;
use App\Models\Voter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
        $email = $request->input('email');
        $result = DB::table('voters')->where('email', $email)->first();
        if (!$result) {
            $vote = Vote::find($id);
            $vote->increment('count');
            $voter = new Voter();
            $voter->email = $email;
            $voter->save();
            return $this->getAll();
        } else {
            return ["voted", $this->getAll()];
        }
    }

    function get($id)
    {
        $vote = Vote::find($id);
        return $vote;
    }

    function getAll()
    {
        $votes = Vote::all();
        $array = array();

        foreach ($votes as $vote)
        {
             array_push($array, $vote);
        }
        return $array;
    }

}
