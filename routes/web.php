<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\FlightsController;
use App\Http\Controllers\BookingsController;
use App\Http\Controllers\PassengerController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/your-bookings', function () {
    return Inertia::render('YourBookings');
});


Route::get('/register', [RegisterController::class, 'index'])->middleware('guest');
Route::post('/register', [RegisterController::class, 'store'])->middleware('guest');

Route::get('/login', [LoginController::class, 'index'])->middleware('guest');
Route::post('/login', [LoginController::class, 'post'])->middleware('guest');
Route::get('/logout', [LoginController::class, 'logout'])->middleware('auth');

Route::get('/flights', [FlightsController::class, 'index']);
Route::get('/flights/{id}', [FlightsController::class, 'show']);
Route::get('/flights/{id}/book', [BookingController::class, 'create'])->name('booking.create');
Route::post('/flights/{id}/book', [BookingController::class, 'store']);
Route::get('/bookings/{booking_id}', [BookingController::class, 'show'])->name('bookings.show');
