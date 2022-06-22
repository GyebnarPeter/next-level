import React from "react";
import Booking from "../../components/booking/Booking";
import CounterpartDescription from "../../components/counterpartDescription/CounterpartDescription";
import GameIntro from "../../components/gameIntro/GameIntro";
import Rules from "../../components/rules/Rules";

// Import images
import counterpart from "../../images/hasonmas-logo.webp";
import background from "../../images/hasonmas_bg.webp";

export default function Counterpart() {
    return (
        <>
            <GameIntro src={ counterpart } href="/" background={ background } />
            <CounterpartDescription />
            <Booking />
            <Rules />
        </>
    );
}