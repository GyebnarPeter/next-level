import React from "react";
import "./bookingConfirmation.css";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";

function BookingConfirmation() {
    return (
        <main className="bookingConfirmation">
            <div className="bookingConfirmationText">
                <div className="checkIcon">
                    <FaCheck className="checkIcon" />
                </div>
                <h3>Foglalásod rögzítettük!</h3>
                <p>Amennyiben nem kaptál visszaigazoló emailt,<br/>kérjük fedd fel velünk a kapcsolatot!</p>
                <div className="bookingConfirmationHighlight"></div>
                <p>Időpont lemondás és módosítás a foglalt időpont előtt legkésőbb <i>24 órával</i> történhet.</p>
                <p>Kérjük, érkezzetek 5 perccel a foglalt időpont előtt!</p>
            </div>
        </main>
    )
}

export default BookingConfirmation