import React from "react";
import Button from "../button/Button";
import "./gameIntro.css";

function GametIntro(props) {
    return (
        <div
            className="gameIntro"
            style={{
                backgroundImage: `url(${props.background})`,
                backgroundPosition: "center top",
                backgroundSize: "cover",
            }}
        >
            <div className="gameIntroBox">
                <img src={props.src} alt="next level game" />
                <h3>Szabadulószoba</h3>
            </div>
            <div className="gameIntroBox">
                <Button href={props.href} text="Időpontot foglalok" />
            </div>
        </div>
    );
}

export default GametIntro;
