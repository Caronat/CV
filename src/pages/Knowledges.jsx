import React from "react";
import Experiences from "../components/knowledges/Experiences";
import HardSkills from "../components/knowledges/HardSkills";
import Hobbies from "../components/knowledges/Hobbies";
import SoftSkills from "../components/knowledges/SoftSkills";
import Navigation from "../components/Navigation";

const Knowledges = () => {
  return (
    <div className="knowledges container">
      <Navigation />
      <div className="knowledges-content">
        <HardSkills />
        <Experiences />
        <SoftSkills />
        <Hobbies />
      </div>
    </div>
  );
};

export default Knowledges;
