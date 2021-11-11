import SingleProject from './SingleProject'
import './project.css'
import Fade from 'react-reveal/Fade';
import React from "react";

const Project = ({posts}) => {

 return (
  <div className="project">
    <Fade right>
    <div className="project__head">
      <h1>Project</h1>
    </div>
    </Fade>
    <div className="project__section">
    {posts.map(({ id, post }) => (
      <SingleProject
        key={id}
        caption={post.caption}
         imgUrl={post.imgUrl}
         description = {post.description}
      />
    ))}
    </div>
  </div>
 )
}

export default Project

