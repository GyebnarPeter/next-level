import React from "react";
import "./gameInfo.css";
import GameInfoText from "../../components/gameInfo/GameInfoText";
import GameInfoDetails from "../../components/gameInfo/GameInfoDetails";
import GameInfoPrice from "../../components/gameInfo/GameInfoPrice";

export default function GameInfo(props) {
    return(
        <div className="gameInfo">
            <div className="container">
                <GameInfoText 
                    text={props.text}
                />
                <section className="gameDatas">
                    <GameInfoDetails 
                        time={props.time}
                        headcount={props.headcount}
                        age={props.age}
                        language={props.language}
                    />
                    <GameInfoPrice
                        two={props.two}
                        three={props.three}
                        four={props.four}
                        five={props.five}
                        six={props.six}
                    />       
                </section>
            </div>
        </div>
    )
}
