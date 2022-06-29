import "./booking.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title from "../title/Title";
import BookingProcess from "./BookingProcess";
import TimeSlots from "./TimeSlots";
const axios = require("axios").default;

function Booking(props) {
    const [dateState, setDateState] = useState(new Date());
    const [timeSlotsVisible, setTimeSlotsVisible] = useState(false);
    const [reservedDates, setReservedDates] = useState([]);

    async function changeDate(e) {

        setDateState(e);

        let date = e
            .toLocaleDateString()
            .slice(0, -1)
            .replaceAll(". ", "-");

        const url = `http://localhost:8000/api/get-dates/2022-06-23`;
        const data = {
            date: "2022-06-23",
        };

        await axios
            .get(url, data)
            .then(function(response) {
                const time = response.data;
                time.forEach((element)=> {
                    setReservedDates(reservedDates => [...reservedDates, element]);
                });
            })
            .catch(function(error) {
                console.log(error);
            });

        console.log(reservedDates);

        setTimeSlotsVisible(!timeSlotsVisible)
    }

    return (
        <div className="booking">
            <Title name="Foglalás" />
            <div className="container">
                <h1>{ props.name }</h1>
                <BookingProcess name={ props.name } />
                <Calendar 
                    onChange={ changeDate } 
                    value={ dateState } 
                    minDate={ new Date() }
                />
                {
                    timeSlotsVisible && (
                        <TimeSlots 
                            setTimeSlotsVisible={ setTimeSlotsVisible } 
                            timeSlotsVisible={ timeSlotsVisible }
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Booking;
