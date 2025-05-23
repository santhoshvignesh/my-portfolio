import React, { useState } from "react";

const projects = [
  {
    img: "./images/ProjectImages/UiUx/resumate.png",
    title: "Resumate",
    Link: "https://www.figma.com/proto/WDRFN2pYya3RJdWLneEJ54/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=369%2C386%2C0.25&t=dbnjTkGpDkjeTajq-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
    description: "AI and ML based resume analyser and job suggesting  website",
  },
  {
    img: "./images/ProjectImages/UiUx/restaurent.png",
    title: "Restaurent-website",
    Link: "https://www.figma.com/proto/0mv9JkJas89aLProsgJtV6/Untitled?page-id=0%3A1&node-id=1-2&p=f&viewport=799%2C178%2C0.14&t=IZJ5jQq6iPKanUqw-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
    description:
      "A website design for a Restaurent to show food menu and Table booking",
  },

  {
    img: "./images/ProjectImages/UiUx/furnitureshop.png",
    title: "Furnitureshop-website",
    Link: "https://www.figma.com/proto/qIZt6edmvSyvG0cZR6QcXB/Furniture-Shop-Website?page-id=0%3A1&node-id=1-2&p=f&viewport=297%2C527%2C0.07&t=pAV1oomvUdl3eU0z-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
    description:
      "A web-design for a FurnitureShop to show their Products and Price",
  },
  {
    img: "./images/ProjectImages/UiUx/myresume.png",
    title: "My Portfolio",
    Link: "https://www.figma.com/proto/0yMZJ9dQgjU2mPYfaoVsgb/Untitled?page-id=0%3A1&node-id=136-278&p=f&viewport=585%2C380%2C0.13&t=BhXGhrkLsQxjlMQT-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2",
    description:
      "My Own Portfolio web-design to show my Design and Projects to clients",
  },
];

function ProjectCard() {
  const [showMore, setShowMore] = useState(false);

  const handleViewPoster = (Link) => {
    window.open(Link, "_blank");
  };

  return (
    <div>
      <div className="projectContainer">
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
                    style={{ borderRadius: "5px", marginBottom: "10px" }}
                  />
                  <div className="overlay">
                    <div className="overlay-content">
                      <div className="card-title">{project.title}</div>
                      <div
                        className="poster-description"
                        style={{ fontSize: "14px" }}
                      >
                        {project.description}
                      </div>
                      <button
                        className="view-btn"
                        onClick={() => handleViewPoster(project.Link)}
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
