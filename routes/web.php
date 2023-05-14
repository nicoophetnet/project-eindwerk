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

Route::get('/register', [RegisterController::class, 'index'])->middleware('guest');
Route::post('/register', [RegisterController::class, 'store'])->middleware('guest');

Route::get('/login', [LoginController::class, 'index'])->middleware('guest');
Route::post('/login', [LoginController::class, 'post'])->middleware('guest');
Route::get('/logout', [LoginController::class, 'logout'])->middleware('auth');

Route::get('/flights', [FlightsController::class, 'index']);
Route::get('/flights/{id}', [FlightsController::class, 'show']);
Route::get('/flights/{id}/book', [BookingController::class, 'create'])->name('booking.create')->middleware('auth');
Route::post('/flights/{id}/book', [BookingController::class, 'store']);

Route::get('/users/{user_id}/bookings/{booking_id}', [BookingController::class, 'show'])
    ->name('bookings.show')
    ->middleware('auth');
Route::get('/your-bookings', [BookingController::class, 'index'])->name('bookings.index')->middleware(['auth']);

Route::delete('/users/{user_id}/bookings/{id}', 'BookingController@destroy')->name('bookings.destroy')->middleware('auth');
