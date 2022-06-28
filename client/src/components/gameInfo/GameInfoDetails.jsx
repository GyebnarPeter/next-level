import React from "react";
import "./gameInfoDetails.css";

export default function gameInfoDetails() {
    return (
        <section className="gameInfoDetails">
            <div className="gameInfoDetailsText">
                <p>Játékidő:</p>
                <p className="pinkText">60 perc</p>
                <p>Mennyien vehettek részt a játékban?</p>
                <p className="pinkText">2-6 fő</p>
                <p>Mennyire nehéz?</p>
                <p className="pinkText"></p>
                <p>Hány éves kortól ajánljuk?</p>
                <p className="pinkText">8 éves kortól</p>
                <p>Játék nyelve:</p>
                <p className="pinkText">magyar</p>
            </div>
        </section>
    )
}
