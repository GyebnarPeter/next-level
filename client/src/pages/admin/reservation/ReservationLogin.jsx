import React, { useEffect, useState } from "react";
import LogIn from "../logIn/LogIn";
import getCookie from "../cookie/getCookie"
import Reservation from "./Reservation";

function ReservationLogin() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect( () => {
        setIsLogin(getCookie("login"));
    }, []);

    return (
        <div className="reservationLogin">
            {
                isLogin ? <Reservation /> 
                        : <LogIn setIsLogin={setIsLogin} />
            }
        </div>
    );
}

export default ReservationLogin;
