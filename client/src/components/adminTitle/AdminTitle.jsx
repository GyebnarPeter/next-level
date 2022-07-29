import React from 'react';
import "./adminTitle.css";

function AdminTitle(props) {
  return (
    <div className="adminTitle">
        <h2>{props.title}</h2>
        <div className="adminTitleIcon">
            {props.icon}
        </div>
    </div>
  )
}

export default AdminTitle