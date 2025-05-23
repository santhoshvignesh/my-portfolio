import React, { useRef } from "react";
import "./Myportfolio.css";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Services from "../Servicesinfo/Services";
import SkillSlider from "../Skills/SkillSlider";
import Projects from "../Projects/Projects";
import Contact from "../contact/Contact";

function Myportfolio() {
  // Create refs for smooth scrolling
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (section) => {
    const sectionRefs = {
      home: homeRef,
      services: servicesRef,
      skills: skillsRef,
      projects: projectsRef,
      contact: contactRef,
    };
    sectionRefs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolioElements">
      <Navbar scrollToSection={scrollToSection} />

      <section id="home" ref={homeRef}>
        <Home />
      </section>

      <section id="services" ref={servicesRef}>
        <Services />
      </section>

      <section id="skills" ref={skillsRef}>
        <SkillSlider />
      </section>

      <div className="ProjectComponents">
        <section id="projects" ref={projectsRef}>
          <Projects />
        </section>
      </div>

      <section id="contact" ref={contactRef}>
        <Contact />
      </section>

      <div className="footer">{/* <Footer /> */}</div>
    </div>
  );
}

export default Myportfolio;
