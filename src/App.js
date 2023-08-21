import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';
import Nav from './components/Nav';



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
      <br/>
      <br/>
      <h5 style={{marginTop: "2rem"}}>© James Zimmermann 2023</h5>  
    </div>
  );
}

export default App;
