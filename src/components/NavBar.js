import React from "react";
// import { NavLink } from "react-router-dom";
// import {useState} from "react"

import "../stylesheets/navbar.css"

function NavBar() {
    // const [activeNav, setActiveNav] = useState("#")

    return (
        <div className="nav-bar">
                <button><a href="/#about">About</a></button>
                <button><a href="/#portfolio">Portfolio</a></button>
                <button><a href="/#skills">Skills</a></button>
                <button><a href="/#contact">Contact</a></button>
        </div>
    )
}

export default NavBar;