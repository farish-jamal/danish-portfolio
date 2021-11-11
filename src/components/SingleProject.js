import React from "react";

const SingleProject = ({ caption, imgUrl, description, link }) => {
  return (
    <div className="single__project">
      <img src={imgUrl} alt="" />
      <h2>{caption}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noreferrer">
        <button className="project__btn">Link</button>{" "}
      </a>
    </div>
  );
};

export default SingleProject;
