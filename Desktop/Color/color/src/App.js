import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import {Navbar} from './Pages/Navbar'
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}
