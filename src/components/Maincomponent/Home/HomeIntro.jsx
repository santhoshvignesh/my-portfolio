import React from "react";
import "./HomeIntro.css";
import RoleSlider from "./RoleSlider";
import CvBtn from "./CvBtn";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function HomeIntro() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="homeContainer">
      <div className="intro">
        <div
          className="intoDescription"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p>
            {" "}
            Hi, I’m <span className="MyName"> VIGNESH </span>
          </p>
          <div className="" data-aos="fade-up" data-aos-delay="300">
            <RoleSlider />
          </div>

          <p className="objective" data-aos="fade-up" data-aos-delay="400">
            I bring ideas to life with creative design, seamless user
            experiences, and clean, responsive code.
          </p>
          <div className="" data-aos="fade-up" data-aos-delay="500">
            <CvBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeIntro;
