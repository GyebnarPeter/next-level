import React from 'react';
import "./adminHeader.css";
import AdminNav from "../adminNav/AdminNav";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminHeader() {
    const [navIsOpen, setNavIsOpen] = useState(false);

  return (
    <header className="adminHeader">
        <div className="adminHeaderWrp">
            <div className="adminHeaderTopbar">
                <Link to="/admin">
                    <h2>
                        Next Level
                        <span> Admin</span>
                    </h2>
                </Link>
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