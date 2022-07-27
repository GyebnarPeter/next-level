import React from "react";
import Booking from "../../components/booking/Booking";
import CounterpartDescription from "../../components/counterpartDescription/CounterpartDescription";
import GameIntro from "../../components/gameIntro/GameIntro";
import Rules from "../../components/rules/Rules";
import GameInfo from "../../components/gameInfo/GameInfo";
import desc from "./gameDesc";
import parse from 'html-react-parser';
import "./counterpart.css";

// Import images
import counterpart from "../../images/hasonmas-logo.webp";
import background from "../../images/hasonmas_bg.webp";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Counterpart() {
    return (
        <div className="counterpart">
            <Header />
            <GameIntro src={ counterpart } href="/" background={ background } />
            <CounterpartDescription />
            <GameInfo
                text={parse(desc)}
                time="60"
                headcount="2-6"
                age="8"
                language="magyar"
                two="6.000"
                three="8.000"
                four="10.000"
                five="12.000"
                six="13.000"
            />
            <Booking name="A hasonmás" />
            <Rules />
            <Footer />
        </div>
    );
}