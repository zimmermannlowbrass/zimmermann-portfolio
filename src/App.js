import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/Contact';
import Education from './components/Education';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <About />
      <Portfolio /> 
      <Experience />
      <Education />
      <Contact /> 
      <h5>© James Zimmermann 2023</h5>    
    </div>
  );
}

export default App;
