import IMG1 from "../../images/Brewery-Snob-Quiz.png"
import IMG2 from "../../images/Diner-Website.png"
import IMG3 from "../../images/Diner-Dash.png"
import IMG4 from "../../images/Well-Played.png"
import IMG5 from "../../images/I-heart-MTA.png"

const projects = [
    
{
    id: 1,
    image: IMG1,
    title: "Brewery Snob Quiz",
    technical: "JavaScript, Fetch Requests, APIs",
    description: "How well do you know the breweries in your hometown?",
    github: "https://github.com/zimmermannlowbrass/the-brewery-snob-quiz",
    demo: "https://youtu.be/Krx2wdjpjN8",
    live: "",
    order: 5
},

{
    id: 2,
    image: IMG2,
    title: "The New West Taghkonic Website",
    technical: "React, State, UI Semantic",
    description: "The best diner in the Hudson Valley gets a new look",
    github: "https://github.com/zimmermannlowbrass/the-new-west-taghkanic-website",
    demo: "https://youtu.be/raeIXjJtivA",
    live: "",
    order: 3
},
{
    id: 3,
    image: IMG3,
    title: "The West Taghkonic Adventure Game",
    technical: "Python3, SQLAlchemy, Alembic",
    description: "Seat the customers, take their orders, and DON'T GET STRESSED!",
    github: "https://github.com/zimmermannlowbrass/the-west-taghkonic-diner-adventure-game",
    demo: "https://youtu.be/aAlLPZJDxZE",
    live: "",
    order: 4
},
{
    id: 4,
    image: IMG4,
    title: "Well-Played",
    technical: "Flask, React, PostgreSQL",
    description: "Playground lovers find new playgrounds in their area",
    github: "https://github.com/zimmermannlowbrass/well-played-app",
    demo: "https://youtu.be/y0ASoL-yqio",
    live: "",
    order: 2
},
{
    id: 5,
    image: IMG5,
    title: "I <3 MTA",
    technical: "Flask, React, Redux, PostgreSQL",
    description: "Track your subway trips and create your own personal subway map!",
    github: "https://github.com/zimmermannlowbrass/i-heart-mta",
    demo: "https://youtu.be/ZwbZ1hnk_No",
    order: 1
}
]

export default projects;