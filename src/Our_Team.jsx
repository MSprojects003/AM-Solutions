import React, { useState, useEffect } from "react";
import db from "./assets/dp.jpg"; // Example image
import najad from "./assets/najad.jpg";
import ihsan from "./assets/ihsan2.png"; // Corrected import name
import image from "./assets/image.png";
import Slider from "react-slick";
import shareena from "./assets/shareena2.png";
import bg2 from "./assets/bg2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css"; // Import your custom styles
import Topic from "./Topic";
import { motion } from "framer-motion"; // Updated to framer-motion

const Our_Team = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // 1 card on mobile, 3 cards on desktop
    slidesToScroll: 1,
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // 2 seconds between slides
    pauseOnHover: true, // Pause on hover
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  const cards = [
    { id: 1, image: image, name: "Mohamed Atheef", title: "Tech Lead" },
    { id: 2, image: najad, name: "Mohamed Najad", title: "Software Engineer" },
    
    { id: 3, image: shareena, name: "Fathima Shareena", title: "UI-UX / Graphic Designer" },
    { id: 4, image: ihsan, name: "Mohamed Ihsan", title: "Marketing Executive" }, // Fixed image and id
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.4 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div
        className="bg-gradient-to-br from-gray-300 to-blue-100 py-32"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.35), rgba(0,0,0,0.78)), url(${bg2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          initial={{ translateY: 50 }}
          transition={{ duration: 0.6 }}
          whileInView={{ translateY: -40 }}
          viewport={{ once: true }}
        >
          <Topic head1="Our" head2="Team" />
        </motion.div>

        <motion.div
          initial={{ translateY: 50, opacity: 0, scale: 0.98 }}
          transition={{ duration: 1 }}
          whileInView={{ translateY: -20, opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-full px-14 relative bg-transparent">
            <Slider {...settings} className="flex items-center justify-center">
              {cards.map((card) => (
                <div key={card.id} className="p-4">
                  <div
                    className={`relative rounded-lg shadow-sm hover:shadow-md hover:shadow-[rgb(0,0,0,0.6)] shadow-[rgb(0,0,0,0.6)] mx-4 mb-8 transition-all duration-500 ${
                      isMobile
                        ? "mt-32 py-12 h-60 p-10"
                        : "ease-in-out hover:-translate-y-10 p-14 md:mt-24"
                    }`}
                    style={{
                      background: `linear-gradient(55deg, rgb(0,0,0,0.9), rgb(9 37 82 / 64%), rgb(25 95 114 / 50%), rgb(0,0,0,0.8))`,
                    }}
                  >
                    <div
                      className={`absolute top-[-60px] left-1/2 transform -translate-x-1/2 overflow-hidden ${
                        isMobile ? "w-28 h-28" : "w-36 h-36"
                      } rounded-full`}
                    >
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
                    <div className={`text-center ${isMobile ? "mt-8" : "mt-16"}`}>
                      <h3
                        className={`font-semibold text-shadow ${
                          isMobile ? "text-xl text-green-200" : "text-2xl text-green-100"
                        }`}
                      >
                        {card.name}
                      </h3>
                      <p className="text-gray-300 text-lg mt-6">{card.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Our_Team;