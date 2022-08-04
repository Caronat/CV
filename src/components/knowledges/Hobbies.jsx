import React from "react";
import { IconContext } from "react-icons";
import { FaChess, FaCode, FaWalking } from "react-icons/fa";
import { GiBallPyramid } from "react-icons/gi";

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <IconContext.Provider value={{ className: "react-icons" }}>
        <h3>Intérêts</h3>
        <ul>
          <li className="hobby">
            <FaCode />
            <span>Code</span>
          </li>
          <li className="hobby">
            <GiBallPyramid />
            <span>Billard</span>
          </li>
          <li className="hobby">
            <FaWalking />
            <span>Randonnée</span>
          </li>
          <li className="hobby">
            <FaChess />
            <span>Jeux de société</span>
          </li>
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Hobbies;
