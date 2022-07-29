import React from "react";
import "./adminHome.css";
import AdminHeader from "../adminHeader/AdminHeader";
import { Link } from "react-router-dom";

function adminHome() {
    return (
        <div className="adminPage">
            <div className="adminContainer">
                <AdminHeader />
                <div className="pageContent">
                    <div className="tiles">
                        <Tile title="Foglalások" link="/admin/foglalasok" />
                        <Tile title="Adminok" link="/admin/adminok" />
                        <Tile title="Szavazás" link="/admin/szavazas" />
                    </div>
                </div>
            </div>
        </div>
    );
}

const Tile = (props) => {
    return (
        <div className="tile">
            <Link to={props.link}>
                <h3>
                    {props.title}
                </h3>
            </Link>
        </div>
    );
}

export default adminHome;
