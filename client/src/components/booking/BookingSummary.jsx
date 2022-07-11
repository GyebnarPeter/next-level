import React from "react";
import "./bookingSummary.css";

function BookingSummary({ bookingData }) {
    return (
        <div className="bookingSummary">
            <div className="bookingDatas">
                <div className="bookingItems">
                    <div className="bookingItem">
                        <span className="bookingData">Név:</span>
                        <span className="bookingValue">{bookingData.name}</span>
                    </div>
                    <div className="bookingItem">
                        <span className="bookingData">Létszám:</span>
                        <span className="bookingValue">{bookingData.person}</span>
                    </div>
                    <div className="bookingItem">
                        <span className="bookingData">Telefon:</span>
                        <span className="bookingValue">{bookingData.phone}</span>
                    </div>
                    <div className="bookingItem">
                        <span className="bookingData">Email:</span>
                        <span className="bookingValue">{bookingData.email}</span>
                    </div>
                    <div className="bookingItem">
                        <span className="bookingData">Dátum:</span>
                        <span className="bookingValue">{bookingData.fromDate}</span>
                    </div>
                    <div className="bookingItem">
                        <span className="bookingData">Időpont:</span>
                        <span className="bookingValue">{bookingData.time}</span>
                    </div>
                </div>
                <div className="bookingItems">
                    <div className="bookingItem">
                        <span className="bookingData">Játék:</span>
                        <span className="bookingValue">{bookingData.game}</span>
                    </div>
                    <div className="bookingItem">
                        <span className="bookingData">Számlát kér:</span>
                        <span className="bookingValue">
                          {
                            bookingData.bill === 0 ? ( "Nem" ) : ( "Igen" )
                          }
                        </span>
                    </div>
                    {
                      bookingData.bill === 1 && (
                        <>
                          <div className="bookingItem">
                            <span className="bookingData">Számlázási név:</span>
                            <span className="bookingValue">{bookingData.billName}</span>
                          </div>
                          <div className="bookingItem">
                              <span className="bookingData">Számlázási email:</span>
                              <span className="bookingValue">{bookingData.billEmail}</span>
                          </div>
                          <div className="bookingItem">
                              <span className="bookingData">Számlázási cím:</span>
                              <span className="bookingValue">
                                {bookingData.billAddress}
                              </span>
                          </div>
                          <div className="bookingItem">
                              <span className="bookingData">Számlázási telefon:</span>
                              <span className="bookingValue">{bookingData.billPhone}</span>
                          </div>
                        </>
                      )
                    }
                    <div className="bookingItem">
                        <span className="bookingData">Megjegyzés:</span>
                        <span className="bookingValue">{bookingData.comment}</span>
                    </div>
                </div>
            </div>
            <button>Lefoglalom</button>
        </div>
    );
}

export default BookingSummary;
