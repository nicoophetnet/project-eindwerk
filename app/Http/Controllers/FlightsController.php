<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;

class FlightsController extends Controller
{
    public function index()
    {
        $flights = Flight::all();
        return response()->json($flights);
    }

    public function show($id)
    {
        $flight = Flight::find($id);
        if (!empty($flight)) {
            return response()->json($flight);
        } else {
            return response()->json([
                "message" => "Flight not found."
            ], 404);
        }
    }
}