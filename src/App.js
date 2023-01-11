import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/experience" element={<Experience />}/>
      </Routes>
    </div>
  );
}

export default App;
