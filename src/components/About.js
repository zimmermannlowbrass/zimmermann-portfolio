import React, {useState } from "react";

import "../stylesheets/about.css"

function About() {
    const [readMore, setReadMore] = useState(false)

  function handleClick() {
    setReadMore(readMore => !readMore)
  }

  return (
    <section id="about">
      <h2>My Story</h2>

      <div className="about-container">

        <div className="about-content">

        <h5>Full-stack Software Engineer with extensive background in education and web-development. 
        Seeking opportunities to contribute and develop my skills in a challenging environment. </h5> 
        <p>
            As an alumni of the Yale School of Music, I understand the importance of detail-oriented work
            as well as the purusit of perfection. I thrive in a fast-paced, highly engaging work enviroment filled with collaberation, 
            and I embrace all opportunities with an eagerness to learn.
            Seeking opportunities in front-end, back-end, or full-stack web development.
        </p>
        <div className="see-more">
        <button className="see-more-btn" onClick={handleClick}>{readMore? "Read less..." : "Read more..."}</button>
        </div>
        {readMore ?
        <div>
          <p>
                Having graduated into the COVID19 pandemic, I struggled to puruse my dream of becoming a fulltime performing musician. 
                Instead, I chose to puruse a career as a freelance music educator.
                Here, I developed the strong communication skills and personal responsibility skills necessary for success running a self-employed buisness. 
                Being an educator also taught me to balance my instincts toward perfection with time 
                constraints and to be extremely efficient.
          </p>
          <p>
            When I'm not coding, you'll find me spending time with my wife, Chloe, our toddler, Hazel, and our two dogs, Wyatt and Bella.
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