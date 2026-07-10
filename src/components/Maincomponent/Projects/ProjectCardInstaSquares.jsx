import React, { useState } from "react";

import Burger from "/public/images/ProjectImages/instasquares/Burger.jpg";
import DiwaliWishPoster from "/public/images/ProjectImages/instasquares/Diwali wish poster.jpg";
import JuicePoster from "/public/images/ProjectImages/instasquares/juice social media poster.jpg";
import cctv from "/public/images/ProjectImages/instasquares/cctv.png";
import AadharMoneyService from "/public/images/ProjectImages/instasquares/AadharMoneyService.png";
import TamilUniverseCCTV from "/public/images/ProjectImages/instasquares/Tamil-Universe-CCTV-warning.png";
import PanCardPoster from "/public/images/ProjectImages/instasquares/PanCardPoster.png";
import FarewellPoster from "/public/images/ProjectImages/instasquares/Farewell_Poster.png";

const projects = [
  {
    img: Burger,
    title: "Poster Design for a Burger-Shop",
  },
  {
    img: DiwaliWishPoster,
    title: "Poster Design for Diwali Wish",
  },
  {
    img: JuicePoster,
    title: "Juice can label and mockup design",
  },
  {
    img: cctv,
    title: "Poster Design for a shop Gift Yours",
  },
  {
    img: AadharMoneyService,
    title: "Poster Design for a shop",
  },
  {
    img: TamilUniverseCCTV,
    title: "Poster Design for a CCTV installation shop",
  },
  {
    img: PanCardPoster,
    title: "Poster Design for a shop",
  },
  {
    img: FarewellPoster,
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
                      <div className="poster-title">
                        {project.title}
                      </div>

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