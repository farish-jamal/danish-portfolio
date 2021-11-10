import React from 'react'
import './about.css'
import Fade from 'react-reveal/Fade';

function About() {
 return (
  <div className="about">
    <Fade left>
     <div className="about__info">
       <h2>Hey, I am <span style={{color: "rgb(107, 146, 253)"}}>Danish Jamal.</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque earum at dolorum repellat nesciunt voluptas assumenda velit quidem facere! In odit, reiciendis quos dignissimos fugit rem odio eum qui. Blanditiis iste illo corrupti hic quas dicta nisi tempore. Quas quia sapiente fuga reprehenderit corrupti laudantium labore, nobis modi hic perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur accusamus non soluta esse exercitationem voluptates in quam ea! Iste beatae eos mollitia.</p>
     </div>
     </Fade>
     <Fade right>
     <div className="about__photo">
       <img src="https://farishjamal.online/image/Main_img%20(1).jpg" alt="photo_p" />
     </div>
     </Fade>
  </div>
 )
}

export default About
