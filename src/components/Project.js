import React from 'react'
import SingleProject from './SingleProject'
import './project.css'

const Project = () => {
 return (
  <div className="project">
    <div className="project__head">
      <h1>Project</h1>
    </div>
    <div className="project__section">
      <SingleProject />
      <SingleProject />
      <SingleProject />
      <SingleProject />
    </div>
  </div>
 )
}

export default Project

