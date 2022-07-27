import React from "react";
import { useState } from "react";
import LogIn from "../logIn/LogIn";
import AdminHome from "../adminHome/adminHome";

function AdminIndex() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="adminIndex">{isLogin ? <AdminHome /> : <LogIn />}</div>
    );
}

export default AdminIndex;
