import React from "react";
import "./whyus.css";
import { useState, useRef, useEffect } from "react";
import WhyUsBox from "./WhyUsBox";
// Import images
import CleanInner from "../../images/tiszta_belso.svg";
import Coop from "../../images/coop.svg";
import Tasks from "../../images/parhuzamos.svg";
import SmartHome from "../../images/smarthome.svg";
import MorePlace from "../../images/tobb_helyseg.svg";
import Play from "../../images/jatekmenet.svg";

export default function WhyUs() {
    function FadeInSection(props) {
        const [isVisible, setVisible] = useState(false);

        const domRef = useRef();
        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => setVisible(entry.isIntersecting));
            });
            observer.observe(domRef.current);
        }, []);

        return (
            <div
                className={`fade-in-section ${isVisible ? "is-visible" : "" } fadeBox`}
                ref={domRef}
            >
                {props.children}
            </div>
        );
    }

    return (
        <div className="whyus">
            <div className="container">
                <h2>Miért válaszd a Next Levelt?</h2>
                <div className="whyUsBoxes">
                    {Object.keys(desc).map((key) => {
                        return (
                            <FadeInSection key={key}>
                                <WhyUsBox
                                    src={desc[key].image}
                                    title={desc[key].title}
                                    text={desc[key].text}
                                />
                            </FadeInSection>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

const desc = {
    cleanInner: {
        title: "Igényesen kialakított, tiszta belső tér",
        text: "Egy új építésű, rendezett térben alakítottuk ki Szeged legújabb szabaduló szobáját",
        image: CleanInner,
    },
    coop: {
        title: "Kooperáció",
        text: "A csapatmunka a fejtörők megoldásánál nálunk elengedhetetlen, főleg akkor, amikor nem is tartózkodtok egy helységben mindannyian… ",
        image: Coop,
    },
    play: {
        title: "Élménydús játékmenenet",
        text: "Egyik legfontosabb célunk az volt, hogy valóban egy izgalmas, „aha” élményekkel teli, egyedi feladatokkal ellátott szobát hozzunk létre",
        image: Play,
    },
    smartHome: {
        title: "Okosotthon megoldások",
        text: "Becsuksz egy ajtót, bekapcsol a tv, kinyitsz egy ládát, mögötted hirtelen fényárba úszik minden. Nálunk ezek bármikor megtörténhetnek, mindezeket okosotthon eszközök teszik lehetővé!",
        image: SmartHome,
    },
    tasks: {
        title: "Párhuzamosan futó feladatok",
        text: "Logikus, átgondolt, változatos feladatok kombinációjával találkozol nálunk, melyeken szimultán is dolgozhattok",
        image: Tasks,
    },
    morePlace: {
        title: "Több helyiség",
        text: "Fontos szempont volt a kialakításnál, hogy több elkülönült helyiséget tudjunk kialakítani, így folyamatosan új behatások érik a szabadulókat",
        image: MorePlace,
    },
};
