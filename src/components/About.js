import React, {useState } from "react";

import "../stylesheets/about.css"

function About() {
  const [readMore, setReadMore] = useState(false)

  function handleClick() {
    setReadMore(readMore => !readMore)
  }

  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="about-container">

        <div className="about-content">

        <h4>Determined Full-stack Software Engineer with extensive background in education and web-development. 
        Seeking opportunities to contribute and develop my skills in a challenging environment. </h4> 
        <p>
            As an alumni of the Yale School of Music, I understand the importance of detail-oriented work
            as well as the purusit of perfection. I thrive in a fast-paced, highly engaging work enviroment filled with collaberation, 
            and I embrace all opportunities with an eagerness to learn.
            Seeking opportunities in front-end, back-end, or full-stack web development.
        </p>
        <div className="see-more">
        <button className="btn-primary" onClick={handleClick}>{readMore? "Read less..." : "Read more..."}</button>
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
            I began to practice programming techniques and languages in the summer of 2021. I spent my early months completing certification and career courses
            offerred by CodeAcademy. I was enjoying honing my skill, but it was difficult to validate a career transition. I had an overflowing private lesson studio
            of low brass students and was expecting the birth of my first child. As 2023 approached, I set a New Year's Resolution to finally complete my transition.
            I applied for and was accepted to the Flatiron School in NYC for software engineering. 
            After completing over 500 hours of coding, completing fve seperate project reviews conducted by experienced instructors, and passing four interview-like coding challenges, I successfully graduated from my program.
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