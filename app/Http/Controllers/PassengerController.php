<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Passenger;
use Illuminate\Http\Request;

class PassengerController extends Controller
{
    public function index()
    {
        return Inertia::render('Bookings/NewBooking');
    }

    public function store(Request $request)
    {
        $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'phonenumber' => 'required',
            'email' => 'required|email',
        ]);

        $passenger = new Passenger();
        $passenger->booking_id = $request->booking_id;
        $passenger->title = $request->title;
        $passenger->first_name = $request->firstname;
        $passenger->last_name = $request->lastname;
        $passenger->phone_number = $request->phonenumber;
        $passenger->email = $request->email;
        $passenger->luggage = $request->luggage;
        $passenger->save();

        return redirect('/your-bookings');
    }
}