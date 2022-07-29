import React from 'react';
import "./adminHeader.css";
import AdminNav from "../adminNav/AdminNav";
import { useState } from 'react';

function AdminHeader() {
    const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="adminHeader">
        <div className="adminHeaderWrp">
            <div className="adminHeaderTopbar">
                <h2>
                    Next Level
                    <span> Admin</span>
                </h2>
                <div 
                    className="adminNavBtn" 
                    onClick={() => setNavIsOpen(!navIsOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <AdminNav 
                navIsOpen={navIsOpen}
                setNavIsOpen={setNavIsOpen}
            />
        </div>
    </header>
  )
}

export default AdminHeader