import React from "react";
import "./bookingProcess.css";

function BookingProcess(props) {
    return (
        <div className="bookingProcess">
            <div
                className={
                    props.bookingPage === "calendar"
                        ? "bookingStep bookingStepActive"
                        : "bookingStep"
                }
            >
                Időpont
            </div>
            <div
                className={
                    props.bookingPage === "booking_details"
                        ? "bookingStep bookingStepActive"
                        : "bookingStep"
                }
            >
                Adatok
            </div>
            {props.name === "A hasonmás" && (
                <div
                    className={
                        props.bookingPage === "image-uploader"
                            ? "bookingStep bookingStepActive"
                            : "bookingStep"
                    }
                >
                    Kép-<span>feltöltés</span>
                </div>
            )}
            <div
                className={
                    props.bookingPage === "booking-summary"
                        ? "bookingStep bookingStepActive"
                        : "bookingStep"
                }
            >
                Foglalás
            </div>
            <div
                className={
                    props.bookingPage === "booking-confirm"
                        ? "bookingStep bookingStepActive"
                        : "bookingStep"
                }
            >
                Vissza-<span>igazolás</span>
            </div>
        </div>
    );
}

export default BookingProcess;
