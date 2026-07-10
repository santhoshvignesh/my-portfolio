import React, { useState } from "react";
import "./ProjectCardVertical.css";

import MahendhiPoster from "/public/images/ProjectImages/Portraits/Mahendhi Poster.jpg";
import ChipsMockup from "/public/images/ProjectImages/Portraits/chips mock up.jpg";
import TamilUniverse from "/public/images/ProjectImages/Portraits/Tamil universe-Recovered.png";
import SRComputers from "/public/images/ProjectImages/Portraits/SRComputers.png";
import YaluBirthday from "/public/images/ProjectImages/Portraits/yalu birthday.jpg";
import TempleInvitation from "/public/images/ProjectImages/Portraits/Temple invitation-2.png";
import GaneshChadurthi from "/public/images/ProjectImages/Portraits/Ganesh Chadurthi.jpg";

const projects = [
  {
    img: MahendhiPoster,
    title: "Poster Design for Mahendhi-Artist",
  },
  {
    img: ChipsMockup,
    title: "Chips cover design and Mockup",
  },
  {
    img: TamilUniverse,
    title: "Poster Design for a shop",
  },
  {
    img: SRComputers,
    title: "Poster design for a Computer Service Shop",
  },
  {
    img: YaluBirthday,
    title: "Poster Design for a Baby Birthday",
  },
  {
    img: TempleInvitation,
    title: "Invitation Design for a Temple Festival",
  },
  {
    img: GaneshChadurthi,
    title: "Poster Design for Ganesh Chaturthi",
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
        <div className="SubTitle">Vertical Visions</div>

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