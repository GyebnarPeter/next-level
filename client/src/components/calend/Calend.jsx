import React, { useState } from "react";
import DayTimePicker from "@mooncake-dev/react-day-time-picker";

function Calend() {
    const [value, onChange] = useState(new Date());
    return (
        <div className="">
            <div className="container">
                <DayTimePicker timeSlotSizeMinutes={15} />
            </div>
        </div>
    );
}

export default Calend;
