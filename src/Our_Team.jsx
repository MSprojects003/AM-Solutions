import React, { useState, useEffect } from "react";
import db from "./assets/dp.jpg"; // Example image
import najad from './assets/najad.jpg'
import ihsan from './assets/ihsan2.png'
import image from './assets/image.png'
import Slider from "react-slick";
import bg2 from './assets/bg2.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'; // Import your custom styles here (if it's in a separate file)
import Service from "./Service";
import Topic from "./Topic";
import { motion } from "motion/react"


const Our_Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const cards = [
    { id: 1, image: image, name: "Mohamed Atheef", title: "Tech Lead"},
    { id: 2, image: najad, name: "Mohamed Najad", title: "UI UX | Graphic Designer" },
    { id: 3, image: ihsan, name: "Mohamed Ihsan", title: "Marketing Executive"},
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <motion.div
    initial={{opacity:0.4}}
    transition={{duration:1}}
    whileInView={{opacity :1}}    >
      {/* Header Section */}
      <div
  className="bg-gradient-to-br from-gray-300 to-blue-100 py-32"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.35), rgba(0,0,0,0.78)), url(${bg2})`,
    backgroundSize: 'cover',         // Ensures the image covers the container
    backgroundPosition: 'center',    // Centers the image
    backgroundRepeat: 'no-repeat',   // Prevents image repetition
  }}
>

      <motion.div
    initial={{translateY:50}}
    transition={{duration:0.6}}
    whileInView={{translateY:-40}}    >
      <Topic head1="Our" head2="Team" />
      </motion.div>

        {/* Content Section */}
        <motion.div
        initial={{translateY:50 ,opacity:0, scale:0.98}}
        transition={{duration:1}}
        whileInView={{translateY:-20, opacity:1, scale:1}}
        viewport={{once:true}}
        >
        <div className="w-full  px-14  relative bg-transparent">
          {isMobile ? (
            // Mobile carousel
            <Slider {...settings} className="flex items-center justify-center">
              {cards.map((card) => (
                <div className="flex   gap-12">
                  <div key={card.id} className=" mt-32  py-12 h-60 rounded-lg shadow-sm hover:shadow-md hover:shadow-[rgb(0,0,0,0.6)] shadow-[rgb(0,0,0,0.6)] p-10 mx-4 mb-8 relative"  style={{
                  background:`linear-gradient(55deg,rgb(0,0,0,0.9),rgb(9 37 82 / 64%), rgb(25 95 114 / 50%),rgb(0,0,0,0.8))`}}>
                    <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 ">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="w-28  h-auto shadow-[rgb(0,0,0,0.7)] rounded-full  border-gray-100 shadow-xl"
                      />
                    </div>
                    <div className="mt-8 text-center">
                      <h3 className="text-xl font-semibold text-shadow text-green-200">{card.name}</h3>
                      <p className="text-gray-300 mt-6 text-lg">{card.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            // Desktop grid
            <div className="grid grid-cols-1 md:flex md:mt-24 md:justify-center sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center ">
              {cards.map((card) => (
                <div key={card.id} className="ease-in-out transition-all hover:-translate-y-10 duration-500 bg-gradient-to-tr from-rgba(5, 48, 116, 0.6) to-rgb(39, 68, 116, 0.6)  hover:shadow-lg hover:shadow-[rgb(0,0,0,0.7)] rounded-sm shadow-sm shadow-[rgb(0,0,0,0.6)] p-14 mx-4 mb-8 relative" style={{
                  background:`linear-gradient(55deg,rgb(0,0,0,0.9),rgb(9 37 82 / 64%), rgb(25 95 114 / 50%),rgb(0,0,0,0.8))`
                }}>
                 <div className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 overflow-hidden w-36 h-36 rounded-full">
  <motion.div
    initial={{ scale: 1 }}
    whileHover={{ scale: 1.2 }}
    transition={{ duration: 0.3 }}
    className="w-full h-full"
  >
    <img
      src={card.image}
      alt={card.name}
      className="w-full h-full object-cover"
    />
  </motion.div>
</div>

                  <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-shadow text-green-100">{card.name}</h3>
                    <p className=" text-gray-300 text-lg">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div></motion.div>
      </div>
      
    </motion.div>
    
  </>
  );
};

export default Our_Team;
