import React from "react";
import "./header.css";
import { useState } from "react";
import logo from "../../images/next-level-logo.webp";
import mobileLogo from "../../images/next-level-mobile-logo.webp";
import navCloseButton from "../../images/close.png";
import { Link } from "react-router-dom";

export default function Header() {
    const [openNav, setOpenNav] = useState(false);

    return (
        <header className="header">
            <div className="container">
                <div className="headerLogos">
                    <img
                        src={logo}
                        className="headerLogo"
                        alt="next level logo"
                    />
                    <img
                        src={mobileLogo}
                        className="headerLogoMobile"
                        alt="next level logo"
                    />
                </div>
                <nav
                    className="nav"
                    style={
                        openNav
                            ? { transform: "initial" }
                            : { transform: "translateX(100%)" }
                    }
                >
                    <div className="navClose">
                        <img
                            src={navCloseButton}
                            className="navCloseButton"
                            alt="bezar"
                            onClick={() => setOpenNav(!openNav)}
                        />
                    </div>
                    <ul className="navList">
                        <li className="navListItem"><Link to="/">Föoldal</Link></li>
                        <li className="navListItem"><Link to="hasonmas">Hasonmás</Link></li>
                        <li className="navListItem"><Link to="rolunk">Rólunk</Link></li>
                        <li className="navListItem"><Link to="egyedi-ajanlatok">Egyedi ajánlatok</Link></li>
                        <li className="navListItem"><Link to="kapcsolat">Kapcsolat</Link></li>
                    </ul>
                </nav>
                <div className="navBtn" onClick={() => setOpenNav(!openNav)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
}
