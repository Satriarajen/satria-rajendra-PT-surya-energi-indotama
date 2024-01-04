<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::select('userid', 'username', 'name', 'email')->get();
        return response()->json($users);
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        $user = User::where('username', $validated['username'])->first();

        if ($user && Hash::check($validated['password'], $user->password)) {
            return response()->json([
                'username' => $user->username,
                'name' => $user->name,
                'email' => $user->email,
            ]);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string|unique:users',
            'password' => 'required|string',
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
        ]);

        $user = User::create([
            'username' => $validated['username'],
            'password' => bcrypt($validated['password']),
            'name' => $validated['name'],
            'email' => $validated['email'],
        ]);

        return response()->json(['userid' => $user->userid], 201);
    }

}
