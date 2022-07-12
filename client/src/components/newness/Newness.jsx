import React from "react";
import "./newness.css";
import Title from '../title/Title';
import Button from "../button/Button";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/dist/css/themes/splide-skyblue.min.css';
import counterpart from '../../images/hasonmas-logo.webp';

export default function Newness() {
    return (
        <div className="newness">
            <Title name="Újdonságok" />
            <div className="newness-slider">
                <Splide
                    options={ 
                        {
                            rewind: true,
                            pagination: false,
                            arrows: true,
                            breakpoints: {
                                500: {
                                    arrows: false
                                },
                                992: {
                                    pagination: true
                                }
                            }
                        } 
                    }
                    aria-labelledby="newness"
                >
                    <SplideSlide>
                        <div className="newness-page">
                            <div className="newness-program">
                                <figure className="newness-image">
                                    <img src={counterpart} alt="hasonmas" />
                                </figure>
                                <h4>Szabadulószoba</h4>
                                <Button href="" text="Időpontot foglalok" />
                            </div>
                            <div className="newness-desc">
                                <p>
                                    Az élet gyakran tartogat meglepetéseket. Hazamész a barátaiddal, családoddal és sok olyan dolgot vesztek észre, amik eddig nem voltak ott vagy máshol voltak eddig. Telefonon keres a rendőrség, azt állítják bűncselekményt követtél el. TE…?
                                </p>
                                <p>
                                    Hiszen mindig becsületes életet éltél. Grafológiai vizsgálatot végeznek veled, majd látják, hogy ez tényleg egy más írás… A rendőrség összezavarodik, folyton keresnek téged, lassan naponta kell bejárnod a rendőrségre. Belekezdesz a nyomozásba, hogy mihamarabb véget érjen ez a rémálom?
                                </p>
                                <p>
                                    <span>Derítsd ki az igazságot! <br /></span>
                                    Ki éli még a Te életedet??? <br />
                                    Készen állsz a következő szintre lépni? <br />
                                    Gyere és próbáld ki a <br />
                                    <span>Next Level - Logic Playground</span> első szabaduló szobáját!
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                    {/* <SplideSlide>
                        <div className="newness-page">
                            <div className="newness-program">
                                <figure className="newness-image">
                                    <img src={counterpart} alt="hasonmas" />
                                </figure>
                                <h4>Szabadulószoba</h4>
                                <Button href="" text="Időpontot foglalok" />
                            </div>
                            <div className="newness-desc">
                                <p>
                                    Az élet gyakran tartogat meglepetéseket. Hazamész a barátaiddal, családoddal és sok olyan dolgot vesztek észre, amik eddig nem voltak ott vagy máshol voltak eddig. Telefonon keres a rendőrség, azt állítják bűncselekményt követtél el. TE…?
                                </p>
                                <p>
                                    Hiszen mindig becsületes életet éltél. Grafológiai vizsgálatot végeznek veled, majd látják, hogy ez tényleg egy más írás… A rendőrség összezavarodik, folyton keresnek téged, lassan naponta kell bejárnod a rendőrségre. Belekezdesz a nyomozásba, hogy mihamarabb véget érjen ez a rémálom?
                                </p>
                                <p>
                                    <span>Derítsd ki az igazságot! <br /></span>
                                    Ki éli még a Te életedet??? <br />
                                    Készen állsz a következő szintre lépni? <br />
                                    Gyere és próbáld ki a <br />
                                    <span>Next Level - Logic Playground</span>első szabaduló szobáját!
                                </p>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div className="newness-page">
                            <div className="newness-program">
                                <figure className="newness-image">
                                    <img src={counterpart} alt="hasonmas" />
                                </figure>
                                <h4>Szabadulószoba</h4>
                                <Button href="" text="Időpontot foglalok" />
                            </div>
                            <div className="newness-desc">
                                <p>
                                    Az élet gyakran tartogat meglepetéseket. Hazamész a barátaiddal, családoddal és sok olyan dolgot vesztek észre, amik eddig nem voltak ott vagy máshol voltak eddig. Telefonon keres a rendőrség, azt állítják bűncselekményt követtél el. TE…?
                                </p>
                                <p>
                                    Hiszen mindig becsületes életet éltél. Grafológiai vizsgálatot végeznek veled, majd látják, hogy ez tényleg egy más írás… A rendőrség összezavarodik, folyton keresnek téged, lassan naponta kell bejárnod a rendőrségre. Belekezdesz a nyomozásba, hogy mihamarabb véget érjen ez a rémálom?
                                </p>
                                <p>
                                    <span>Derítsd ki az igazságot! <br /></span>
                                    Ki éli még a Te életedet??? <br />
                                    Készen állsz a következő szintre lépni? <br />
                                    Gyere és próbáld ki a <br />
                                    <span>Next Level - Logic Playground</span>első szabaduló szobáját!
                                </p>
                            </div>
                        </div>
                    </SplideSlide> */}
                </Splide>
            </div>
        </div>
    )
}