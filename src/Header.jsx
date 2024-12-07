import React, { useState, useEffect } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import logo1 from './assets/logo2.png';
import Wallpaper from "./Wallpaper";
import About from "./About";
import Our_Team from "./Our_Team";
import Service from "./Service";
import Projects from "./Projects";
import Contact from './Contact';
import Footer from "./Footer";


function Header() {
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  // Scroll Listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logo
  const logo = (
    <div className="flex items-center">
      <img src={logo1} className="md:w-28 w-20" alt="Logo" />
    </div>
  );

  // Navigation Links
  const Links = [
    { name: "Home", href: '#Header'  },
    { name: "About us", href: '#About'  },
    { name: "Services", href: '#Service' },
    { name: "Projects", href: '#Projects' },
    { name: "Contact us", href: "#Contact" },
  ];

  return (
    <>
    <div id="Header">
      <nav
        className={`z-50 w-full py-3.5 px-6 shadow-2xl md:flex justify-between items-center transition-all  duration-500 ease-in-out ${
          active
            ? "sticky top-0 bg-gradient-to-r from-gray-900 via-[rgb(0,0,0,0.9)] to-gray-900 "
            : "absolute bg-[rgba(39,39,40,0.52)] md:bg-transparent md:backdrop-blur-md"
        }`}
    >
        {logo}

        {/* Navigation Links */}
        <ul
          className={`md:flex text-green-100 md:items-center md:px-0 px-5 md:pb-0 md:h-0 h-full md:static fixed md:bg-transparent bg-gray-900 md:w-auto w-72 left-0 top-0 ease-in-out duration-700 ${
            isOpen ? "left-0" : "left-[-600px]"
          }`}
        >
          <span className="md:hidden flex justify-center pt-4 pb-16">
            <img src={logo1} className="w-28" alt="Mobile Logo" />
          </span>
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:mx-4 text-center md:my-0 border-b pb-3 pt-3 font-bold border-gray-600 md:border-none"
              style={{
                textShadow: "2px 2px 6px rgba(0, 0, 0, 0.8)",
              }}
            >
              <a href={link.href} className="md:hover:text-blue-400 md:text-lg duration-300">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div
          onClick={() => setOpen(!isOpen)}
          className="md:hidden text-green-100 absolute top-4 right-5 w-7 h-7 cursor-pointer"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
      </nav>

      {/* Wallpaper Component */}
      <Wallpaper />
      <About/>
      <Our_Team/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer />
      </div>
    </>
  );
}

export default Header;
