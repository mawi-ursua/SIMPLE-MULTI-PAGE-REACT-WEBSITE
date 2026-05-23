import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <nav className="navbar">

          <div className="logo">
            <h3>MAWIN</h3>
          </div>

          <div className="nav-links">
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;