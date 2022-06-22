import React from 'react';
import "./bookingProcess.css";

function BookingProcess() {
  return (
    <div className="bookingProcess">
        <div className="bookingStep bookingStepActive">Időpont</div>
        <div className="bookingStep">Adatok</div>
        <div className="bookingStep">Kép-<span>feltöltés</span></div>
        <div className="bookingStep">Foglalás</div>
        <div className="bookingStep">Vissza-<span>igazolás</span></div>
    </div>
  )
}

export default BookingProcess