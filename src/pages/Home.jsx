import React from "react";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home container">
      <Navigation />
      <div className="home-content">
        <div className="content">
          <h1>Antony CARON</h1>
          <h2>Développeur Web</h2>
          <div className="pdf">
            <a href="./media/Antony_CARON_CV.pdf" target="_blank">
              Télécharger le CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
