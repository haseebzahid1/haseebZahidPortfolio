import React from 'react';
import  { greeting } from '../../portfolio';
import '../greeting/Greeting.css';
import SocialMedia from "../socialMedia/SocialMedia";
import Button from '../button/Button';
const Greeting = () => {
  return (
    <div className='greet-main'>
      <div className='container'>
       <div className='greeting-container'>
       <div className='greeting-left-div'>
       <h1 className='greeting-h1'>
        {" "}
        {greeting.title}
        {" "}
        <span className="wave-emoji">{"👋"}</span>
        </h1>

        <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
        <SocialMedia />
        <div className='btn-flex'>
          <Button text="Contact me" href="#contact" className="btn-1-ml"/>
          <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
        </div>
       </div>


        <div className="greeting-image-div">
        <img alt="saad sitting on table" src="./img/manOnTable.svg"></img>
        </div>
       </div>

      </div>
    </div>
  )
}

export default Greeting
