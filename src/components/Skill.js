import React from 'react'
import {SingleSkill} from './SingleSkill'
import './skill.css'

function Skill() {
 return (
   <div>
    <div className="skill__head">
      <h1>skills</h1>
    </div>
  <div className="skill">
     <SingleSkill />
     <SingleSkill />
     <SingleSkill />
     <SingleSkill />
     <SingleSkill />
     <SingleSkill />
     <SingleSkill />
     <SingleSkill />
  </div>
  </div>
 )
}

export default Skill
