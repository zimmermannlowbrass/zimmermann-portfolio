import React from "react";

import ME from "../images/Headshot2.png"
import Resume from "../resume/James_Zimmermann_Resume.pdf"

import "../stylesheets/header.css"
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";

function Header() {
    
    return (
        <header>
            <div className="header__container">
                <h1 className="profile-name">
                    James Aidan Zimmermann
                    <HiOutlineMail className="contact__option-icon" cursor={"pointer"} onClick={() => window.location.href = "mailto:zimmermann.lowbrass@gmail.com"} />
                    <AiOutlineLinkedin className="contact__option-icon" cursor={"pointer"} onClick={() => window.location.href = "https://www.linkedin.com/in/jamesaidanzimmermann/"}/>
                </h1>
                <h3>
                    Full Stack Software Engineer
                </h3>
                <br/>
                <div className="my-photo-container">
                    <img src={ME} alt="James Aidan Zimmermann" lazy="true" className="my-photo"/>
                </div>
                <a href={Resume} download className="btn btn-primary">Download Resume</a>
            </div>
        </header>
    )
}

export default Header;
