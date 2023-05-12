<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    use HasFactory;
    protected $table = 'flights';
    protected $fillable = ['departure_location', 'arrival_location', 'airline', 'date', 'departure_hour', 'arrival_hour', 'duration', 'seats'];

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}