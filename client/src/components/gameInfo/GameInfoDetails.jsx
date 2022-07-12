import React from "react";
import "./gameInfoDetails.css";

export default function gameInfoDetails(props) {
    return (
        <section className="gameInfoDetails">
            <div className="gameInfoDetailsText">
                <p>Játékidő:</p>
                <p className="pinkText">{props.time} perc</p>
                <p>Mennyien vehettek részt a játékban?</p>
                <p className="pinkText">{props.headcount} fő</p>
                <p>Mennyire nehéz?</p>
                <p className="pinkText"></p>
                <p>Hány éves kortól ajánljuk?</p>
                <p className="pinkText">{props.age} éves kortól</p>
                <p>Játék nyelve:</p>
                <p className="pinkText">{props.language}</p>
            </div>
        </section>
    )
}
