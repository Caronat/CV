import React from "react";
import { IconContext } from "react-icons";
import { FaCheckSquare } from "react-icons/fa";

const SoftSkills = () => {
  return (
    <div className="soft-skills-container">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <h3>Autres compétences</h3>
        <ul>
          <li>
            <FaCheckSquare />
            Redux
          </li>
          <li>
            <FaCheckSquare />
            VBA
          </li>
          <li>
            <FaCheckSquare />
            SQL
          </li>
          <li>
            <FaCheckSquare />
            Git
          </li>
          <li>
            <FaCheckSquare />
            Méthodes agiles
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default SoftSkills;
