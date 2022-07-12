import React from "react";
import "./title.css";

function Title(props) {
  return (
    <div className="title">
        <h2>
            {props.name}
        </h2>
        <div className="line"></div>
    </div>
  )
}

export default Title