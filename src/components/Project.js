import React from 'react'
import SingleProject from './SingleProject'
import './project.css'
import Fade from 'react-reveal/Fade';

const Project = () => {
 return (
  <div className="project">
    <Fade right>
    <div className="project__head">
      <h1>Project</h1>
    </div>
    </Fade>
    <div className="project__section">
    <Fade left>
      <SingleProject />
      <SingleProject />
      </Fade>
    </div>
  </div>
 )
}

export default Project

