import React from "react";
import Title from "../../components/title/Title";
import logo from "../../images/next-level-logo.webp";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import "./contact.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

export default function Contact() {
    return (
        <main className="contact">
            <Header />
            <Title name="Kapcsolat" />
            <div className="contactWrp">
                <div className="container">
                    <div className="contactBox">
                        <div className="logo">
                            <img src={logo} alt="next level logo" />
                        </div>
                        <div className="icons">
                            <a
                                href="https://www.facebook.com/nextlevellogicplayground/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="contactSocial" />
                            </a>
                            <a
                                href="https://www.instagram.com/nextlevel_logicplayground/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="contactSocial" />
                            </a>
                        </div>
                    </div>
                    <div className="contactBox">
                        <div className="contactInfo">
                            <div className="contactText">
                                <h3>Elérhetőségeink</h3>
                                <p className="address">
                                    6721 Szeged, Brüsszeli krt. 28/A.
                                </p>
                                <p>+36 20 824 87 93</p>
                                <p>info@next-level.hu</p>

                                <h3>Nyitvatartás</h3>
                                <p>Hétfő - Szerda: 13.00 - 21.00</p>
                                <p>Csütörtök - Szombat: 9.30 - 21.00</p>
                                <p>Vasárnap: 13.00 - 21.00</p>
                            </div>
                            <div className="icons">
                                <a
                                    href="https://www.facebook.com/nextlevellogicplayground/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className="contactSocial" />
                                </a>
                                <a
                                    href="https://www.instagram.com/nextlevel_logicplayground/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram className="contactSocial" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
