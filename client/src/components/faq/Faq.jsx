import "./faq.css";
import Question from "./Question";
import questions from "./Questions";

function Faq() {
    return (
        <div className="faq">
            <div className="container">
                {
                    questions.map( (item, index) => {
                        return <Question key={ index } question={ item.question } answer={ item.answer } />
                    })
                }
            </div>
        </div>
    );
}

export default Faq;
