import React from 'react'
import  '../css/Header.css';

const Header = () => {
  return (
    
      <header>

{/* <!--Navigation--> */}
<div className="navbar navbar-top-default nav-radius navbar-expand-lg pb-0 ">
    <div className="nav-container ">
        <a href="#." title="Logo" className="logo scroll">
        
        <span className="grey-color"> &lt;</span>
            <span className="logo">Haseeb Zahid</span>
            <span className="grey-color">/&gt;</span>
        </a>
       

        <input type="radio" className="radio" name="side-bar" id="menu-bar" />
         <input type="radio"className="radio" name="side-bar" id="close-bar" />
        
         <label for="menu-bar" className="menu-destop menu-bar">
            <span className="menu-span"></span>
           </label>
        <ul className="nav-list">
            <label for="close-bar" className="btnn-close navbar__cancel-btn">
                <i className="fa fa-times"></i>
            </label>
            <li className="nav-li"><a href="#"className="nav-a">Skills</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Work Experiences</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Open Source</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Project</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Achievements</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Blogs</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Talks</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Contact Me</a></li>
           
        </ul>
    

    </div>
</div>

</header>
    
  )
}

export default Header
