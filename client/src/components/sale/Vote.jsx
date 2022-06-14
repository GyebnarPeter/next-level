import "./vote.css";
import VoteItem from "./VoteItem";
import voteText from "./VoteText";
const parse = require('html-react-parser');

export default function Vote() {
    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <div className="vote saleItem">
            <h3>A Next Level hamarosan megjelenő játékaiból melyikre foglalnál rögtön időpontot?</h3>
            <form action="" onSubmit={submitForm}>
                <div className="voteItems">
                    <div className="voteBox">
                        <VoteItem 
                            id="quizroom" 
                            name="Quizroom" 
                            desc="Kvízszoba" 
                            text={ parse(voteText.quizroom) }
                        />
                        <VoteItem 
                            id="bigboard" 
                            name="Bigboard Games" 
                            desc="Élő, órias társasjáték" 
                            text={ parse(voteText.bigboard) }
                        />
                    </div>
                    <div className="voteBox">
                        <VoteItem
                            id="titkoszt" 
                            name="Titkoszt" 
                            desc="Nyomozós gasztroélmény" 
                            text={ parse(voteText.titkoszt) }
                        />
                        <VoteItem 
                            id="logicrace" 
                            name="Logicrace" 
                            desc="Szabadulószoba egymás ellen, verseny az idővel és a barátaiddal" 
                            text={ parse(voteText.logicrace) }
                        />
                    </div>
                </div>
                <div className="voteItems">
                    <div className="voteBox">
                        <input type="email" placeholder="Email cím"/>
                        <p>A szavazók között Next Level ajándékutalványokat sorsolunk majd ki!</p>
                    </div>
                    <div className="voteBox voteSubmitBox">
                        <input type="submit" value="Szavazok" />
                    </div>
                </div>
            </form>
        </div>
    );
}