import React, { useEffect, useState } from "react";
import LogIn from "../logIn/LogIn";
import getCookie from "../cookie/getCookie"
import Users from "./Users";

function UsersLogin() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect( () => {
        setIsLogin(getCookie("login"));
    }, []);

    return (
        <div className="usersLogin">
            {
                isLogin ? <Users /> 
                        : <LogIn setIsLogin={setIsLogin} />
            }
        </div>
    );
}

export default UsersLogin;
