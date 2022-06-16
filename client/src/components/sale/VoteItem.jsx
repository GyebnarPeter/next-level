import "./voteItem.css";
import React from 'react';
import close from "../../images/close-pink.webp";
import { useState } from "react";

function VoteItem(props) {
    const [isOpen, setIsOpen] = useState(false);

    const inputValueHandler = (e) => {
        props.setValue(e.target.value);
    }

    const voteButtonHandler = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    return (
        <div className="voteItem">
            <div className="voteInput">
                <input 
                    type="radio" 
                    name="vote" 
                    id={ props.id } 
                    value={ props.value }
                    onChange={ inputValueHandler }
                />
                <label htmlFor={ props.id }>
                    { props.name }
                    <span>{ props.desc }</span>
                </label>
            </div>
            <button 
                className="voteBtn" 
                onClick={ voteButtonHandler }
            >
                Részletek
                <span>
                    Szavazz Te is! <br />
                    Ha szavazol nyerhetsz is!
                </span>
            </button>
            <div 
                className="voteText" 
                style={ isOpen ? {display: 'flex'} : {display: 'none'}}
                onClick={ () => setIsOpen(!isOpen) }
            >
                <div className="voteText__wrp">
                    <img 
                        src={ close } 
                        alt="bezar" 
                        onClick={ () => setIsOpen(!isOpen) }
                    />
                    { props.text }
                </div>
            </div>
        </div>
    );
}

export default VoteItem