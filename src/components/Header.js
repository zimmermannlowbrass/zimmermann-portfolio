import React from "react";
import ME from "../images/Headshot.jpeg"

import "../stylesheets/header.css"

function Header() {
    return (
        <header>
            <div className="header__container">
                <h3>Welcome! My name is </h3>
                <h1 className="profile-name">James Aidan Zimmermann</h1>
                <h3>and this is my website!</h3>
                <br/>
                {/* <CTA />
                <HeaderSocials /> */}
                <div className="my-photo-container">
                    <img src={ME} alt="James Aidan Zimmermann" className="my-photo"/>
                </div>
                {/* <a href="/#contact" className="scroll__down">Scroll Down</a> */}
            </div>
        </header>
    )
}

export default Header;