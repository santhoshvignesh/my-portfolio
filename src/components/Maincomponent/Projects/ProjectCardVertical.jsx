import React, { useState } from "react";
import "./ProjectCardVertical.css";

const projects = [
  {
    img: "./images/ProjectImages/Portraits/Mahendhi Poster.jpg",
    title: "Poster Design for Mahendhi-Artist",
  },
  {
    img: "./images/ProjectImages/Portraits/chips mock up.jpg",
    title: "Chips cover design and Mockup",
  },
  {
    img: "./images/ProjectImages/Portraits/Tamil universe-Recovered.png",
    title: "Poster Design for a shop ",
  },
  {
    img: "./images/ProjectImages/Portraits/benz jpg 1.jpg",
    title: "Car Launch Poster",
  },
  {
    img: "./images/ProjectImages/Portraits/yalu birthday.jpg",
    title: "Poster Design for a Baby Birthday",
  },
  {
    img: "./images/ProjectImages/Portraits/Temple invitation-2.png",
    title: "Invitation Design for a Temple Festival ",
  },
  {
    img: "./images/ProjectImages/Portraits/Ganesh Chadurthi.jpg",
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
