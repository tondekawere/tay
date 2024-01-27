import Layout from "@/components/Layout";
import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";



const projects = () => {
  return (
    <>
      <Head>
        <title>Tonde | Projects Page</title>
        <meta name="description" content="Tonderai kawere's first portfolio" />
      </Head>
      
    </>
  );
};

export default projects;
