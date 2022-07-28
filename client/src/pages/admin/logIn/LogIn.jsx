import React from "react";
import "./logIn.css";
import adminIll from "../../../images/admin-ill.webp";
import { useState } from "react";

function LogIn({ setIsLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, seterrorMessage] = useState(false);

    const login = (e) => {
        e.preventDefault();

        if(email === "admin@admin" && password === "admin") {
            setIsLogin(true);

            const now = new Date();
            const time = now.getTime();
            const expireTime = time + 86400 * 1000;
            now.setTime(expireTime);
            document.cookie = `login=true;expires=${now.toUTCString()}`;
            
        } else {
            seterrorMessage(true);
        }
    }

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
                    <div className="errorMessage">
                        {
                            errorMessage && (
                                <p>Hibás email cím vagy jelszó!</p>
                            )
                        }
                    </div>
                    <form className="adminForm" onSubmit={login}>
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Jelszó"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input type="submit" value="Belépek" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
