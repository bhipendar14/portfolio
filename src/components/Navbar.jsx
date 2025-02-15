import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className="navbar">
      <h2 className="logo">Portfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ?  "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
}

export default Navbar;
