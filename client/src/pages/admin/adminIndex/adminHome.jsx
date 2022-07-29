import React from "react";
import "./adminHome.css";
import AdminHeader from "../adminHeader/AdminHeader";

function adminHome() {
    return (
        <div className="adminPage">
            <div className="adminContainer">
                <AdminHeader />
                <div className="pageContent">
                    kép1, kép2, kép3
                </div>
            </div>
        </div>
    );
}

export default adminHome;
