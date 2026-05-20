import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome to the Home Page.</p>
    </div>
  );
}

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>This is the About Page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div className="page">
      <h1>Contact Page</h1>
      <p>This is the Contact Page.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;