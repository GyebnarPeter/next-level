import React from "react";
import "./timeSlots.css";
import { FaTimes } from "react-icons/fa";

function TimeSlots({ timeSlotsVisible, setTimeSlotsVisible }) {
    return (
        <div className="timeSlots">
            <div
                className="timeSlotsOverlay"
                onClick={() => setTimeSlotsVisible(!timeSlotsVisible)}
            ></div>
            <div className="timeSlotsWrapper">
                <div className="timeSlotsHeader">
                    <h3>2022.06.23.</h3>
                    <div
                        className="closeTimeSlots"
                        onClick={() => setTimeSlotsVisible(!timeSlotsVisible)}
                    >
                        <FaTimes />
                    </div>
                </div>
                <div className="timeSlot">
                    <span className="time">09:30</span>
                    <button>Lefoglalom</button>
                </div>
                <div className="timeSlot">
                    <span className="time">11:25</span>
                    <button className="reserved">Lefoglalom</button>
                </div>
                <div className="timeSlot">
                    <span className="time">13:00</span>
                    <button>Lefoglalom</button>
                </div>
                <div className="timeSlot">
                    <span className="time">14:45</span>
                    <button>Lefoglalom</button>
                </div>
                <div className="timeSlot">
                    <span className="time">16:30</span>
                    <button className="reserved">Lefoglalom</button>
                </div>
                <div className="timeSlot">
                    <span className="time">18:15</span>
                    <button>Lefoglalom</button>
                </div>
                <div className="timeSlot">
                    <span className="time">20:00</span>
                    <button>Lefoglalom</button>
                </div>
            </div>
        </div>
    );
}

export default TimeSlots;
