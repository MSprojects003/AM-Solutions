"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { X } from "lucide-react"
import post1 from "./assets/pic 1.jpg"
import post2 from "./assets/pic2.jpg"
import post3 from "./assets/pic 3.jpg"
import post6 from "./assets/pic 6.jpg"
import post4 from "./assets/pic4.jpg"
import post5 from "./assets/pic 5.jpg"
import post7 from "./assets/pic 7.jpg"
import bg6 from "./assets/bg6.jpg"
import Topic from "./Topic"

// Sample project data with the actual imported images
const designs = [
  { image: post1 },
  { image: post2 },
  { image: post3 },
  { image: post6 },
  { image: post4 },
  { image: post5 },
  { image: post7 },
]

// Detect if we're on desktop - in a real Next.js app, use a proper hook
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(true)

  React.useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 768)
    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)
    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  return isDesktop
}

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
      {/* Close button positioned fixed to the viewport, not the modal */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors duration-200 focus:outline-none z-[60]"
        aria-label="Close modal"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        className="relative max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={imageSrc || "/placeholder.svg"}
            alt="Enlarged design"
            className="w-full h-full object-contain max-h-[80vh]"
          />
        </div>
      </motion.div>
    </div>
  )
}

const PostCard = ({ post, onImageClick }) => {
  const isDesktop = useIsDesktop()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div className="m-10">
      <div className="bg-transparent flex justify-center items-center w-full overflow-hidden md:shadow-none hover:scale-105 transition-transform duration-300">
        <motion.div
          initial={isDesktop ? { opacity: 0.1, scale: 0.4 } : { opacity: 0, scale: 0.6 }}
          transition={isDesktop ? { duration: 0.7 } : { duration: 0.75}}
          whileInView={isDesktop ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          className="flex justify-center items-center w-full"
        >
          {/* Image container with fixed aspect ratio and blur effect */}
          <div className="relative w-full h-0 pb-[100%] md:w-56 md:h-56 overflow-hidden rounded-lg group">
            {/* Blurred background overlay */}
            <div className="absolute inset-0 backdrop-blur-md bg-white/10 group-hover:backdrop-blur-sm transition-all duration-300"></div>

            <img
              src={post.image || "/placeholder.svg"}
              alt={post.name || "Design image"}
              className={`absolute inset-0 w-full h-full object-contain cursor-pointer transition-all duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              } group-hover:scale-105`}
              onClick={() => onImageClick(post.image)}
              onLoad={() => setImageLoaded(true)}
            />

            {/* Placeholder while image loads */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200/20 backdrop-blur-lg animate-pulse">
                <span className="sr-only">Loading...</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
      <div className="p-5">
        <motion.div
          initial={isDesktop ? { opacity: 0.4, scaleX: 0.8 } : { opacity: 0.1 }}
          transition={{ duration: 1.3 }}
          whileInView={isDesktop ? { opacity: 1, scaleX: 1 } : { opacity: 1 }}
          viewport={{ once: true }}
        >
          {/* Empty content as in the updated code */}
        </motion.div>
      </div>
    </div>
  )
}

const Designs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const isDesktop = useIsDesktop()

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className="pt-12 bg-gradient-to-tr m-0 p-8 h-2/3 md:h-1/2 lg:min-h-screen"
          id="Designs"
          style={{
            backgroundImage: `linear-gradient(40deg,rgba(0,0,0,0.8), rgba(0,0,0,0.7)), url(${bg6})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <motion.div
            initial={{ opacity: 0.3, translateY: 30 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            viewport={{ once: true }}
          >
            <Topic head1="Our" head2="Visuals ..." />
          </motion.div>
          <div className="px-4 md:px-24">
            <motion.div
              initial={{ opacity: 0.6, translateY: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <Slider {...settings}>
                {designs.map((post, index) => (
                  <PostCard key={index} post={post} onImageClick={openModal} />
                ))}
              </Slider>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={selectedImage} />
    </>
  )
}

export default Designs
