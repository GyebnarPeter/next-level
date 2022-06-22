import React from "react";
import "./faq.css";
import Question from "./Question";
import questions from "./Questions";

function Faq() {
    return (
        <div className="faq">
            <div className="container">
                <div className="faqHeader">
                    <h2>
                        Kérdésed van?
                        <span> Válaszolunk</span>
                    </h2>
                    <div className="line"></div>
                    <p>Néhány alap kérdést már MOST megválaszolunk</p>
                </div>
                <div className="questions">
                {
                    questions.map( (item, index) => {
                        return (
                            <Question 
                                key={ index } 
                                question={ item.question } 
                                answer={ item.answer } 
                            />
                        )
                    })
                }
                </div>
                <div className="faqNote">
                    <p>Ha esetleg nem kaptál itt választ a kérédesre keress minket bátran!</p>
                    <div className="triangle"></div>
                </div>
            </div>
        </div>
    );
}

export default Faq;
