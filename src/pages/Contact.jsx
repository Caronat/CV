import React from "react";
import {
  FaCodepen,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobileAlt,
} from "react-icons/fa";
import BtnCopyClipboard from "../components/BtnCopyClipboard";
import Navigation from "../components/Navigation";

const Contact = () => {
  return (
    <div className="contact container">
      <Navigation />
      <div className="contact-content">
        <div className="header"></div>

        <div className="contact-box">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <span>
                <FaMapMarkerAlt />
              </span>
              <span>Péronne-en-Mélantois</span>
              <span>
                <BtnCopyClipboard text="Lille" />
              </span>
            </li>
            <li>
              <span>
                <FaMobileAlt />
              </span>
              <span>06 67 42 05 91</span>
              <span>
                <BtnCopyClipboard text="06 67 42 05 91" />
              </span>
            </li>
            <li>
              <span>
                <FaEnvelope />
              </span>
              <span>antonycaron91@gmail.com</span>
              <span>
                <BtnCopyClipboard text="antonycaron91@gmail.com" />
              </span>
            </li>
          </ul>
        </div>

        <div className="social-network">
          <ul>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>LinkedIn</h4>
              <FaLinkedin />
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Github</h4>
              <FaGithub />
            </a>
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h4>Codepen</h4>
              <FaCodepen />
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
