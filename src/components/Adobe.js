import Heading from "./Headings";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Adobe() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      delay: 200,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[url(/images/A.png)] mt-20 mb-10 bg-cover bg-center bg-no-repeat w-full pt-30 pb-30 sm:pt-9 sm:pb-20 md:pt-7 md:pb-16 lg:pt-2 lg:pb-10">
      <div className="flex items-center justify-center">
        <Heading
          data-aos="fade-left"
          className="text-white my-32 ml-0 text-4xl sm:relative sm:z-2 sm:text-4xl sm:mt-0 sm:mb-0 sm:top-135 md:text-6xl lg:mt-110"
          text=" My Tool Kit."
        />
        <div className="flex  sm:flex-row gap-8 justify-center mr-52 sm:z-3 sm:ml-5 sm:mr-2 md:ml-20 md:mr-20">
          <div
            data-aos="fade-down"
            className="flex flex-col relative gap-8 sm:gap-30 sm:top-35 "
          >
            <motion.img
              src="./images/figma.png"
              className="w-4/5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
            <motion.img
              src="./images/ai.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: 4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col relative gap-8 sm:gap-30 sm:hidden sm:top-80"
          >
            <motion.img
              src="./images/ax.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            />
            <motion.img
              src="./images/ps.png"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ y: 4, delay: 0.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Adobe;
