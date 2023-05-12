<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table = 'bookings';
    protected $fillable = ['flight_id', 'user_id', 'price'];

    public function passengers()
    {
        return $this->hasMany(Passenger::class);
    }
}