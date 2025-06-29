import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Main from '../main/Main'
import Contact from '../contact/Contact'
import Footer from '../footer/Footer';
import './../../App.css'
import CV from '../CV/CV'
const Home = () => {
  return (
    <div className='container'>
      <Header/>
      <div className='divider'></div>
      <Hero/>
      <div className='divider'></div>
      <Main/>
      
      <div className='divider'></div>
      <Contact/>
      <div className='divider'></div>
      <Footer/>
       

    </div>
  )
}

export default Home
