import React, { useState } from "react";

const Project = ({ projectData }) => {
  const { id, name, languages, languagesIcons, source, info, picture, link } =
    projectData;

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="project">
      <div className="icons">
        {languagesIcons.map((icon) => (
          <i className={icon} key={icon}></i>
        ))}
      </div>
      <h3>{name}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={picture} alt="" />
      </a>
      <span className="infos" onClick={() => setShowInfo(!showInfo)}>
        <i className="fas fa-info-circle"></i>
      </span>

      {showInfo && (
        <div className="infos-container" onClick={() => setShowInfo(false)}>
          <div className="infos-content">
            <div className="head">
              <h2>{name}</h2>
              <div className="source-code">
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                >
                  Code source
                </a>
              </div>
            </div>

            <p className="text">{info}</p>

            <div
              className="button return"
              onClick={() => setShowInfo(!showInfo)}
            >
              Retourner sur la page
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
