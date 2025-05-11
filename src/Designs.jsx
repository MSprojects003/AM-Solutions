import React from 'react';
import Topic from './Topic';
import Slider from "react-slick";
import savoy from "./assets/savoy.png";
import imobile from "./assets/imobile.png";
import zahiraos from "./assets/zahira_os.png";
import startec from "./assets/startec.png";
import dog_nutrition from "./assets/dog_nutrition.png";
import "slick-carousel/slick/slick.css";
import bg3 from './assets/bg3.jpg';
import {motion} from 'motion/react';
import "slick-carousel/slick/slick-theme.css";
import post1 from "./assets/pic 1.jpg"
import post2 from "./assets/pic2.jpg"
import post3 from './assets/pic 3.jpg'
import post6 from "./assets/pic 6.jpg"
import post4 from "./assets/pic4.jpg"
import post5 from "./assets/pic 5.jpg"
import bg6 from './assets/bg6.jpg'
import post7 from './assets/pic 7.jpg'
 
import { easeInOut } from 'motion';

// Sample project data (replace with real image URLs)
const designs = [
    {  image: post1 },
  {  image: post2 },
  {  image : post3},
  {  image : post6 },
  {image : post4},
  {   image :post5},
  {image : post7}
   
   
   
];

const isDesktop=window.innerWidth >= 768;
const PostCard = ({ post }) => (
    
    <div className='m-10'>
  <div className="bg-transparent flex justify-center w-3/4 overflow-hidden md:shadow-none md:shadow-[rgba(23,24,23,0.67)] hover:scale-105 transition-transform duration-300">
  <motion.div
    
    initial={isDesktop?{opacity:0.1, scale:2}: {opacity:0,scale:1}}
    transition={isDesktop?{duration:1.5 }:{duration:1.7}}
    whileInView={isDesktop?{opacity:1,scale:1} : {opacity:1,scale:1}}
    viewport={ {once:false}}
    
    >
    
    <img
      src={post.image}
      alt={post.name}
      className="md:w-full md:h-48 h-32 w-auto  "

      style={{
        backgroundImage: `linear-gradient(40deg,rgba(0,0,0,0.8), rgba(0,0,0,0.7))`
      }}
    />
    </motion.div>

  </div>
  
  <div className='p-5'>
    
      <motion.div
  initial={isDesktop ? {opacity:0.4,scaleX:0.8}:{opacity:0.1}}
  transition={{duration:1.3}}
  whileInView={isDesktop ? {opacity:1,scaleX:1}:{opacity:1}}
  viewport={{once:true}}
  >
      <h3 className="text-lg font-bold text-green-200 text-shadow text-center hover:text-gray-200 duration-500">
        {post.name}
      </h3></motion.div> 
    </div>
    </div>
);

const Designs = () => {
    const settings = {
        infinite: true,
        speed: 500, // Transition speed
        slidesToShow: 3, // Number of slides to show
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable auto-play
        autoplaySpeed: 2000, // Time between slides in milliseconds (3 seconds)
        pauseOnHover: true, // Pause auto-play on hover
        responsive: [
          { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
          { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      };

      
  return (
    <>
     
     <motion.div
    
    initial={{opacity:0.6}}
    transition={{duration:1}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    
    >
     <div
  className="pt-12 bg-gradient-to-tr m-0 p-8 h-2/3 md:h-1/2 lg:min-h-screen"
  id="Designs"
  style={{
    backgroundImage: `linear-gradient(40deg,rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${bg6})`,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents repeating
  }}
>
<motion.div
    
    initial={{opacity:0.3,translateY:30}}
    transition={{duration:1.5}}
    whileInView={{opacity:1,translateY:0}}
    viewport={{once:true}}
    
    >
      <div className="pb-12">
        <Topic head1="Our" head2="Visuals" />
      </div>
      </motion.div>
      
      <div className="px-4 md:px-24 ">
      <motion.div 
      initial={{opacity:0.6,translateY:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,translateY:0}}>
        <Slider {...settings} >
          {designs.map((post, index) => (
            <PostCard key={index} post={post}  />
          ))}
        </Slider></motion.div>
      </div>
    </div></motion.div> </>
  );
};

export default Designs;
