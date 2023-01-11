import {Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from './components/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;
