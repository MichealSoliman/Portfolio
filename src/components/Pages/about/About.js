import React from 'react'
import DownloadCV from './DownloadCV'
import Header from '../../header/Header'
import Footer from '../../footer/Footer'
import '../../hero/Hero'
import './About'
import './DownloadCV'
import CV from '../../CV/CV'









const About = () => {

  return (
    <div className='container'>
      <Header/>
     
      <div className='divider'></div>
      <div className="info">
        <div className="image">
         <img src=''  />
        </div>
        <div className="about" >
          <h2>
          Hello everyone ... <br />I am Michael Soliman,<br /> a front-end developer (React). I am very excited to work
          </h2>
          <p>
          "Hello, I'm a Front End Developer specializing in React.
           With a passion for crafting engaging user experiences,
            I thrive on turning designs into dynamic web applications.
             Proficient in React's component-based architecture and state management, 
             I enjoy building interactive UI components that enhance usability and functionality. 
             With a keen eye for detail and a dedication to clean, efficient code, 
             I'm committed to delivering high-quality front-end solutions that exceed expectations. 
             I'm excited to continue exploring the ever-evolving world of web development and contributing to innovative projects."
          </p>
        </div>
      </div>
      <div className='divider'></div>

      <div>
      <h1>My CV Downloader</h1>
      <CV/>
      
    </div>
     
      <div className='divider'></div>
      <Footer/>
    </div>
  )
}

export default About
