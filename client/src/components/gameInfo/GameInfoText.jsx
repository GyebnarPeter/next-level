import React from "react";
import "./gameInfoText.css";

export default function GameInfoText() {
    return(
        <section className="gameInfoText">
            <div className="gameInfoTextBox">
                <div className="gameInfoTextDescription">
                    <p>Merengtél már azon, hogy milyen lenne, ha kettő lenne belőled? A közeli ismerőseid lehet azt mondják, hogy bőven elég belőled egy is… Nekünk ismerős ez a mondat… Hát neked?</p>
                    <p>Egy másik személy ugyanazzal a kinézettel, de lehet, hogy jobban szeret tanulni, lehet kreatívabb nálad és az emberekhez is jobban ért. Azért, ha lenne ilyen kihasználnád te is minden előnyét nem? A mai világban biztos mindenkinek eszébe jutott már legalább egyszer, hogy „De jó lenne most egyszerre két helyen lenni!”.</p>
                    <p>Gyere el hozzánk, legyél TE a főszereplője a szobánk titokzatos történetének és derítsd ki csapatoddal együtt, hogy létezik-e valahol egy hasonmásod!</p>
                    <div className="gameInfoHighlight"></div>
                    <p>Az élet gyakran tartogat meglepetéseket. Hazamész a barátaiddal, családoddal és sok olyan dolgot vesztek észre, amik eddig nem voltak ott vagy máshol voltak eddig. Telefonon keres a rendőrség, azt állítják bűncselekményt követtél el. TE…? Hiszen mindig becsületes életet éltél. Grafológiai vizsgálatot végeznek veled, majd látják, hogy ez tényleg egy más írás… A rendőrség összezavarodik, folyton keresnek téged, lassan naponta kell bejárnod a rendőrségre. </p>
                    <p>Belekezdesz a nyomozásba, hogy mihamarabb véget érjen ez a rémálom?</p>
                    <p id="highlightedText">Derítsd ki az igazságot! Ki éli még a Te életedet???</p>
                </div>
            </div>
        </section>
    )
}

