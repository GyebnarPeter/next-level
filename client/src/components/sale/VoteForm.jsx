import React from "react";
import { useState, useRef } from "react";
import VoteItem from "./VoteItem";
import voteText from "./VoteText";
import "./voteForm.css";
import parse from 'html-react-parser';
import sendVoteService from "../../services/sendVoteService";

function VoteForm({ setSendForm, setVoteState }) {
    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const message = useRef(email);

    const submitForm = async (e) => {
        e.preventDefault();

        if(email === "" || value === "") {
            message.current.innerText = "Nem adtál meg email címet, vagy nem szavaztál!";
        } else {
            const data = {
                email: email
            };

            const votes = await sendVoteService(value, data);
            
            setVoteState(votes);
            setSendForm(true);
        }
    };

    return (
        <>
            <h3>
                A Next Level hamarosan megjelenő játékaiból melyikre foglalnál
                rögtön időpontot?
            </h3>
            <form action="" onSubmit={submitForm}>
                <div className="voteItems">
                    <div className="voteBox">
                        <VoteItem
                            id="quizroom"
                            name="Quizroom"
                            desc="Kvízszoba"
                            value="2"
                            setValue={setValue}
                            text={parse(voteText.quizroom)}
                        />
                        <VoteItem
                            id="bigboard"
                            name="Bigboard Games"
                            desc="Élő, órias társasjáték"
                            value="4"
                            setValue={setValue}
                            text={parse(voteText.bigboard)}
                        />
                    </div>
                    <div className="voteBox">
                        <VoteItem
                            id="titkoszt"
                            name="Titkoszt"
                            desc="Nyomozós gasztroélmény"
                            value="3"
                            setValue={setValue}
                            text={parse(voteText.titkoszt)}
                        />
                        <VoteItem
                            id="logicrace"
                            name="Logicrace"
                            desc="Szabadulószoba egymás ellen, verseny az idővel és a barátaiddal"
                            value="5"
                            setValue={setValue}
                            text={parse(voteText.logicrace)}
                        />
                    </div>
                </div>
                <div className="voteItems">
                    <div className="voteBox">
                        <input
                            type="email"
                            placeholder="Email cím"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p>
                            A szavazók között Next Level ajándékutalványokat
                            sorsolunk majd ki!
                        </p>
                    </div>
                    <div className="voteBox voteSubmitBox">
                        <span className="voteMessage" ref={message}></span>
                        <input type="submit" value="Szavazok" />
                    </div>
                </div>
            </form>
        </>
    );
}

export default VoteForm;
