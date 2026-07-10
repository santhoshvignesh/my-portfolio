import React, { useState } from "react";

import Frame5 from "/public/images/ProjectImages/LogoProjects/Frame 5.png";
import MyLogo from "/public/images/ProjectImages/LogoProjects/mylogo.png";
import SynergyLogo from "/public/images/ProjectImages/LogoProjects/SYNERGY-TEXT-LOGO-1-mockup.jpg";
import TuLogoMockup from "/public/images/ProjectImages/LogoProjects/TuLogomockup.png";

const projects = [
  {
    img: Frame5,
    title: "Logo design for a CCTV installation Shop",
  },
  {
    img: MyLogo,
    title: "Logo design for my Insta page",
  },
  {
    img: SynergyLogo,
    title: "Logo design for Consulting Company",
  },
  {
    img: TuLogoMockup,
    title: "Logo design for Browsing Center",
  },
];

function ProjectCard() {
  const [showMore, setShowMore] = useState(false);

  const handleViewPoster = (img) => {
    window.open(img, "_blank");
  };

  return (
    <div>
      <div className="projectContainer">
        <div className="SubTitle">Logo Designs</div>

        <div className="Project-Cards">
          {projects
            .slice(0, showMore ? projects.length : 4)
            .map((project, index) => (
              <div className="Project-card" key={index}>
                <div className="card-content">
                  <img
                    className="poster-image"
                    src={project.img}
                    alt={project.title}
                  />

                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="poster-title">{project.title}</div>

                      <button
                        className="view-btn"
                        onClick={() => handleViewPoster(project.img)}
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <button
          className="view-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;