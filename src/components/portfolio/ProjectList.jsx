import React, { useState } from "react";
import { portfolioData } from "./portfolioData";
import Project from "./Project";

const ProjectList = () => {
  const projects = portfolioData;
  const options = [
    { id: 1, value: "Intégration" },
    { id: 2, value: "JavaScript" },
    { id: 3, value: "React" },
  ];

  const [selectedOption, setSelectedOption] = useState("JavaScript");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <ul className="radio-display">
        {options.map((option) => {
          return (
            <li key={option.id}>
              <input
                type="radio"
                name="radio"
                checked={selectedOption === option.value}
                value={option.value}
                id={option.value}
                onChange={handleOptionChange}
              />
              <label htmlFor={option.value}>{option.value}</label>
            </li>
          );
        })}
      </ul>

      <div className="projects-list">
        {projects
          .filter((project) => project.languages.includes(selectedOption))
          .map((project) => (
            <Project key={project.id} projectData={project} />
          ))}
      </div>
    </>
  );
};

export default ProjectList;
