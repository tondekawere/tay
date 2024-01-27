import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../../public/images/card.png";
import image2 from "../../public/images/redbull.png"
import image3 from "../../public/images/mi5.png";
import gif from "../../public/gifs/white.gif";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Heading from "./Headings";
import Paragraphs from "./Paragraphs";


const FramerImage = motion(Image);

const FeaturedProjects = ({ title, summary, img, link, icon }) => {
   useEffect(() => {
     AOS.init({
       duration: 600, // Animation duration
       easing: "ease-out", // Animation easing
       delay: 200, // Delay between animations
       mirror: true, // Mirror animations on scroll up/down
     });
   }, []);
  return (
    <li className="relative flex w-full items-end  justify-between   gap-32 lg:flex-col  lg:p-8   ">
      <div
        className="w-1/4 flex  items-end justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6"
        data-aos="fade-up"
      >
        <div className="grid ">
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h5 className="my-2 w-full text-left text-dark dark:text-light text-md font-bold  sm:text-sm">
              {title}
            </h5>
          </Link>
          <p className=" font-medium text-xl text-dark dark:text-light sm:text-sm">
            {summary}
          </p>
        </div>
        <motion.div
          className=" w-20 xs:w-10 sm:w-10 md:w-10 lg:w-11 xl:w-10 p-2 py-2  cursor-pointer overflow-hidden border border-light 
    rounded-full"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          data-aos="fade-up"
        >
          <Link
            href={link}
            target="_blank"
            className="w-11  text-dark dark:text-light"
          >
            <FramerImage
              src={icon}
              alt={title}
              className="w-full h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
      </div>
      <Link
        href={link}
        target="_blank"
        className="w-2/3 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        data-aos="fade-up"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
    </li>
  );
};

const Projects = ({ title, summary, img, link, icon }) => {
    useEffect(() => {
      AOS.init({
        duration: 600, // Animation duration
        easing: "ease-out", // Animation easing
        delay: 200, // Delay between animations
        mirror: true, // Mirror animations on scroll up/down
        media:
          "screen and (min-width: 992px):fade-right, screen and (max-width: 991px):fade-up",
        
        
      });
    }, []);
  return (
    <li className="gap-20 flex w-full items-end justify-start p-6 lg:grid lg:w-[48%] sm:w-[45%] xs:w-full lg:gap-4  xs:p-4 ">
      <Link
        href={link}
        target="_blank"
        className="w-2/5 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        data-aos="fade-right"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div
        className="w-1/5 lg:w-full flex gap-0 items-end justify-between mt-4 "
        data-aos="fade-up"
      >
        <div className="grid">
          <Link
            href={link}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h5 className="my-2 w-full text-left  text-dark dark:text-light text-md font-extraLight lg:text-2xl">
              {title}
            </h5>
          </Link>
          <p className="font-medium text-xl text-light lg:text-lg md:text-base">
            {summary}
          </p>
        </div>

        <motion.div
          className="  xs:w-10 sm:w-10 md:w-10 lg:w-11 xl:w-10 p-2 py-2 cursor-pointer overflow-hidden border border-light 
    rounded-full"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          data-aos="fade-up"
        >
          <Link
            href={link}
            target="_blank"
            className="w-20  text-dark dark:text-light"
          >
            <FramerImage
              src={icon}
              alt={title}
              className="w-11 h-auto"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
      </div>
    </li>
  );
};

const MyWork = () => {
    useEffect(() => {
      AOS.init({
        duration: 600, // Animation duration
        easing: "ease-out", // Animation easing
        delay: 200, // Delay between animations
        mirror: true, // Mirror animations on scroll up/down
        media:
          "screen and (min-width: 992px):fade-right, screen and (max-width: 991px):fade-up",
      });
    }, []);
  return (
    <>
      <ul className="w-full mb-16 flex  flex-col items-center justify-center ">
        <Paragraphs
          text="Check out some of my work"
          className="!pt-20 !mb-5 !text-2xl"
        />
        <Heading
          text="My Portfolio"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xl:text-6xl"
        />
        <ul className="grid   gap-16 p-28 pt-10 lg:flex lg:flex-wrap lg:gap-3 md:grid-cols-1 md:gap-y-16 sm:px-5 xs:grid">
          <FeaturedProjects
            title="UX/UI Design"
            summary="The National Art Gallery App - Designed for the National Gallery of Zimbabwe"
            icon={gif}
            link="/"
            img={image1}
          />
          <Projects
            title="Package Design"
            summary="Redbull Afrika Edition - Concept Can For Africa"
            icon={gif}
            link="/"
            img={image2}
          />
          <Projects
            title="Branding Design"
            summary="MI5 Group - Visual Language Of The Brand"
            icon={gif}
            link="/"
            img={image3}
          />
        </ul>
        <div
          className="flex w-full px-28 justify-between items-center "
          data-aos="fade-up"
        >
          <span className="h-1 w-8/12 bg-light xs:hidden"></span>
          <span className="h-1 w-2/12 bg-light flex items-center gap-5  lg:min-w-fit xs:w-screen ">
            {" "}
            <p className=" text-light relative bottom-10 left-6 lg:left-0 cursor-pointer text-base ">
              {" "}
              All Projects
            </p>
            <motion.div
              className="flex  items-center relative bottom-10 left-6 lg:left-0 justify-center h-7 p-1 py-2 cursor-pointer 
              overflow-hidden border border-light rounded-full"
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.img
                src="./gifs/white.gif"
                className="w-4 h-17 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>{" "}
          </span>
        </div>
      </ul>
    </>
  );
};

export default MyWork;





