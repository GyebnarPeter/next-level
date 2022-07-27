import React from "react";
import "./logIn.css";
import adminIll from "../../../images/admin-ill.webp";

function LogIn() {
    return (
        <div className="loginPage">
            <div className="container">
                <div className="login">
                    <div className="loginHeader">
                        <h1>
                            Next Level <br />
                            <span>Admin</span>
                        </h1>
                        <img src={adminIll} alt="admin illusztracio" />
                    </div>
                    <form className="adminForm">
                        <input type="email" placeholder="Email" />
                        <input type="text" placeholder="Jelszó" />
                        <input type="submit" value="Belépek" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
