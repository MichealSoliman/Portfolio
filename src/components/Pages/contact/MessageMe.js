import React from 'react'

import '../../../App'

import Header from '../../header/Header';
import Footer from '../../footer/Footer';


import Contact from '../../contact/Contact';
const MessageMe = () => {


  return (
    <div className='container'>
      <Header/>
    <div className='divider'></div>
   <Contact/>
  <div className='divider'></div>
   <Footer/>
    </div>
   
  )
}

export default MessageMe;

