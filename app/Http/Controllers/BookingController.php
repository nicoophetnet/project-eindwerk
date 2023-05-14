<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Flight;
use App\Models\Booking;
use App\Models\Passenger;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookingController extends Controller
{
    public function index()
    {
        $bookings = Booking::where('user_id', Auth::id())
            ->with('flight', 'passengers')
            ->orderByDesc('created_at')
            ->get();

        return Inertia::render('Bookings/IndexBooking', [
            'bookings' => $bookings,
        ]);
    }

    public function store(Request $request)
    {
        // dd($request->all());

        // Validate the request data
        $validatedData = $request->validate([
            'flight_id' => 'required',
            'user_id' => 'required',
            'passengers' => 'required|array|min:1',
            'passengers.*.firstname' => 'required|string|min:2|max:255|regex:/^[a-zA-Z\s]+$/i',
            'passengers.*.lastname' => 'required|string|min:2|max:255',
            'passengers.*.phonenumber' => 'required|regex:/^\+?[0-9]{7,15}$/',
            'passengers.*.email' => 'required|email',
        ], [
            'passengers.*.firstname.required' => 'A first name is required.',
            'passengers.*.lastname.required' => 'A last name is required.',
            'passengers.*.phonenumber.required' => 'A phone number is required.',
            'passengers.*.email.required' => 'An email address is required.',
            'passengers.*.firstname.regex' => 'The first name field can only contain letters and spaces.',
            'passengers.*.phonenumber.regex' => 'The phone number field must contain between 7 and 15 digits, with an optional + sign at the beginning.',
            'passengers.*.email.email' => 'The email address must be a valid email format.',
        ]);

        // dd($validatedData);

        // Create a new Booking instance and save it to the database
        $booking = new Booking();
        $booking->flight_id = $validatedData['flight_id'];
        $booking->user_id = $validatedData['user_id'];
        $booking->save();


        // Retrieve the ID of the newly created booking
        $booking_id = $booking->id;

        $passengers = $validatedData['passengers'];

        // Create a new Passenger instance for each passenger in the request data and associate it with the booking
        foreach ($passengers as $passengerData) {
            $passenger = new Passenger();
            $passenger->booking_id = $booking_id;
            // $passenger->title = $passengerData['title'];
            $passenger->title = "Mr.";
            $passenger->first_name = $passengerData['firstname'];
            $passenger->last_name = $passengerData['lastname'];
            $passenger->phone_number = $passengerData['phonenumber'];
            $passenger->email = $passengerData['email'];
            // $passenger->luggage = isset($passengerData['luggage']) ? $passengerData['luggage'] : false;
            $passenger->luggage = false;
            $passenger->save();
        }

        // Redirect the user to their bookings page
        return redirect()->route('bookings.show', ['user_id' => auth()->user()->id, 'booking_id' => $booking_id])->withErrors($validatedData);
    }


    public function create($flight_id)
    {
        $flight = Flight::findOrFail($flight_id);

        return Inertia::render('Bookings/CreateBooking', [
            'flight' => $flight,
        ]);
    }


    public function show($booking_id)
    {
        $booking = Booking::where('user_id', Auth::id())
            ->with('flight', 'passengers')
            ->findOrFail($booking_id);

        $flight = $booking->flight;

        $passengers = $booking->passengers;

        return Inertia::render('Bookings/ShowBooking', [
            'booking' => $booking,
            'flight' => $flight,
            'passengers' => $passengers,
        ]);
    }

    public function destroy($booking_id)
    {
        $booking = Booking::where('user_id', Auth::id())->findOrFail($booking_id);
        $booking->delete();

        return redirect()->route('bookings.index');
    }
}
