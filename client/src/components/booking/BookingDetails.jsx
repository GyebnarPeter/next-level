import React from "react";
import "./bookingDetails.css";

function BookingDetails({ bookingData, setBookingData }) {
    return (
        <div className="bookingDetails">
            <div className="inputColumns">
                <div className="inputColumn">
                    <div className="bookingInput">
                        <label htmlFor="name">Név</label>
                        <input
                            type="text"
                            id="name"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    name: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="phone">Telefon</label>
                        <input
                            type="text"
                            id="phone"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    phone: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    email: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="valEmail">Email megerősítése</label>
                        <input
                            type="email"
                            id="valEmail"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    valEmail: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="headCount">Létszám</label>
                        <input
                            type="number"
                            id="headCount"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    person: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="message">
                            Megjegyzések, különleges kérések
                        </label>
                        <textarea
                            id="message"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    comment: e.target.value,
                                });
                            }}
                        ></textarea>
                    </div>
                </div>
                <div className="inputColumn">
                    <h4>Áfás számlát kérek</h4>
                    <div className="bookingRadioInput">
                        <div className="taxInput">
                            <input
                                type="radio"
                                name="tax"
                                id="tax_yes"
                                onClick={() => {
                                    setBookingData({
                                        ...bookingData,
                                        bill: 1,
                                    });
                                }}
                            />
                            <label htmlFor="tax_yes">Igen</label>
                        </div>
                        <div className="taxInput">
                            <input
                                type="radio"
                                name="tax"
                                id="tax_no"
                                onClick={() => {
                                    setBookingData({
                                        ...bookingData,
                                        bill: 0,
                                    });
                                }}
                            />
                            <label htmlFor="tax_no">Nem</label>
                        </div>
                    </div>
                    <h4>Számlázási adatok</h4>
                    <div className="bookingInput">
                        <label htmlFor="billName">Név</label>
                        <input
                            type="text"
                            id="billName"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    billName: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="billPhone">Telefon</label>
                        <input
                            type="text"
                            id="billPhone"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    billPhone: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="billEmail">Email</label>
                        <input
                            type="email"
                            id="billEmail"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    billEmail: e.target.value,
                                });
                            }}
                        />
                    </div>
                    <div className="bookingInput">
                        <label htmlFor="billAddress">Cím</label>
                        <input
                            type="text"
                            id="billAddress"
                            onChange={(e) => {
                                setBookingData({
                                    ...bookingData,
                                    billAddress: e.target.value,
                                });
                            }}
                        />
                    </div>
                </div>
            </div>
            <button>Tovább</button>
        </div>
    );
}

export default BookingDetails;
