<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVoteRequest;
use App\Models\Vote;
use App\Models\Voter;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class VoteController extends Controller
{
    //
    function create(CreateVoteRequest $request): JsonResponse
    {
        $vote = Vote::create([
            'name' => $request->input('name'),
            'subname' => $request->input('subname'),
            'count' => $request->input('count')
        ]);

        return response()->json($vote);
    }

    function delete(int $id): JsonResponse
    {
        $vote = Vote::find($id);

        if (!$vote) {
            return response()->json(['message' => 'Nincs ilyen elem!'], 404);
        }

        Vote::destroy($id);

        return response()->json([], 204);
    }

    function update(Request $request, int $id): JsonResponse
    {
        $email = $request->input('email');

        if (!$email) {
            return response()->json(['message' => 'Nincs megadva email!'], 404);
        }

        $result = DB::table('voters')->where('email', $email)->first();

        if (!$result) {
            $vote = Vote::find($id);
            $vote->increment('count');
            Voter::create([
                'email' => $email
            ]);
            return $this->getAll();
        } else {
            return response()->json(['voted', $this->getAll()->original]);
        }
    }

    function get(int $id): JsonResponse
    {
        $vote = Vote::find($id);

        if (!$vote) {
            return response()->json(['message' => 'Nem található ilyen elem!'], 404);
        }

        return response()->json($vote);
    }

    function getAll(): JsonResponse
    {
        $votes = Vote::all();

        if (!$votes) {
            return response()->json(['message' => 'Nem található elem!'], 404);
        }

        return response()->json($votes);
    }

}
