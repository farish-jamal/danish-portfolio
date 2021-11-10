import React from 'react'
import './header.css'

function Header() {
  const scrollFun = () => {
     window.scroll(0, 0);
  }
 return (
   <>
  <div className="header">
     <div className="header__left">
       <h3 onClick={scrollFun}>Danish Jamal</h3>
     </div>
     <div className="header__right">
       <div className="header__right__links">
       <a href="https://farishjamal.online"><i class="fa fa-github" aria-hidden="true"></i> </a>
       <a href="/"><i class="fa fa-instagram" aria-hidden="true" style={{color:"#8a3ab9"}}></i> </a>
       <a href="/"><i class="fa fa-twitter" aria-hidden="true" style={{color:"#0e76a8"}}></i> </a>
       <a href="/"><i class="fa fa-linkedin" aria-hidden="true" style={{color:"#4267B2"}}></i> </a>
       </div>
       <button className="header__btn">Admin</button>
     </div>
  </div>
  </>
 )
}

export default Header
