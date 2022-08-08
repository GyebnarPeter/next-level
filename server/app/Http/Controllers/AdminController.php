<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use App\Models\Admin;


class AdminController extends Controller
{
    function create(RegisterRequest $request): JsonResponse
    {
        $admin = Admin::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'username' => $request->input('username'),
            'password' => Hash::make($request->input('password'))
        ]);

        $token = $admin->createToken('register-nextlevel-token')->plainTextToken;

        $response = [
            'admin' => $admin,
            'token' => $token
        ];

        return response()->json($response, 201);
    }

    function delete(int $id): JsonResponse
    {
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json(['message' => 'Admin nem található.'], 404);
        }

        Admin::destroy($id);

        return response()->json([], 204);
    }

    //NOT ABLE TO CHANGE PASSWORD
    function update(Request $request, int $id): JsonResponse
    {
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json(['message' => 'Admin nem található.'], 404);
        }

        $admin->update($request->all());
        return response()->json($admin);
    }

    function getAll(): JsonResponse
    {
        $admins = Admin::all();

        if (!$admins) {
            return response()->json(['message' => 'Nem található egy admin sem!'], 404);
        }

        return response()->json($admins);
    }

    function get($id): JsonResponse
    {
        $admin = Admin::find($id);

        if (!$admin) {
            return response()->json(['message' => 'Nem található ilyen admin!'], 404);
        }

        return response()->json($admin);
    }

    function login(LoginRequest $request) :JsonResponse
    {
        $admin = Admin::where('username', $request->input('username'))->first();

        if (!$admin || !Hash::check($request->input('password'), $admin->password)) {
            return response()->json([
                'message' => 'Hibás felhasználónév / jelszó.'
            ], 401);
        }

        $token = $admin->createToken('nextlevel-app-token', [$admin->role])->plainTextToken;

        $response = [
          'admin' => $admin,
          'token' => $token
        ];

        return response()->json($response, 202);
    }

    function logout(): Response
    {
        auth()->user()->tokens()->delete();

        return response()->noContent();
    }

}
