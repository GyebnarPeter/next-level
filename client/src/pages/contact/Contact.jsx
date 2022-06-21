import Title from "../../components/title/Title";
import logo from "../../images/next-level-logo.webp";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import "./contact.css";

export default function Contact() {
    return (
        <main className="contact">
            <Title name="Kapcsolat" />
            <div className="contactWrp">
                <div className="container">
                    <div className="contactBox">
                        <div className="logo">
                            <img src={logo} alt="next level logo" />
                        </div>
                        <div className="icons">
                            <FaFacebook className="contactSocial" />
                            <FaInstagram className="contactSocial" />
                        </div>
                    </div>
                    <div className="contactBox">
                        <div className="contactInfo">
                            <div className="contactText">
                                <h3>Elérhetőségeink</h3>
                                <p className="address">
                                    6721 Szeged, Brüsszeli krt. 28.
                                </p>
                                <p>+36 20 824 87 93</p>
                                <p>info@nextlevel.hu</p>

                                <h3>Nyitvatartás</h3>
                                <p>Hétfő - Szerda: 13.00 - 21.00</p>
                                <p>Csütörtök - Szombat: 9.30 - 21.00</p>
                                <p>Vasárnap: 13.00 - 21.00</p>
                            </div>
                            <div className="icons">
                                <FaFacebook className="contactSocial" />
                                <FaInstagram className="contactSocial" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
