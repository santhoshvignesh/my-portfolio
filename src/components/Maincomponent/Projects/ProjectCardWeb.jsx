import React, { useState } from "react";
import "./ProjectCardWeb.css";

import SynergyWebsite from "/public/images/ProjectImages/webProjects/synergy.png";
import CodeQuest from "/public/images/ProjectImages/webProjects/codequest.png";

const projects = [
  {
    img: SynergyWebsite,
    title: "Synergy Website",
    description:
      "Contributed to the Synergy Website as a front-end developer in a freelance team project.",
    link: "https://synergyworld-malaysia.org",
  },
  {
    img: CodeQuest,
    title: "Code Quest",
    description:
      "Maintaining and enhancing Code Quest, a web-based coding skill platform built by seniors.",
    link: "https://acgcet-codequest.web.app",
  },
];

function ProjectCard() {
  const [showMore, setShowMore] = useState(false);

  const handleViewPoster = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="">
      <div className="webcardsContainer">
        <div className="webcards">
          {projects
            .slice(0, showMore ? projects.length : 3)
            .map((project, index) => (
              <div className="card" key={index}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="card-image"
                />

                <h2 className="card-title">{project.title}</h2>

                <p className="card-description">
                  {project.description}
                </p>

                <button
                  className="view-btn"
                  onClick={() => handleViewPoster(project.link)}
                >
                  Visit site
                </button>
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