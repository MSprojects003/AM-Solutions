import React from 'react';
import Topic from './Topic';
import { FaLaptopCode, FaMobileAlt,FaCog, FaPaintBrush,FaFilm, FaPalette, FaUserTie, FaShoppingCart, FaCode, FaDesktop } from 'react-icons/fa';
import { motion } from "motion/react";
import { Md10Mp } from 'react-icons/md';
import { feDropShadow } from 'motion/react-client';
import webd from './assets/webd.jpg';
import mobiled from './assets/mobiled.jpg'
import graphicd from './assets/graphicd.jpg'
import logod from './assets/logod.jpg';
import portfoliod from './assets/portfoliod.jpeg';
import ecommerced from './assets/ecommerced.jpg';
import softwared from './assets/softwared.jpg';
import desktopd from './assets/desktopd.jpg';
import assignmenthelp from './assets/assignmenthelp.jpg';
import bg4 from './assets/bg4.jpg';
import ve from './assets/video Editing.jpg';
import cr from './assets/cr.webp';
import mr from './assets/mr.avif';
// Service data with icons and descriptions
const services = [
  {
    title: 'Web Development',
    icon: <FaLaptopCode />,
    bg: webd,
    description: 'We craft sleek, responsive websites for a premium online presence.',
  },
  {
    title: 'Mobile App Development',
    icon: <FaMobileAlt />,
    bg:mobiled,
    description: 'Delivering elegant, user-friendly mobile applications on iOS and Android.',
  },
  {
    title: 'Graphic Design',
    icon: <FaPaintBrush />,
    bg: graphicd,
    description: 'High-quality, bespoke designs to elevate your brand aesthetics.',
  },
  {
    title: 'Logo Design',
    icon: <FaPalette />,
    bg:logod,
    description: 'Luxurious logos that embody sophistication and uniqueness.',
  },
  {
    title: 'Personal Portfolio',
    icon: <FaUserTie />,
    bg:portfoliod,
    description: 'Showcase your professional journey with a stunning portfolio.',
  },
  {
    title: 'E-commerce Solutions',
    icon: <FaShoppingCart />,
    bg:ecommerced,
    description: 'Elegant e-commerce platforms designed to enhance online sales.',
  },
  {
    title: 'Software Solutions',
    icon: <FaCode />,
    bg:softwared,
    description: 'Tailored software solutions for streamlined business operations.',
  },
  {
    title: 'Desktop Applications',
    icon: <FaDesktop />,
    bg:desktopd,
    description: 'Sophisticated desktop applications with powerful performance.',
  },
  {
    title: 'Educational Projects',
    icon: <FaLaptopCode />,
    bg:assignmenthelp,
    description: 'Innovative final and semester projects for Software Engineering and IT.',
  },
  {
    title: 'Video Editing',
    icon: <FaFilm />,
    bg:ve,
    description: 'Professional video editing services for all types of projects.' ,
  },
  {
    title: 'Computer Hardware Repairing',
    icon: <FaCog/>,
    bg:cr,
    description: 'Repair and maintenance for all computer hardware issues.',
  },
  {
    title: 'Mobile Phones Repairing',
    icon: <FaMobileAlt />,
    bg:mr,
    description: 'Expert repair services for all mobile phone brands and models.',
  },
];


// CardsGrid Component
const CardsGrid = () => {
  return (
    <motion.div
    initial={{opacity:0.4, translateX:-100}}
    transition={{duration:1}}
    whileInView={{opacity:1, translateX:0}}
    viewport={{once:true}}
    
    >
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8" >
      {services.map((service, index) => (
        <div
        key={index}
        className="md:hover:-translate-y-8 ease-in-out duration-500  bg-opacity-80 text-green-200 text-shadow shadow-lg rounded-sm shadow-[rgb(0,0,0,0.8)] p-6 flex flex-col items-center text-center hover:shadow-lg hover:shadow-[rgba(0,0,0,0.4)] transition-all"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.7)),
            url(${service.bg || 'default-image-path.jpg'})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
           <motion.div
           initial={{ opacity: 0, filter: "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))" }}
           whileInView={{ opacity: 1, filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.8))" }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}>
          <div className="text-5xl text-green-100 mb-4">{service.icon}</div></motion.div>
          <motion.div
          initial={{opacity:0,scale:0.9}}
          transition={{duration:1}}
          whileInView={{opacity:1, scale:1}}
          viewport={{once:true}}
          >
          <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-sm text-gray-200">{service.description}</p></motion.div>
        </div>
      ))}
    </div></motion.div>
  );
};

// Service Component
function Service() {
  return (
    <div id="Service">
      <div
  className="bg-gradient-to-br from-green-50 to-green-50 min-h-screen p-6"
  style={{
    backgroundImage: `linear-gradient(-200deg,rgba(0,0,0,0.8), rgba(0,0,0,0.35), rgba(0,0,0,0.78)), url(${bg4})`,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents repeating
  }}
> 
      <motion.div 
      initial={{opacity:0.7, scaleX:0.8}}
      transition={{duration:1.5}}
      whileInView={{opacity:1,scaleX:1}}>
        <Topic head1="Our" head2="Services !" /></motion.div>
        <CardsGrid />
      </div>
    </div>
  );
}

export default Service;
