import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/portfolio/Portfolio';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <About />
      <Experience />
      <Portfolio />      
    </div>
  );
}

export default App;
