import { useState } from "react";
import "./header.css";
import logo from "../../images/next-level-logo.svg";
import mobileLogo from "../../images/next-level-mobile-logo.svg";
import navCloseButton from "../../images/close.png";

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
                style={ openNav ? {transform: 'initial'} : {transform: 'translateX(100%)'}}
            >
                <div className="navClose">
                    <img 
                        src={navCloseButton} 
                        className="navCloseButton" 
                        alt="bezar" 
                        onClick={ () => setOpenNav(!openNav) } 
                    />
                </div>
                <ul className="navList">
                    <li className="navListItem"><a href="" className="navLink link">Főoldal</a></li>
                    <li className="navListItem"><a href="" className="navLink link">Játékok</a></li>
                    <li className="navListItem"><a href="" className="navLink link">Rólunk</a></li>
                    <li className="navListItem"><a href="" className="navLink link">Egyedi ajánlatok</a></li>
                    <li className="navListItem"><a href="" className="navLink link">Kapcsolat</a></li>
                </ul>
            </nav>
            <div className="navBtn" onClick={ () => setOpenNav(!openNav) }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </header>
  )
}
