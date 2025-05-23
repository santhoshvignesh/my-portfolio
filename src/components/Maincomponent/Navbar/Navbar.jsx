import React, { useState, useEffect } from "react";
import "./Navbar.css";
import ThemeBtn from "./ThemeBtn";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Function to close menu on clicking a link
  const handleNavClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false); // ✅ Closes the hamburger menu
  };

  // Auto-highlight active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="navbarContainer">
      <div className="navElements">
        <div className="MyName">
          <li className="navMyname">VIGNESH A</li>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-link ${menuOpen ? "open" : ""}`}>
          <li
            className={`navLinks ${activeSection === "home" ? "active" : ""}`}
          >
            <button onClick={() => handleNavClick("home")}>Home</button>
          </li>
          <li
            className={`navLinks ${
              activeSection === "services" ? "active" : ""
            }`}
          >
            <button onClick={() => handleNavClick("services")}>Services</button>
          </li>
          <li
            className={`navLinks ${activeSection === "skills" ? "active" : ""}`}
          >
            <button onClick={() => handleNavClick("skills")}>Skills</button>
          </li>
          <li
            className={`navLinks ${
              activeSection === "projects" ? "active" : ""
            }`}
          >
            <button onClick={() => handleNavClick("projects")}>Projects</button>
          </li>
          <li
            className={`navLinks ${
              activeSection === "contact" ? "active" : ""
            }`}
          >
            <button onClick={() => handleNavClick("contact")}>Contact</button>
          </li>
          <li className="navLinks">
            <ThemeBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
