import { useEffect } from "react";
import { useState } from "react";
import "./vote.css";
import VoteForm from "./VoteForm";
import VotingStatus from "./VotingStatus";

export default function Vote() {
    const [sendForm, setSendForm] = useState(false);
    const [voteState, setVoteState] = useState([]);

    useEffect( () => {
        console.log(voteState)
    }, [voteState])

    return (
        <div className="vote saleItem">
            {
                sendForm ? (
                    <VotingStatus voteState={ voteState } />
                ) : (
                    <VoteForm 
                        setSendForm={ setSendForm } 
                        setVoteState={ setVoteState }
                    />
                )
            }
        </div>
    );
}
