import React from 'react'
import './header.css'

function Header() {
 return (
   <>
  <div className="header">
     <div className="header__left">
       <h3>Danish Jamal</h3>
     </div>
     <div className="header__right">
       <div className="header__right__links">
         <a href="/">About Me</a>
         <a href="/">Projects</a>
         <a href="/">Skills</a>
         <a href="/">Connect</a>
       </div>
       <button className="header__btn">Admin</button>
     </div>
  </div>
  </>
 )
}

export default Header
