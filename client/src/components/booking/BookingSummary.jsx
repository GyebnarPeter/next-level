import React from 'react';
import "./bookingSummary.css";

function BookingSummary({bookingData}) {
  return (
    <div className="bookingSummary">
        <div className="bookingItems">
            <div className="bookingItem">
              <span>Név:</span>
              <span>{bookingData.name}</span>
            </div>
        </div>
        <div className="bookingItems"></div>
    </div>
  )
}

export default BookingSummary