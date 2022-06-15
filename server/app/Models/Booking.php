<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'person',
        'phone',
        'email',
        'payment',
        'bill',
        'comment',
        'img',
        'from_date',
        'to_date',
        'game'
    ];
}
