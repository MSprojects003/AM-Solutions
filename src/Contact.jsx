import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn  } from 'react-icons/fa';
import Topic from './Topic';
import { FaWhatsapp } from 'react-icons/fa';
import { toast, ToastContainer  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import contact from './assets/contact.png';
import bg5 from './assets/bg4.jpg';
import {motion} from 'motion/react';
 


function Contact() {


    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "523390e2-41af-4cc8-8c4e-89fd408a2b44");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("message Sent Successfully!")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  const isDesktop= window.innerWidth >=768;

  return (
  <>
  <motion.div
   initial={{opacity:0.4}}
   transition={{duration:1.2}}
   whileInView={{opacity:1}}
   viewport={{once:true}}
>

  <div >
    <ToastContainer />
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-green-50 p-6" style={{
    backgroundImage:`linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.8)),url(${bg5}) `,
    backgroundSize: 'cover', // Ensures the image covers the entire div
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', 
  }} id="Contact">

    <motion.div initial={{opacity:0.5,translateY:50}}
    transition={{duration:1}}
    whileInView={{opacity:1, translateY:0}}
    viewport={{once:true}}>
      <Topic head1="Get in" head2="Touch" /></motion.div>
      <motion.div 
      initial={isDesktop?{opacity:0.2,translateX:70}:{opacity:0, translateY:30}}
      transition={{duration:1.2}}
      whileInView={isDesktop?{opacity:1,translateX:0}:{opacity:1,translaY:0}} viewport={{once:true}}>
      <div className="flex items-center justify-center">
        <div className="bg-transparent w-full max-w-4xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            {/* Form Section */}
            <motion.div
            initial={{opacity:0.2, translateX:100}}
            transition={{duration:1.2}}
            whileInView={{opacity:1,translateX:0}}
            viewport={{once:true}}>
            <div className="p-8 bg-gray-100">
              <form onSubmit={onSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name" name="Name"
                    className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-none focus:ring-2 focus:ring-blue-400"
                  required />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Contact Number</label>
                  <input
                    type="number"
                    placeholder="Phone Number" name="phone"
                    className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-none focus:ring-2 focus:ring-blue-400"
                  required />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email" name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-none focus:ring-2 focus:ring-blue-400"
                  required />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border-[1px] border-gray-700 rounded-none focus:ring-2 focus:ring-blue-400" required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-tr from-gray-900 to-gray-950 text-white py-3 rounded-none hover:from-blue-950 hover:to-gray-900 ease-in-out duration-500" aria-required
                >
                  {result ? result : "Send Message"}
                </button>
              </form>
            
            </div></motion.div>
            


            {/* Contact Info Section */}
            <div
  className="bg-gradient-to-br  text-white font-Arimo font-thin p-8 flex flex-col items-center justify-center"
  style={{
    backgroundImage: `
     
      linear-gradient(rgb(2 11 24 / 88%), rgba(39, 68, 116, 0.9)),
      url(${contact})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
><motion.div 
initial={{opacity:0,translateX:50 }}
transition={{duration:1.5}}
whileInView={{opacity:1 ,translateX:0}}
viewport={{once:true}}>
              <h3 className="text-3xl font-bold mb-14 text-gray-200 text-shadow">Contact us</h3>
              <div className="flex flex-col gap-4 items-start ">
                <div className="flex items-center mb-4 ">
                  <FaMapMarkerAlt className="text-2xl mr-3" />
                  <a href="https://www.google.com/maps/@6.9908866,79.9073102,20.18z?entry=ttu&g_ep=EgoyMDI0MTIwNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" className="text-blue-500 hover:text-blue-700">
                  <span className="text-lg sm:text-sm md:text-lg text-green-100 text-shadow">No.1113/1B,1, Dalupitiya Road, Sri Lanka, 11300</span></a>
                </div>
                <div className="flex items-center mb-4">
                  <FaPhoneAlt className="text-2xl mr-3 " />
                  <a href="tel:+94787987255" target='_blank'>
                  <span className="text-lg sm:text-sm md:text-lg text-green-100 text-shadow">+94 787 987 255</span></a>
                </div>
                <div className="flex items-center mb-4">
                  <FaEnvelope className="text-2xl mr-3" />
                  <a href="mailto:amsolutions28@gmail.com" target='_blank'>
                  <span className="text-lg sm:text-sm md:text-lg text-green-100 text-shadow">amsolutions28@gmail.com</span></a>
                </div>
               
              </div>
              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
  {/* Facebook */}
  <a
    href="https://www.facebook.com/share/14aAPXdZ3h/?mibextid=LQQJ4d"
    className="bg-gray-100 text-blue-600 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-600 hover:text-white duration-500"
  >
    <FaFacebookF />
  </a>



  {/* LinkedIn */}
  <a
    href="#"
    className="bg-gray-100 text-blue-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white duration-500"
  >
    <FaLinkedinIn />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/94787987255" target='_blank'
    className="bg-gray-100 text-green-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-green-500 hover:text-white duration-500"
  >
    <FaWhatsapp />
  </a>
   {/* Instagram */}
   <a
    href="#"
    className="bg-gray-100 text-pink-500 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-yellow-500 hover:text-white duration-500"
  >
    <FaInstagram />
  </a>
</div>
 </motion.div>
            </div>
            <br />
            <br />
           
          </div>
        </div>
      </div></motion.div>
    </div></div></motion.div>
    <a
  href="https://wa.me/94787987255" // Replace with your number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-10 right-6 scale-150 bg-gradient-to-tr from-green-600 to-green-700 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-green-900 hover:to-green-800 duration-300 transition  hover:text-gray-100 hover:shadow:md hover:shadow-[rgb(0,0,0,0.4)]"
  title="Chat with us on WhatsApp"
>
  <FaWhatsapp className="text-2xl" />
</a>
    </>
  );
}

export default Contact;
