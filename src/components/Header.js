import React from 'react'
import  '../css/Header.css';

const Header = () => {
  return (
    
      <header>

{/* <!--Navigation--> */}
<div className="navbar navbar-top-default nav-radius navbar-expand-lg pb-0 ">
    <div className="nav-container ">
        <a href="" title="Logo" className="logo scroll">
        
        <span className="logo-name">Adeel Zahid</span>
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
            <li className="nav-li"><a href="#"className="nav-a">Home</a></li>
            <li className="nav-li"><a href="#"className="nav-a">About</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Blog</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Training</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Event</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Shop</a></li>
            <li className="nav-li"><a href="#"className="nav-a">Contact</a></li>
           
        </ul>
    

    </div>
</div>

</header>
    
  )
}

export default Header
