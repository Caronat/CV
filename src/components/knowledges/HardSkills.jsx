import React from "react";
import ProgressBar from "./ProgressBar";

const HardSkills = () => {
  const skills = [
    { id: 1, value: "Html / Css", xp: 2 },
    { id: 2, value: "Bootstrap", xp: 1.5 },
    { id: 3, value: "Sass", xp: 1.2 },
    { id: 4, value: "JavaScript", xp: 2 },
    { id: 5, value: "ReactJS", xp: 1.5 },
    { id: 6, value: "MUI", xp: 1 },
    { id: 7, value: "Firebase", xp: 1 },
    { id: 8, value: "TypeScript", xp: 0.5 },
  ];

  return (
    <div className="hard-skills-container">
      <ProgressBar data={skills} className="hard-skills" title="compétences" />
    </div>
  );
};

export default HardSkills;
