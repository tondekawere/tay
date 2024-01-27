import React from 'react'
import {motion} from "framer-motion"
import styles from "../fonts/animatedParagraphs.module.css";
import { useInView } from "react-intersection-observer";

const quote = {
    initial:{
        opacity:1,
    },
    animate:{
        opacity:1,
        transition:{
            delay: 0.5,
            staggerChildren: 0.08
        }
    }
}
const singleWord = {
    initial:{
        opacity:0,
        x:50,
    },
    animate:{
        opacity:1,
        x:0,
        transition:{
            duration:1
        }
    }
}

const Paragraphs = ({text, className=""}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px", // Adjust the rootMargin as per your requirement
  });

  return (
    <div className="py-2  sm:py-0 w-full mx-auto flex items-center justify-center  text-center overflow-hidden">
      <motion.p
        className={`inline-block w-full text-light font-medium text-5xl ${styles.animatedParagraphs}  ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
        style={{ lineHeight: "23px !important" }}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
}

export default Paragraphs;