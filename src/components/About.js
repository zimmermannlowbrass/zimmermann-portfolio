import React, {useState } from "react";

import "../stylesheets/about.css"

function About() {
    const [readMore, setReadMore] = useState(false)

  function handleClick() {
    setReadMore(readMore => !readMore)
  }

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-content">

        <h5>Full-stack Software Engineer with extensive background in education and web-development. 
        Dedicated to crafting solutions and driven by an appreciation for details.</h5> 
        <p>I thrive in collaborative environments and actively engage with peers to develop innovative ideas. 
        I embrace new technologies in the pursuit of lifelong learning. 
        Seeking opportunities in front-end, back-end, or full-stack web development.
        </p>
        <div className="see-more">
        <button className="see-more-btn" onClick={handleClick}>{readMore? "Read less..." : "Read more..."}</button>
        </div>
        {readMore ?
        <div>
          <p>I value working in a dynamic industry where continually developing skill sets is essential and where there is always something to learn. 
          I spent the past eight years working in public education as a high school band teacher. Through this experience, 
          I developed strong communication skills, learned to collaborate and problem-solve with a variety of stakeholders, 
          and constantly modeled leadership. I am incredibly detail-oriented thanks to years of honing my craft as a flute player 
          and helping students refine their musical skills. Being an educator also taught me to balance my detail-oriented nature with time 
          constraints and to be extremely efficient.</p>
          <p>When I'm not coding, you'll find me spending time with my wife, Chloe, our toddler, Hazel, and our two dogs, Wyatt and Bella.
            Together, we enjoy visiting new playgrounds, going to museums, and attending live-performances.
          We are thrilled to be back in NYC, the best city in the world!
          </p>
          </div> : null}
        <div className="btn-wrapper">
        {/* <a href="#contact" className="btn btn-primary">Let's Connect</a> */}
        </div>
        </div>
      </div>
    </section>
    )
}

export default About;