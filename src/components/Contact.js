import React from "react";

import {HiOutlineMail} from "react-icons/hi"
import {AiOutlineLinkedin} from "react-icons/ai"

import "../stylesheets/contact.css"

function Contact () {
    return (
        <>
        <h2>Contact Me</h2>
        <br/>
        <section className="contact" id="contact">
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                    <HiOutlineMail className="contact__option-icon" />
                    <h4>Email</h4>
                    <h6>zimmermann.lowbrass@gmail.com</h6>
                    <div className="btn-wrapper">
                    <a href="mailto:zimmermann.lowbrass@gmail.com" target="_blank" rel="noreferrer" className="btn btn-primary">Send a message</a>
                    </div>
                    </article>
                </div>
                <div className="contact__options">
                    <article className="contact__option">
                    <AiOutlineLinkedin className="contact__option-icon" />
                    <h4>LinkedIn</h4>
                    <h6>James Aidan Zimmermann</h6>
                    <div className="btn-wrapper">
                    <a href="https://www.linkedin.com/in/jamesaidanzimmermann/" target="_blank" rel="noreferrer" className="btn btn-primary">View profile</a>
                    </div>
                    </article>
                </div>
            </div>
        </section>
        </>
      )
}

export default Contact;