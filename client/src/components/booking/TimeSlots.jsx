import React from "react";
import "./timeSlots.css";
import { FaTimes } from "react-icons/fa";

function TimeSlots({
    timeSlotsVisible,
    setTimeSlotsVisible,
    selectedDate,
    reservedTimes,
    setBookingPage,
    bookingData,
    setBookingData,
}) {
    const times = [
        "09:30",
        "11:25",
        "13:00",
        "14:45",
        "16:30",
        "18:15",
        "20:00"
    ];

    const timeSlotHandler = (e) => {
        e.preventDefault();

        setTimeSlotsVisible(!timeSlotsVisible);
        setBookingData({
            ...bookingData,
            fromDate: `${bookingData.fromDate} ${e.target.id}`
        });
        setBookingPage("booking_details");
    };

    return (
        <div className="timeSlots">
            <div
                className="timeSlotsOverlay"
                onClick={() => setTimeSlotsVisible(!timeSlotsVisible)}
            ></div>
            <div className="timeSlotsWrapper">
                <div className="timeSlotsHeader">
                    <h3>{selectedDate}</h3>
                    <div
                        className="closeTimeSlots"
                        onClick={() => setTimeSlotsVisible(!timeSlotsVisible)}
                    >
                        <FaTimes />
                    </div>
                </div>
                {times.map((item, index) => {
                    return (
                        <div
                            className={
                                reservedTimes.includes(item)
                                    ? "timeSlot reserved"
                                    : "timeSlot"
                            }
                            key={index}
                        >
                            <span className="time">{item}</span>
                            <button id={item} onClick={timeSlotHandler}>
                                Lefoglalom
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default TimeSlots;
