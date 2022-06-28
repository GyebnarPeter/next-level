import CounterpartDescription from "../../components/counterpartDescription/CounterpartDescription";
import GameIntro from "../../components/gameIntro/GameIntro";
import counterpart from "../../images/hasonmas-logo.webp";
import background from "../../images/hasonmas_bg.webp";
import Rules from "../../components/rules/Rules";
import GameInfo from "../../components/gameInfo/GameInfo";

export default function Counterpart() {
    return (
        <>
            <GameIntro src={counterpart} href="/" background={background} />
            <CounterpartDescription />
            <GameInfo/>
            <Rules />
        </>
    );
}
