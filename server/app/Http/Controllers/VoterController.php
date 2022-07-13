<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateVoterRequest;
use App\Models\Voter;
use Illuminate\Http\JsonResponse;

class VoterController extends Controller
{
    //
    function create(CreateVoterRequest $request): JsonResponse
    {
        $voter = Voter::create([
            'email' => $request->input('email')
        ]);

        if (!$voter) {
            return response()->json(['message' => 'Nem lett megadva email!']);
        }

        return response()->json($voter);
    }

    function delete(int $id): JsonResponse
    {
        $voter = Voter::find($id);

        if (!$voter) {
            return response()->json(['message' => 'Nem található ilyen email cím!'], 404);
        }

        Voter::destroy($id);

        return response()->json([], 204);

    }

    function get(int $id): JsonResponse
    {
        $voter = Voter::find($id);

        if (!$voter) {
            return response()->json(['message' => 'Nem található ilyen email cím!'], 404);
        }

        return response()->json($voter);
    }

    function getAll(): JsonResponse
    {
        $voters = Voter::all();

        if (!$voters) {
            return response()->json(['message' => 'Nincsenek szavazók!'], 404);
        }

        return response()->json($voters);
    }
}
