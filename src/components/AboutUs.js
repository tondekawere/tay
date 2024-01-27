import React from 'react';
import Image from "next/image";
import img1 from "../../public/images/profile.png";
import Paragraphs from './Paragraphs';
import Heading from './Headings';
import styles from "../fonts/animatedBold.module.css";
import whitegif from "../../public/gifs/white.gif";
import { motion } from "framer-motion";
import Link from 'next/link';

const FramerImage = motion(Image);

const FeaturedProjects = ({img}) => {
  return (
    
      <span
        className=" w-1/7 p-2 py-1 ml-5 cursor-pointer overflow-hidden border border-light rounded-full lg:w-1/7"
      >
        <FramerImage
          src={img}
          className=" w-5 h-7 rotate-90"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw"
        />
      </span>
     
  );
};


const AboutUs = () => {
  return (
    <div className="p-20 pr-4 mt-20 xl:p-0 xl:mt-0 lg:mb-20">
      <div className="w-full xl:gap-10 sm:p-10 align-center justify-center flex sm:grid">
        <div className="w-1/2  -z-1">
          <Image
            src={img1}
            alt="image"
            style={{ scale: "1.65" }}
            className=" ml-32  overflow-hidden self-start -mt-32 xl:ml-20 xl:-mt-20 sm:-mt-10"
            priority
            sizes="(max-width:768px) 100vw, (max-width:1200px) 60vw, 33vw"
          />
        </div>
        <div className=" w-4/5 mt-20 z-0 sm:w-full">
          <Paragraphs
            text="Here is something about
            "
            className={
              "mb-2 text-left font-bold !text-xl lg:!text-4xl sm:!text-3xl xs:!text-2xl sm:!mb-2"
            }
          />
          <Heading
            text="Tay Dylan Magwaro"
            className="!text-7xl !leading-tight !text-left lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8"
          />
          <Paragraphs
            text="I decided to pursue a career in UI/UX Design because I desired to live creatively and 
            address people's true needs when it came to visual language. My constant goal is to enhance 
            the user’s experience while fusing pragmatism and aesthetics.
            "
            className="mb-2 pr-52 xl:pr-7 text-left !font-extralight !text-2xl lg:!text-2xl sm:!text-3xl xs:!text-2xl sm:!mb-2 sm:pr-0 sm:w-full"
            style={{
              lineHeight: "55px !important",
              fontWeight: "200 !important",
            }}
          />
          <Paragraphs
            text="I consider myself to be a delicate balance of process and creativity, fiercely motivated 
            by passion. The subtle yet profound nuances that are deeply ingrained in African cultures, such 
            as patterns, textures, historical writings, symbols, and color as a form of visual communication, 
            have a significant influence on my work.
            "
            className="mb-0 text-left xl:pr-7 pr-52 !text-2xl !font-extralight lg:!text-2xl sm:pr-0 sm:mt-5 sm:!text-3xl xs:!text-2xl  sm:!mb-2"
          />
          <div className="flex w-1/3  items-center self-start lg:self-center lg:w-2/3 mt-2">
            <Link
              href="/dummy.pdf"
              target={"_blank"}
              className="flex w-full items-center rounded-lg hover:underline overflow-hidden  group-hover:w-full transition-[width]
               ease duration-300  text-lg font-semibold capitalize text-light  hover:text-primary md:text-base dark:text-light
              hover:dark:text-light 
             "
              download={true}
            >
              Download CV{" "}
              <FeaturedProjects img={whitegif} className="w-0 gif" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs