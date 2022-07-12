import React from "react";
import "./gameInfoText.css";

export default function GameInfoText(props) {
    return(
        <section className="gameInfoText">
            <div className="gameInfoTextBox">
                <div className="gameInfoTextDescription">
                    {props.text}
                </div>
            </div>
        </section>
    )
}

