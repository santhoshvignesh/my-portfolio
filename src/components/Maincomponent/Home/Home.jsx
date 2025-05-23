import React from "react";
import "./Home.css";
import HomeIntro from "./HomeIntro";
import IdCard from "./IdCard";

function Home() {
  return (
    <div className="HomeElements">
      {" "}
      {/* Fixed the class name */}
      <div className="HOMEINTRO">
        <HomeIntro />
      </div>
      <div className="IDCARD">
        <IdCard />
      </div>
    </div>
  );
}

export default Home;
