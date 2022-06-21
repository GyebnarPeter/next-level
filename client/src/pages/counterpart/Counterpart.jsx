import CounterpartDescription from "../../components/counterpartDescription/CounterpartDescription";
import GameIntro from "../../components/gameIntro/GameIntro";
import Rules from "../../components/rules/Rules";
import Calend from "../../components/calend/Calend";

// Import images
import counterpart from "../../images/hasonmas-logo.webp";
import background from "../../images/hasonmas_bg.webp";

export default function Counterpart() {
    return (
        <>
            <GameIntro src={ counterpart } href="/" background={ background } />
            <CounterpartDescription />
            <Calend />
            <Rules />
        </>
    );
}
