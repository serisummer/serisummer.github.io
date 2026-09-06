import { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${navbar.offsetHeight}px`,
      );
    }
  }, []);
  
  return (
    <div id="navbar">
      <span id="name">Seraphine Weiya Wu</span>
      <nav id="nav-links-container">
        <ul id="nav-links">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
