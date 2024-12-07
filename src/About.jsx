import React from 'react';
import db from './assets/dp.jpg';
import Topic from './Topic';
import { motion } from "motion/react"
import bg1 from './assets/bg1.jpg';


function About() {
const isDesktop = window.innerWidth >=768;

  return (
    <>
    <div className=''   id='About'
    style={{backgroundImage: `
     
      linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)),  
      url(${bg1})
    `,}}
    
    >
    <motion.div
        initial={{ scale: 0.7, opacity:0.5 }}
        whileInView={{ scale: 1 ,opacity:1}}
        transition={{ duration: 1 }}
        viewport={{once:true}}
      >
      <div className='pt-10 -mb-10'>
        
       <Topic  head1="About" head2='us' />
       
       </div>
       </motion.div>


    <motion.div 
    initial={{translateX:-100}}
    transition={{duration:1.5}}
    whileInView={{translateX:0}}
    viewport={{once:true}}
    >
      <div className=" py-10 flex flex-col md:flex-row md:px-16 px-6">
        {/* Left Section with Image */}
      
        <div className="relative w-full md:w-80 mb-8 md:mb-0 mx-auto">
        <motion.div 
    initial={{opacity:0.3  , translateX:-100}}
    transition={{duration:0.7}}
    whileInView={{opacity:1, translateX:0}}
    viewport={{once:true}}
    
    
    >
          <img 
  src={db} 
  alt="Mohammed Atheef"
  className="rounded-sm shadow-xl w-full h-auto" 
  style={{
    maskImage: window.innerWidth >= 768 
      ? 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)' 
      : undefined,
    WebkitMaskImage: window.innerWidth >= 768 
      ? 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0) 100%)' 
      : undefined,
  }} 
/>
<div className="text-xl font-thin text-center font-mono text-cyan-100 mb-4">
          Founder
        </div></motion.div>
        </div>

        {/* Right Section with Text */}
        <div className="flex flex-col justify-center items-center md:items-start md:ml-16 w-full">
            

        <div className="text-center md:text-left text-lg font-light mb-6">
          <motion.div 
          initial={{ translateX:-70,opacity:0.3 }}
          transition={{duration:1.5}}
          whileInView={{translateX:0, opacity:1}} 
          viewport={{once:true}}
         >
  <span className="font-semibold text-green-100 text-shadow text-2xl">"Hi! I'm Mohammed Atheef"</span></motion.div>

  <p className="mt-4 text-teal-100">
  <motion.div 
          initial={isDesktop ? { translateX: -120, opacity: 0 } : { translateY: 100, opacity: 0 }}
          transition={isDesktop?{duration:1.5}:{duration:1}}
          whileInView={isDesktop ?{translateX:0, opacity:1}:{translateY: 0, opacity: 1 }} 
          viewport={{once:true}}>
    As the founder of <span className='font-semibold text-shadow text-cyan-200'>" AM Solutions "</span>, I lead a team of skilled professionals dedicated to delivering 
    innovative and cutting-edge digital solutions. Our expertise spans web design, graphic design, web development, 
    mobile app development, logo design, and custom software solutions, including desktop applications and 
    enterprise-level POS systems. </motion.div>

    <br />
    <br />
    <motion.div 
          initial={{ translateX:-150,opacity:0 }}
          transition={{duration:1.9}}
          whileInView={{translateX:0, opacity:1}} 
          viewport={{once:true}}>
    At <span className='font-semibold text-cyan-200 text-shadow'>" AM Solutions "</span>, we prioritize delivering seamless user experiences, exceptional design, and 
    robust development. We craft tailored solutions that drive business growth, enhance online presence, 
    and help brands thrive in an increasingly competitive digital landscape.</motion.div>
  </p>
</div>


           
        </div>
      </div></motion.div></div>
    </>
  );
}

export default About;
