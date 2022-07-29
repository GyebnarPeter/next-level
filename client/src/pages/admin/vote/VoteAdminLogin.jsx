import React, { useEffect, useState } from "react";
import LogIn from "../logIn/LogIn";
import getCookie from "../cookie/getCookie"
import VoteAdmin from "./VoteAdmin";

function VoteAdminLogin() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect( () => {
        setIsLogin(getCookie("login"));
    }, []);

    return (
        <div className="voteAdminLogin">
            {
                isLogin ? <VoteAdmin /> 
                        : <LogIn setIsLogin={setIsLogin} />
            }
        </div>
    );
}

export default VoteAdminLogin;
