import React from "react";
import Title from "../../components/title/Title";
import "./about.css";

export default function About() {
    return (
        <>
            <Title name="Rólunk" />
            <main className="about">
                <div className="aboutText">
                    <h3>Álomból lett valóság…</h3>
                    <p>
                        Érdemes lehet 2022-ben új szabaduló szobát nyitni? Vajon
                        lesz még rá kereslet? Ezek a kérdések a Next Level
                        nyitása előtt sokszor megfordultak a fejünkben, de úgy
                        gondoltuk, hogy IGEN!, lesz még rá kereslet. A legtöbb
                        csapat, akik jártak már szabaduló szobában, kipróbáltak
                        egyet, aztán még egyet, aztán még egyet és, ha elkapták
                        a flow-t, akkor nincs megállás.{" "}
                    </p>
                    <p>
                        Természetesen már nem az egyszerű „csak számkombinációs
                        lakatok és kulcsok vannak” szobákra gondolunk, hanem
                        kreatív, újgenerációs megoldásokkal teletűzdelt szobákra
                        és egyéb alternatív kikapcsolódási lehetőségekre. A Next
                        Level első szabaduló szobájának megalkotásakor is ez
                        volt az elsődleges célunk. Nálunk találsz majd egy-két
                        lakatot és zárat, de egyik sem lesz olyan, amit eddig
                        már megszoktál.{" "}
                    </p>
                    <p>
                        Az elsődleges célunk a közeljövőben az, hogy minél több
                        alternatív szórakozási lehetőséget biztosítsunk
                        számotokra, akik szeretnek kreatív programokon sok-sok
                        jó élményt szerezni! Folyamatosan bővülő egyedi
                        játékaink kikapcsolnak, felpörgetnek, ellazítanak és
                        biztosan a hatásuk alatt leszel még napokig!
                    </p>
                    <h3>Készen állsz a következő szintre lépni? </h3>
                    <p>
                        Gyere el és próbáld ki a Next Level – Logic Playground
                        első logikai játékait és kövesd nyomon a bővülő
                        kínálatunkat!
                    </p>
                </div>
            </main>
        </>
    );
}
