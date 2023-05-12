<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Passenger extends Model
{
    use HasFactory;
    protected $table = 'passengers';
    protected $fillable = ['booking_id', 'title', 'first_name', 'last_name', 'phone_number', 'email', 'luggage'];
}