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
        'bill_name',
        'bill_email',
        'bill_phone',
        'bill_address',
        'comment',
        'img',
        'from_date',
        'game'
    ];
}
