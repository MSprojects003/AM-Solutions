import React from 'react';
import wal1 from './assets/wal1.jpg';
import Header from './Header';
import { motion } from "motion/react"

function Wallpaper() {
  const Desktop=window.innerWidth >=768;
  return (
    <>
      <div 
        className="opacity-95 md:opacity-100 h-screen bg-center bg-cover flex flex-col justify-center" 
        style={{ backgroundImage: `linear-gradient(-45deg,rgb(0,0,0,0.36),rgb(0,0,0,0.85)),url(${wal1})` }}
      >
        <div className=" pt-10 z-10 font-bold font-Arimo text-4xl sm:text-4xl md:text-4xl lg:text-6xl text-gray-100 md:text-blue-100 md:text-left mx-3 pl-6 md:pl-10 md:w-[50%]">
         <motion.div
         initial={{opacity:0, y:100}}
         transition={{duration:1.5}}
         whileInView={{opacity:2, y:-20}}
         viewport={{once:true}}
         >
          <span 
          className="text-shadow" >
            Empower Your Business Journey with IT Expertise
          </span>
          </motion.div>
          {/* Buttons section */}
          <div className="flex  flex-col sm:flex-row gap-8 md:gap-4 mt-6 sm:mt-10 text-lg sm:text-xl md:text-2xl font-mono">
          <motion.span 
              
              initial={{opacity:0 ,translateX:-100}}
              transition={{duration:1}}
              whileInView={{opacity:1, translateX:0}}
              viewport={{once:true}}              ><a href="#Projects" className="bg-transparent  py-3  hover:shadow-xl hover:shadow-[rgb(0,0,0,0.35)] text-white  rounded-none sm:px-8 px-5 border-2 border-white">
             
              Projects
            </a> </motion.span>
           
            <motion.span 
              
              initial={Desktop?{opacity:0 ,translateX:100}:{opacity:0, translateY:-50}}
              transition={{duration:1}}
              whileInView={Desktop?{opacity:1, translateX:0}:{opacity:1, translateY:0}}
              viewport={{once:true}}
              > <a href="#Contact" className="lg:bg-grey-100 p-6  text-black  hover:shadow-xl hover:shadow-[rgb(0,0,0,0.35)] bg-gradient-to-tr from-gray-200 to-green-100 sm:px-8 md:px-10 py-3 rounded-sm border-2 border-white">
              Get Started
            </a>
            </motion.span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wallpaper;
