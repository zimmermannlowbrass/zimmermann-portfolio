import React from "react";
import ME from "../images/Headshot.jpeg"

import "../stylesheets/header.css"

function Header() {
    return (
        <header>
            <div className="container header__container">
                <h3>Welcome! My name is </h3>
                <h1 className="profile-name">James Aidan Zimmermann</h1>
                <h3 className="text-light">a Software Engineer</h3>
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