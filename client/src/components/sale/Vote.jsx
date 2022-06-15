import { useEffect, useState } from "react";
import "./vote.css";
import VoteItem from "./VoteItem";
import voteText from "./VoteText";
const parse = require("html-react-parser");
const axios = require('axios').default;

export default function Vote() {
    const [value, setValue] = useState("val");

    const submitForm = (e) => {
        e.preventDefault();

        const obj = {
            email: "email@ujabb.hu"
        }

        const url = `http://localhost:8000/api/update-vote/${value}`;

        axios.put(url, obj)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        console.log(value);
    }, [value]);

    return (
        <div className="vote saleItem">
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
                        <input type="email" placeholder="Email cím" />
                        <p>
                            A szavazók között Next Level ajándékutalványokat
                            sorsolunk majd ki!
                        </p>
                    </div>
                    <div className="voteBox voteSubmitBox">
                        <input type="submit" value="Szavazok" />
                    </div>
                </div>
            </form>
        </div>
    );
}
