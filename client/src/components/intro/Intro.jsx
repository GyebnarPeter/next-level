import React from "react";
import "./intro.css";
import logoAni from "../../images/next-level-logo-ani.webp";

export default function Intro() {
    return (
        <div className="intro">
            <div className="container">
                <div className="intro-ani">
                    <img src={logoAni} alt="next level logo" />
                </div>
                <h1>
                    Szabadulószoba és kreatív élményprogramok mindenkinek!
                </h1>
                <div className="line"></div>
                <h3>
                    Készen állsz a következő szintre lépni?
                </h3>
                <div className="triangle"></div>
            </div>
        </div>
    )
}