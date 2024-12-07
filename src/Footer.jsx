import React from "react";
import logo from "./assets/logo2.png"; // Replace with your logo's actual path
import bg from './assets/footer.png';
import {motion} from 'motion/react';
const Footer = () => {
  return (
    <>
    <motion.div 
    initial={{opacity:0}}
    transition={{duration:1.5}}
    whileInView={{opacity:1}}>
    <footer className=" text-gray-300" style={{
        backgroundImage:`linear-gradient(-5deg,rgba(0,0,0,0.8),rgba(0,0,0,0.6),rgba(0,0,0,0.9)),url(${bg})`,
        backgroundSize: 'cover', // Ensures the image covers the entire div
         // Centers the image
        backgroundRepeat: 'no-repeat', 
    }}
    >
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-8 text-center">
        <h2 className="text-xl sm:text-xl lg:text-2xl font-semibold text-green-100 text-shadow">
          Become part of our network, utilize our services, and take your business to the next level.
        </h2>
      </div>

      {/* Divider */}
      <div className="mx-auto border-t border-gray-700 w-2/3 my-4"></div> {/* Centered HR Line */}

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img src={logo} alt="Company Logo" className="w-48 mb-4 md:hover:scale-x-125 duration-300" />
            <p className="text-sm mt-2">
              From web and mobile development to computer and mobile repairs, we’re here to serve you.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-lg">Get in Touch</h3>
            <p className="mt-2">No.1113/1B,1, Dalupitiya Road, Sri Lanka, 11300</p>
            <p>Email: <a href="mailto:amsolutions376@gmail.com" className="hover:text-blue-400">amsolutions376@gmail.com</a></p>
            <p><a href="tel:+94787987255"> Phone: +94 (78) 7987 255</a></p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg">Learn More</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#About" className="hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="#Service" className="hover:text-blue-400">Services</a>
              </li>
              <li>
                <a href="#Projects" className="hover:text-blue-400">Projects</a>
              </li>
              
            </ul>
          </div>

          {/* Join Us Section */}
          <div>
            <h3 className="text-white font-bold text-lg">Stay Connected</h3>
            <p className="mt-2 text-sm">
              Need web, mobile development, or computer repairs? Share your email, and we’ll contact you!
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-[rgb(0,0,0,0.7)] text-gray-300  focus:outline-none"
              />
              <button className="px-4 bg-cyan-900 text-white border-2 border-transparent  hover:bg-blue-600 transition">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Reserved Rights Section */}
      <div className="bg-gray-800 py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-400">
          © 2024 Your Company Name. All rights reserved.
        </div>
      </div>
    </footer></motion.div></>
  );
};

export default Footer;
