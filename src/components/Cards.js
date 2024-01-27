import AnimatedText from "@/components/AnimatedText";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import redbul from "../../public/images/redbull.png"

const FramerImage = motion(Image);




const TopCard = ({ img, title, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border  dark:border-light border-dark border-solid rounded-2xl">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl  bg-light  " />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer inline-block overflow-hidden rounded-lg"
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
      <Link href={link} target="_blank">
        <h5 className="font-bold text-2xl text-dark dark:text-light w-full text-left mt-2 my-3 hover:underline xs:text-lg">
          {title}
        </h5>
      </Link>
      <p className="text-sm mb-2 text-light">{summary}</p>
    </li>
  );
};

const Card = () => {
  return (
    <>
      <div className="w-full mb-16 flex flex-col items-center justify-center ">
        <AnimatedText
          text="Words Can Change The World!"
          className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl xl:text-6xl"
        />
        <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
          <TopCard
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img={redbul}
          />
          <TopCard
            title="Build A Custom Pagination Component In Reactjs From Scratch"
            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time="9 min read"
            link="/"
            img={redbul}
          />
        </ul>
      </div>
    </>
  );
};

export default Card;
