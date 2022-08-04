import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaMountain,
  FaImages,
  FaAddressCard,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navigation = () => {
  return (
    <IconContext.Provider value={{ className: "navigation-react-icon" }}>
      <div className="sidebar">
        <div className="id">
          <div className="id-content">
            <img src="./media/me.jpg" alt="profil" />
            <h3>Antony CARON</h3>
          </div>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <NavLink to="/">
                <FaHome />
                <span>Accueil</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/competences">
                <FaMountain />
                <span>Compétences</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">
                <FaImages />
                <span>Portfolio</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact">
                <FaAddressCard />
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="social-network">
          <ul>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="http://google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaCodepen />
              </a>
            </li>
          </ul>
          <div className="signature">
            <p>Antony Caron - 2022</p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Navigation;
