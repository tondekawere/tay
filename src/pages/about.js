import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg"
import { useMotionValue, useSpring, useInView } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';




const about = () => {
  return (
    <>
      <Head>
        <title>Tonde | About Page</title>
        <meta name="description" content="Tonderai kawere's first portfolio" />
      </Head>
      
    </>
  );
}

export default about
