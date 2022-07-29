import React from "react";
import AdminHeader from "../adminHeader/AdminHeader";

function Reservation() {
    return (
        <div className="adminPage">
            <div className="adminContainer">
                <AdminHeader />
                <div className="pageContent">
                    foglalások
                </div>
            </div>
        </div>
    );
}

export default Reservation;