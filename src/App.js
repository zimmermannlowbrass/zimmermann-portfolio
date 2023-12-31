import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Nav from './components/Nav';

import "./stylesheets/copyright.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Portfolio /> 
      <Experience />
      <Education />
      <Contact />  
      <h5 className='copyright'>© James Zimmermann 2023</h5>  
    </div>
  );
}

export default App;
