import { useState } from "react";
import "./contactForm.css";
const axios = require("axios").default;

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        
        const url = "http://localhost:8000/api/contact-form";
        const data = {
            name: name,
            email: email,
            message: message
        }

        axios({
            method: "post",
            url: url,
            data: data
        });
    }

    return (
        <div className="message">
            <div className="container">
                <h2>Írj nekünk üzenetet</h2>
                <form className="contactForm" onSubmit={ submitForm }>
                    <div className="dataInputs">
                        <input
                            type="text"
                            className="contactFormInput"
                            placeholder="név"
                            onChange={ (e) => setName(e.target.value) }
                            required
                        />
                        <input
                            type="email"
                            className="contactFormInput"
                            placeholder="email"
                            onChange={ (e) => setEmail(e.target.value) }
                            required
                        />
                    </div>
                    <textarea
                        placeholder="üzenet"
                        className="contactFormInput"
                        onChange={ (e) => setMessage(e.target.value) }
                        required
                    ></textarea>
                    <div className="submit">
                        <div className="dataProtect">
                            <h5>Adatkezelési hozzájárulás</h5>
                            <div className="dataProtectInput">
                                <input
                                    type="checkbox"
                                    id="dataProtect"
                                    required
                                />
                                <label htmlFor="dataProtect">
                                    Az adatkezelési tájékoztatót elolvastam és elfogadom
                                </label>
                            </div>
                        </div>
                        <input type="submit" value="Üzenet küldése" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
