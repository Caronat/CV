import React from "react";

const ProgressBar = ({ data, className, title }) => {
  return (
    <div className={className}>
      <h3>{title}</h3>
      <div className="timeline">
        <span>2020</span>
        <span>2021</span>
        <span>2022</span>
      </div>

      <div>
        {data.map((skill) => {
          const totalSize = 2;
          const xpSize = (skill.xp / totalSize) * 100 + "%";

          return (
            <div key={skill.id} className="skills-list">
              <li>{skill.value}</li>
              <div className="progress-bar" style={{ width: xpSize }}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;
