import "./booking.css";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Title from "../title/Title";
import BookingProcess from "./BookingProcess";
import TimeSlots from "./TimeSlots";
import { useEffect } from "react";
import BookingDetails from "./BookingDetails";
import ImageUploader from "./ImageUploader";
import BookingSummary from "./BookingSummary";
import BookingConfirmation from "./BookingConfirmation";
import getReservedTimesService from "../../services/getReservedTimesService";

function Booking(props) {
    const [reservedTimes, setReservedTimes] = useState([]);
    const [dateState, setDateState] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState("");
    const [timeSlotsVisible, setTimeSlotsVisible] = useState(false);
    const [bookingPage, setBookingPage] = useState("calendar");
    const [bookingData, setBookingData] = useState({});

    const changeDate = async (e) => {
        setDateState(e);

        let date = e
            .toLocaleDateString()
            .slice(0, -1)
            .replaceAll(". ", "-");

        setSelectedDate(date);

        setBookingData({
            ...bookingData,
            fromDate: date,
            game: props.name,
        });

        const times = await getReservedTimesService(date);

        setReservedTimes(times);
        setTimeSlotsVisible(!timeSlotsVisible);
    }

    useEffect(() => {
        console.log(bookingData);
    }, [bookingData]);

    return (
        <section className="booking">
            <Title name="Foglalás" />
            <div className="container">
                <h1>{props.name}</h1>
                <BookingProcess name={props.name} bookingPage={bookingPage} />
                {(() => {
                    switch (bookingPage) {
                        case "calendar":
                            return (
                                <Calendar
                                    onChange={changeDate}
                                    value={dateState}
                                    minDate={new Date()}
                                />
                            );
                        case "booking_details":
                            return (
                                <BookingDetails
                                    bookingData={bookingData}
                                    setBookingData={setBookingData}
                                    setBookingPage={setBookingPage}
                                    name={props.name}
                                />
                            );
                        case "image-uploader":
                            return (
                                <ImageUploader
                                    bookingData={bookingData}
                                    setBookingData={setBookingData}
                                    setBookingPage={setBookingPage}
                                />
                            );
                        case "booking-summary":
                            return (
                                <BookingSummary 
                                    bookingData={bookingData}
                                    setBookingPage={setBookingPage}
                                />
                            );
                        case "booking-confirm":
                            return <BookingConfirmation />
                        default:
                            return "";
                    }
                })()}

                {timeSlotsVisible && (
                    <TimeSlots
                        setTimeSlotsVisible={setTimeSlotsVisible}
                        timeSlotsVisible={timeSlotsVisible}
                        selectedDate={selectedDate}
                        reservedTimes={reservedTimes}
                        setBookingPage={setBookingPage}
                        bookingData={bookingData}
                        setBookingData={setBookingData}
                    />
                )}
            </div>
        </section>
    );
}

export default Booking;
