import React from "react";
import Navigation from "../components/Navigation";
import ProjectList from "../components/portfolio/ProjectList";

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <Navigation />
      <div className="portfolio-content">
        <ProjectList />
      </div>
    </div>
  );
};

export default Portfolio;
