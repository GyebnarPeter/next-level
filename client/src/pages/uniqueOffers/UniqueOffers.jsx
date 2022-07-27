import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import "./uniqueOffers.css";

export default function UniqueOffers() {
    return (
        <div className="offers">
            <Header />
            <Title name="Egyedi Ajánlatok" />
            <main className="uniqueOffers">
                <div className="uniqueOffersText">
                    <h3>
                        A Next Level - Logic Playground mindenki számára
                        élménydús programokat kínál!
                    </h3>
                    <p>
                        Kezdő vállalkozásként mindenre nyitottak vagyunk, minél
                        több alternatív kikapcsolódási formát szeretnénk
                        kialakítani a szegedieknek és a környékről ide
                        érkezőknek.
                    </p>
                    <p>
                        Van egy jó ötleted, de még nem tudod hogy valósítsd meg?
                        Mi segíthetünk ebben! Vedd fel velünk a kapcsolatot, ha
                        úgy gondolod tudunk neked segíteni bármilyen kreatív
                        program megvalósításában.
                    </p>
                    <h3>Külső helyszínen van lehetőség bármilyen játékra?</h3>
                    <p className="uniqueOffersHighlight">
                        Egyelőre még nincs kidolgozott játékunk erre, azonban
                        bármire nyitottak vagyunk! Ha időben felvesztitek velünk
                        a kapcsolatot ki tudunk dolgozni többfajta egyszerűbb
                        játékot! Egy rövid nyomozást a céges vacsorára,
                        táborokba, gyerekzsúrokra rövid szabadulásokat, városi,
                        személyre szabott nyomozásokat, esetleg egyénre szabott
                        nyomozós kocsmatúrát is.
                    </p>
                    <p>
                        Szülinap, névnap, karácsony, házassági évforduló,
                        anyáknapja, valentin nap, bármilyen ünnep, amin azt
                        szeretnéd, hogy az ajándékot a szoba rejtse… Esetleg
                        egyedi, személyre szabott feladványokat is szeretnél a
                        szobába?
                    </p>
                    <h3>
                        Vedd fel velünk a kapcsolatot, lehetőségeinkhez mérten
                        mindent megoldunk!!
                    </h3>
                </div>
            </main>
            <Footer />
        </div>
    );
}
