import React from 'react'

const SingleProject = ({caption, imgUrl, description}) => {
  return (
    <div className="single__project">
    <img src={imgUrl} alt="" />
    <h2>{caption}</h2>
    <p>{description}</p>
    <button className="project__btn">Link</button>
  </div>
  )
}

export default SingleProject


