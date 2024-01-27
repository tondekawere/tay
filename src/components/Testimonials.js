import React, { useEffect } from "react";
import Heading from "./Headings";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import front from '../../public/images/beyond.png'
import front2 from '../../public/images/monalisa.png'

const FramerImage = motion(Image);

const Test = ({ img, name, position ,summary, link }) => {
    useEffect(() => {
      AOS.init({
        duration: 600, // Animation duration
        easing: "ease-out", // Animation easing
        delay: 200, // Delay between animations
        mirror: true, // Mirror animations on scroll up/down
      });
    }, []);
  return (
    <li
      className="relative flex  justify-center items-center pl-5 pr-5 gap-5  w-1/2  text-light bg-[#1B0B06]
    before:bg-[url(/images/tb.png)] before:[content:''] before:absolute before:top-0 before:z-0 before:left-16 before:w-20 
    before:h-full xl:before:left-11 lg:before:h-[30vh] lg:grid lg:before:rotate-90 lg:before:right-0 lg:before:left-32 
    lg:before:-top-16 md:before:left-28 md:before:w-[17%] md:before:h-[70vh] sm:w-full sm:before:left-32 sm:before:-top-10 
    sm:before:h-[42vh] xs:before:left-[41%] xs:before:-top-10 xs:before:h-[42vh"
      data-aos="fade-right"
    >
      <Link
        href={link}
        target="_blank"
        className="w-[45%] h-auto z-[1] inline-block overflow-hidden lg:m-auto sm:w-[60%] lg:mt-5"
      >
        <FramerImage
          src={img}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </Link>
      <div className="py-10 w-full lg:text-center lg:py-0">
        <h4 className="  my-2 font-medium text-3xl font-sans">{name}</h4>
        <hr className="w-full bg-light  " />
        <h6 className="  mb-2 font-medium font-sans text-xl">{position}</h6>
        <p className=" mb-5 !font-extraLight text-base ">{summary}</p>
      </div>
    </li>
  );
};

const Testimonials = () => {
 
  return (
    <div className="bg-[url(/images/A.png)] mt-20 mb-10 bg-cover bg-center bg-no-repeat  w-full ">
      <ul className="flex p-10 py-20 gap-10 sm:grid">
        <Test
          link="/"
          target="_blank"
          img={front}
          name="Beyond Bechani"
          position="Head of Design  | |  uncommon.org"
          summary="His work ethic us pristine, and he is easily adjustable to a given situation. His ability to go out of his way to help others has made him stand out. He is one of the most dedicated people I’ve worked with and is willing to put that extra help whenever you need it."
        />

        <Test
          link="/"
          target="_blank"
          img={front2}
          name="Monalisa Matika"
          position="Head of Design  | |  Velocity Inc."
          summary="His work ethic us pristine, and he is easily adjustable to a given situation. His ability to go out of 
            his way to help others has made him stand out. He is one of the most dedicated people I’ve worked with and is willing 
            to put that extra help whenever you need it."
        />
      </ul>
    </div>
  );
};

export default Testimonials;
