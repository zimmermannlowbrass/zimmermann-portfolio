import React from "react";

import Flatiron from "../images/Flatiron.png"
import Yale from "../images/Yale.png"
import Bard from "../images/Bard.png"
import Miami from "../images/Miami.png"

import "../stylesheets/education.css"

function Education() {
    return (
        <section id="education">
            <h2>Education</h2>        
            <div className="education__container">
                <div >
                <img className="school__logo" src={Flatiron} alt="Flatiron"/>
                <div className="education__content">
                    <h5>Full Stack Web Development</h5>
                </div>
                </div>
            
                <div >
                <img className="school__logo" src={Yale} alt="yale"/>
                <div className="education__content">
                    <h5>Master's Degree in Music</h5>
                </div>
                </div>
        
                <div>
                <img className="school__logo" src={Bard} alt="Bard"/>
                <div className="education__content">
                    <h5>Music Performance</h5>
                </div>
                </div>

                <div>
                <img className="school__logo" src={Miami} alt="University of Miami"/>
                <div className="education__content">
                    <h5>Undergraduate Degree</h5>
                </div>
                </div>
            </div>
        </section>
      )
}

export default Education;