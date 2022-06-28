import React from "react";
import "./title.css";

export default function Title(props) {
  return (
    <div className="title">
        <h2>
            {props.name}
        </h2>
        <div className="line"></div>
    </div>
  )
}
