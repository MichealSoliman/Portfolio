import React from 'react'
import "./Hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate,  } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import Lottie from "lottie-react";
import developerAnimation from "../../components/animation/developer.json"


import { FaGithub } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className='hero flex'>
    <div className="left-section">
      <div className="parent-avatar flex">
        <img  className='avatar' alt="" />
        
        <div className='verified'><FontAwesomeIcon icon={faCertificate} /></div>
      </div>
      <h1 className='title'>Software designer,<br />and front end developers <br />(React.js)</h1>
       <p className='subtitle'>Hello... <br /> I am Michael, a front-end programmer using React.js with more than tow years experieca</p>
   <div className="all-icons flex">
      <div className="icon">
      <a href="https://www.facebook.com/michealsoliman.micheal?mibextid=LQQJ4d"><MdFacebook /> </a>
          </div>
      <div className="icon">
      <a href="https://www.instagram.com/micheal_soliman1?igsh=enJpbmpsa2tvcGli"><FaInstagram /> </a>
      </div>
      <div className="icon">
      <a href="https://github.com/MichealSoliman"><FaGithub /> </a>
      </div>
      <div className="icon">
      <a href="https://www.linkedin.com/in/michael-soliman-82aa1524a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><FaLinkedin /> </a>
      </div>
   </div>
    </div>
    <div className="right-section">
    <div className='animation'>
    <Lottie animationData={developerAnimation}></Lottie>
    </div>

    
    </div>
    </section>
  )
}

export default Hero
