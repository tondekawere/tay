import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { motion} from 'framer-motion';
// import { dark } from '@mui/material/styles/createPalette';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillInstagram } from 'react-icons/ai';
import styles from "../fonts/animatedText.module.css";
import Image from "next/image";

const FramerImage = motion(Image);

import whitegif from "../../public/gifs/white.gif";
import phone from "../../public/gifs/phone.gif";
import mail from "../../public/gifs/mail.gif";



const CustomMobileLink = ({
  href,
  title,
  title2,
  title3,
  className = "",
  img1,
  img2,
  img3,
  img4,
  toggle,
  buttonC,
  call
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  let hoveredImage = null;

  if (isHovered && title === "Discover Tay") {
    hoveredImage = (
      <span className="w-1/7 p-2 py-1 ml-5 cursor-pointer overflow-hidden border border-light rounded-full lg:w-1/7">
        <FramerImage
          src={img1}
          className="w-5 h-7 rotate-90"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </span>
    );
  } else if (isHovered && title === "My Portfolio") {
    hoveredImage = (
      <span className="w-1/7 p-2 py-1 ml-9 cursor-pointer overflow-hidden border border-light rounded-full lg:w-1/7">
        <FramerImage
          src={img2}
          className="w-5 h-7 rotate-90"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </span>
    );
  }
   if (isHovered && title === "Contact Tay") {
     hoveredImage = (
       <div className="flex gap-60 ">
         <span className="w-1/7 p-2 py-1 ml-[-450px] cursor-pointer overflow-hidden border border-light rounded-full lg:w-1/7">
           <FramerImage
             src={img3}
             className="w-5 h-7 rotate-0"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.2 }}
             title={call}
             priority
             sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
           />
          
         </span>
         <span className="w-1/7 p-2 py-1 ml-5 cursor-pointer overflow-hidden border border-light rounded-full lg:w-1/7">
           <FramerImage
             src={img4}
             className="w-6 h-7 rotate-0"
             whileHover={{ scale: 1.05 }}
             transition={{ duration: 0.2 }}
             priority
             sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
           />
         </span>
       </div>
     );
   } 
  // Add conditions for other titles and corresponding images

  return (
    <motion.button
      href={href}
      className={`${className} relative w-80vh text-light dark:text-dark my-2`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title}
      {isHovered && (
        <motion.h1
          className={` text-9xl flex justify-center -left-40 items-center mt-32 w-screen absolute rounded-lg ${styles.animatedText} ${className} `}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {title2}
        </motion.h1>
      )}
      {isHovered && (
        <motion.button
          className={`text-xl font-extralight flex items-center -left-72 top-72 mt-10 ml-80 w-screen absolute rounded-lg ${
            toggle ? "justify-center" : ""
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {buttonC}

          {hoveredImage}
        </motion.button>
      )}
      {isHovered && (
        <motion.a
          className={`text-xl font-extralight flex items-center left-0 top-[18.3rem] mt-10 ml-80 w-screen absolute rounded-lg ${
            toggle ? "justify-start" : ""
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {call}
        </motion.a>
      )}
      {isHovered && (
        <motion.button
          className={`text-xl font-extralight flex items-center left-10 top-[18.3rem] mt-10 ml-10 w-screen absolute rounded-lg ${
            toggle ? "justify-center" : ""
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
        >
          {title3}
        </motion.button>
      )}

      <span
        className={`h-[1px] inline-block absolute bg-light left-32 bottom-3 group-hover:w-full 
        transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } `}
      ></span>
    </motion.button>
  );
};

const NavBar = () => {
 
  const [mode, setMode] = useThemeSwitcher( );
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  

  return (
    <header
      className="w-full flex items-center justify-between px-11 py-8 font-medium z-10 dark:text-light lg:px-16 
    absolute z-1 md:px-12 sm:px-8 "
    >
      <button
        type="button"
        className=" flex-col z-20 items-center justify-center outline-white outline p-4 px-2 lg:flex"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={handleClick}
      >
        <span className="sr-only">Open main menu</span>
        <span
          className={`  bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`  bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out opacity-100 my-0.5 ${
            isOpen ? "hidden" : "opacity-100"
          } `}
        ></span>
        <span
          className={`  bg-light block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5 ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {isOpen ? (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-[80vw] sm:min-w-[100vw] h-[100vh] xl:h-[50vh] md:h-[100vh] z-1 flex justify-between items-center flex-col absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 py-32 pb-40 bg-[#1B0B06] !text-light   backdrop-blur-md "
        >
          <nav className="grid self-start pl-32 xs:pl-10">
            <CustomMobileLink
              href="/"
              title="Discover Tay"
              title2="About Tay"
              buttonC="Download CV"
              img1={whitegif}
              className="  !text-light  "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="My Portfolio"
              title2="Portfolio"
              buttonC="Projects"
              img2={whitegif}
              className=" !text-light "
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Contact Tay"
              title2="Get In Touch"
              img3={phone}
              call="+263 771 733 755"
              img4={mail}
              title3="magwarodylan5@gmail.com"
              className=" !text-light "
              toggle={handleClick}
            />
          </nav>
          <nav
            className="grid text-center overflow-hidden absolute top-28 -right-60 mt-2 xl:-right-52 lg:-right-36  md:-right-32 
           sm:top-96 sm:bottom-20  sm:right-auto sm:mx-auto sm:flex sm:items-center sm:justify-center sm:gap-5"
          >
            <div className="w-1/2 sm:flex sm:w-full sm:gap-5">
              {" "}
              <motion.div
                className="rounded-full border-light border-2 p-2 border-solid"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <RiLinkedinFill className=" cursor-pointer text-2xl" />
              </motion.div>
              <motion.div
                className="rounded-full border-light border-2 p-2 border-solid my-3 mb-6 sm:my-0 "
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <AiFillInstagram className=" cursor-pointer text-2xl" />
              </motion.div>
            </div>
            <div className="w-full pt-11 rotate-90 m-auto sm:rotate-0 sm:m-0 sm:p-0">
              <span className="text-center ">Follow Tay</span>
            </div>
          </nav>
        </motion.div>
      ) : null}
    </header>
  );
}

export default NavBar