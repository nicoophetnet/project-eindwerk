<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Flight;
use App\Models\Booking;
use App\Models\Passenger;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    public function index()
    {
        return Inertia::render('Booking');
    }

    public function store(Request $request)
    {
        dd($request->all());

        // Validate the request data
        $validatedData = $request->validate([
            'flight_id' => 'required',
            'user_id' => 'required',
            'passengers' => 'required|array|min:1',
            'passengers.*.title' => 'required',
            'passengers.*.firstname' => 'required',
            'passengers.*.lastname' => 'required',
            'passengers.*.phonenumber' => 'required',
            'passengers.*.email' => 'required|email',
            'passengers.*.luggage' => 'boolean',
        ]);

        // Create a new Booking instance and save it to the database
        $booking = new Booking();
        $booking->flight_id = $validatedData['flight_id'];
        $booking->user_id = $validatedData['user_id'];
        $booking->price = 100;
        $booking->save();

        // Retrieve the ID of the newly created booking
        $booking_id = $booking->id;

        $passengers = $validatedData['passengers'];

        // Create a new Passenger instance for each passenger in the request data and associate it with the booking
        foreach ($passengers as $passengerData) {
            $passenger = new Passenger();
            $passenger->booking_id = $booking_id;
            $passenger->title = $passengerData['title'];
            $passenger->first_name = $passengerData['firstname'];
            $passenger->last_name = $passengerData['lastname'];
            $passenger->phone_number = $passengerData['phonenumber'];
            $passenger->email = $passengerData['email'];
            $passenger->luggage = isset($passengerData['luggage']) ? $passengerData['luggage'] : false;
            $passenger->save();
        }

        // Redirect the user to their bookings page
        return redirect('/your-bookings');
    }


    public function create($flight_id)
    {
        $flight = Flight::findOrFail($flight_id);

        return Inertia::render('Bookings/CreateBooking', [
            'flight' => $flight,
        ]);
    }


    public function show()
    {
    }
}