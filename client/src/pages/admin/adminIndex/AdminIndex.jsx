import React, { useEffect, useState } from "react";
import LogIn from "../logIn/LogIn";
import AdminHome from "./adminHome";
import getCookie from "../cookie/getCookie"

function AdminIndex() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect( () => {
        setIsLogin(getCookie("login"));
    }, []);

    return (
        <div className="adminIndex">
            {
                isLogin ? <AdminHome /> 
                        : <LogIn setIsLogin={setIsLogin} />
            }
        </div>
    );
}

export default AdminIndex;
