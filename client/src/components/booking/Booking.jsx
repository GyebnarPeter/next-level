import "./booking.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title from "../title/Title";
import BookingProcess from "./BookingProcess";
const axios = require("axios").default;

function Booking() {
    const [dateState, setDateState] = useState(new Date());

    async function changeDate(e) {
        setDateState(e);

        let date = e
            .toLocaleDateString()
            .slice(0, -1)
            .replaceAll(". ", "-");

        const url = `http://localhost:8000/api/get-dates/2022-06-21`;
        const data = {
            date: "2022-06-21",
        };

        axios
            .get(url, data)
            .then(function(response) {
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error);
            });

        console.log(date);
    }

    return (
        <div className="booking">
            <Title name="Foglalás" />
            <div className="container">
                <h1>A Hasonmás</h1>
                <BookingProcess />
                <Calendar onChange={changeDate} value={dateState} />
            </div>
        </div>
    );
}

export default Booking;
