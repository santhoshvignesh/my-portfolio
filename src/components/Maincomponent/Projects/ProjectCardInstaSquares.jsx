import React, { useState } from "react";

const projects = [
  {
    img: "./images/ProjectImages/instasquares/Burger.jpg",
    title: "Poster Design for a Burger-Shop",
  },
  {
    img: "./images/ProjectImages/instasquares/Diwali wish poster.jpg",
    title: "Poster Design for Diwali Wish",
  },
  {
    img: "./images/ProjectImages/instasquares/juice social media poster.jpg",
    title: "Juice can label and mockup design",
  },
  {
    img: "./images/ProjectImages/instasquares/Gift yours2.jpg",
    title: "Poster Design for a shop Gift Yours",
  },
  {
    img: "./images/ProjectImages/instasquares/AadharMoneyService.png",
    title: "Poster Design for a shop",
  },
  {
    img: "./images/ProjectImages/instasquares/Tamil-Universe-CCTV-warning.png",
    title: "Poster Design for a CCTV installation shop",
  },

  {
    img: "./images/ProjectImages/instasquares/PanCardPoster.png",
    title: "Poster Design for a shop",
  },
  {
    img: "./images/ProjectImages/instasquares/Farewell_Poster.png",
    title: "Poster Design for Farewell for seniors",
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
        <div className="SubTitle">Insta Squares</div>
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
