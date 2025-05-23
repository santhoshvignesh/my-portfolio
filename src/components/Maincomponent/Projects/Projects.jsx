import React from "react";
import ProjectCardInstaSquares from "./ProjectCardInstaSquares";
import ProjectCardVertical from "./ProjectCardVertical";
import ProjectCardLogo from "./ProjectCardLogo";
import ProjectCardUi from "./ProjectCardUi";
import ProjectCardWeb from "./ProjectCardWeb";
function Projects() {
  return (
    <div>
      <div className="ProjectsElements">
        <div className="Gd">
          <div className="title">Graphic Design Projects</div>
          <ProjectCardInstaSquares />
          <ProjectCardVertical />
          <ProjectCardLogo />
        </div>
        <div className="UId">
          <div className="title">UI/UX Design Projects</div>
          <ProjectCardUi />
        </div>
        <div className="Wd">
          <div className="title">Web-Development Projects</div>
          <ProjectCardWeb />
        </div>
      </div>
    </div>
  );
}

export default Projects;
