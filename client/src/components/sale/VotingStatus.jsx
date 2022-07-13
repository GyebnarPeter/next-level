import React from "react";
import { useState, useEffect, useRef } from "react";
import "./votingStatus.css";

function VotingStatus(props) {
    const [isVote, setIsVote] = useState("");
    const [votes, setVotes] = useState([]);
    const [allVotes, setAllVotes] = useState("");
    const countRef = useRef(0);

    useEffect( () => {
        if(props.voteState.length === 2) {
            setIsVote("Ezzel az email címmel már szavaztál!");
            setVotes(props.voteState[1]);
        } else {
            setVotes(props.voteState);
        }

        votes.forEach(vote => {
            countRef.current += vote.count;
            setAllVotes(countRef.current);
        })

        console.log(votes)
    }, [votes])

    return (
        <div className="votingStatus">
            <h3>
                <span>{ isVote }</span>
                A szavazás állása:
            </h3>
            <div className="votedItems">
                {votes.map((vote) => {
                    return (
                        <div className="votedItem" key={ vote.id }>
                            <div className="votedName">
                                <h4>
                                    { vote.name }
                                    <span>{ vote.subname }</span>
                                </h4>
                            </div>
                            <div className="votedStatus">
                                { parseFloat((100 * vote.count) / allVotes).toFixed(1) } %
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default VotingStatus;
