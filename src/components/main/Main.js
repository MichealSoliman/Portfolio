import React, { useState } from 'react'
import "./Main.css"
import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import {myProjects} from "./myProjects.js"
import { AnimatePresence, motion } from "framer-motion"
const Main = () => {
  const [currentActive , setCurrentActive] = useState("all");
  const [arr , setArr] = useState(myProjects);
  return (
    <main className='flex'>
    <section className='left-section flex '>


      <button onClick={()=>{
          setCurrentActive("all");
       const newArr = myProjects.filter((item)=>{
        
        return item.all === "all"
       })
       setArr(newArr)
      }} className={currentActive === "all" ? "active" :null}>
      all projects
      </button>


     
      <button onClick={()=>{
       setCurrentActive("CSS");
       const newArr = myProjects.filter((item)=>{
        return item.category === "CSS"
       })
       setArr(newArr)
      }}
       className={currentActive === "CSS" ? "active" :null}>
      HTML&CSS
      </button>


      <button onClick={()=>{
       setCurrentActive("Bootstrap");
       const newArr = myProjects.filter((item)=>{
        return item.category === "Bootstrap"
       })
       setArr(newArr)
      }}
       className={currentActive === "Bootstrap" ? "active" :null}>
      Bootstrap
      </button>


      <button onClick={()=>{
       setCurrentActive("JavaScript");
       const newArr = myProjects.filter((item)=>{
        return item.category === "JavaScript"
       })
       setArr(newArr)
      }}
       className={currentActive === "JavaScript" ? "active" :null}>
      JavaScript
      </button>

      <button onClick={()=>{
       setCurrentActive("React.js");
       const newArr = myProjects.filter((item)=>{
        return item.category === "React.js"
       })
       setArr(newArr)
      }}
       className={currentActive === "React.js" ? "active" :null}>
      React.js
      </button>




      
      
      
    </section>
    <section className='right-section flex'>
    
    

    

    <AnimatePresence>
      {arr.map((item)=>{
        return(
          
          
          <motion.article
          
          layout
          initial = {{transform: "scale(0)"}}
          animate = {{transform: "scale(1)"}}
          transition={{type: "spring", damping : 8}}
           key={item} className='cards'>
            <div className="img">
            <img src={item.imgPath} alt="" />
            </div>
           <div className="box">
             <h1 className='title'>
               {item.projectTitle}
             </h1>
             <p className='sub-title'>
               {item.subtitle}
             </p>
             <div className="flex info-box">
               <div className="icons">
                 <a href="#"><FaLink /></a>
                 <a href={item.urlGithub}><FaGithub /></a>
               </div>
               <div className="more flex">
               <a href={item.url}>
               <span>more</span>
               </a>
                 <a className='left' href={item.url}><FaArrowRight /></a>
               </div>
             </div>
           </div>
           
         </motion.article>
         
        
        )
       
      })}
      </AnimatePresence>
    </section>
    
    
    
    
    </main>
  )
}

export default Main
