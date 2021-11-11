import React from "react";
import { SingleSkill } from "./SingleSkill";
import "./skill.css";
import Fade from "react-reveal/Fade";

function Skill() {
  return (
    <div>
      <Fade left>
        <div className="skill__head">
          <h1>skills</h1>
        </div>
      </Fade>

      <div className="skill">
        <Fade right>
          <SingleSkill />
          <SingleSkill />
          <SingleSkill />
          <SingleSkill />
          <SingleSkill />
          <SingleSkill />
          <SingleSkill />
          <SingleSkill />
        </Fade>
      </div>
    </div>
  );
}

export default Skill;
