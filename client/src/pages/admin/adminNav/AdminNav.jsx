import React from "react";
import "./adminNav.css";
import {
    AiOutlineClose,
    AiOutlineCalendar,
    AiOutlineUser,
    AiOutlineFund,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import david from "../../../images/david.webp";

function AdminNav({navIsOpen, setNavIsOpen}) {
    return (
        <div 
            className="adminNav"
            style={navIsOpen ? {display: "block"} : {display: "none"}}
        >
            <div className="adminNavHeader">
                <Link to="/admin">
                    <h1>
                        Next Level
                        <span> Admin</span>
                    </h1>
                </Link>
                <AiOutlineClose 
                    className="AdminNavClose" 
                    onClick={() => setNavIsOpen(!navIsOpen)}
                />
            </div>
            <div className="user">
                <div className="userImage">
                    <img src={david} alt="david" />
                </div>
                <div className="userName">Dévid Hásszelhoff</div>
                <div className="userEmail">david@hasselhoff.com</div>
            </div>
            <h2>Menü</h2>
            <ul className="adminMenu">
                <li className="adminMenuItem">
                    <Link to="/admin/foglalasok">
                        <AiOutlineCalendar />
                        <span>Foglalások</span>
                    </Link>
                </li>
                <li className="adminMenuItem">
                    <Link to="/admin/szavazas">
                        <AiOutlineFund />
                        <span>Szavazás</span>
                    </Link>
                </li>
                <li className="adminMenuItem">
                    <Link to="/admin/adminok">
                        <AiOutlineUser />
                        <span>Adminok</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default AdminNav;
