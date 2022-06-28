import "./gameInfo.css";
import GameInfoText from "../../components/gameInfo/GameInfoText";
import GameInfoDetails from "../../components/gameInfo/GameInfoDetails";
import GameInfoPrice from "../../components/gameInfo/GameInfoPrice";
export default function GameInfo() {
    return(
        <>
            <div className="gameInfo">
                <div className="container">
                    <GameInfoText />
                    <section className="gameDatas">
                        <GameInfoDetails />
                        <GameInfoPrice />       
                    </section>
                </div>
            </div>
        </>
    )
}