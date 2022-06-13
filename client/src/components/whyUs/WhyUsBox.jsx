import "./whyUsBox.css";

export default function WhyUsBox(props) {
    return (
        <div className="whyUsBox">
            <figure>
                <img src={props.src} alt="miert a next level" />
            </figure>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
    );
}
