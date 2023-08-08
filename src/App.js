import './App.css';

import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';



function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavBar /> */}
      <About />
      <Experience />
      {/* </Switch> */}
      
    </div>
  );
}

export default App;
