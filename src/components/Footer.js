import React from 'react'
import Layout from './Layout'
import Link from 'next/link';
import {motion} from "framer-motion"; 
import { RiLinkedinFill } from "react-icons/ri";
import { GoMail } from "react-icons/go";
import { MdLocalPhone } from "react-icons/md";
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="w-full font-medium text-lg dark:text-light sm:text-base  ">
      <Layout
        className="z-0  h-full w-full p-32  dark:bg-dark xl:p-24 lg:p-10 md:p-12  sm:p-8 sm:px-10 sm:gap-20 md:gap-20 py-8 flex 
        items-center justify-between sm:grid xl:flex xl:gap-20 lg:pl-20 lg:py-6 md:w-full"
      >
        <div className="sm:w-[130%]">
          <motion.img
            src="./images/logo.png"
            className="md:m-auto "
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>

        <div className="grid sm:self-start md:self-start lg:self-start gap-10 xs:mt-10 w-[75%] md:w-full xs:w-full ">
          <div className="grid gap-5">
            <h5 className="">Quick Links</h5>
            <div className="flex xs:grid gap-5">
              <a className="">Discover Tay</a>
              <a>My Portfolio</a>
              <a>Contact Tay</a>
            </div>
          </div>
          <div className="grid gap-5 sm:grid">
            <h5 className="">Contact Tay</h5>
            <div className="flex xs:grid sm:grid xs:flex-wrap md:grid md:gap-3 xl:grid xl:gap-5 gap-16 xs:gap-5 sm:gap-5">
              <motion.a className="flex items-center gap-4">
                <motion.span
                  className="xs:hidden sm:block rounded-full border-light border-2 p-2 border-solid"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {" "}
                  <MdLocalPhone className=" cursor-pointer text-1xl" />{" "}
                </motion.span>{" "}
                +263 771 733 755
              </motion.a>
              <a className="flex items-center gap-4">
                <motion.span
                  className="xs:hidden sm:block rounded-full border-light border-2 p-2 border-solid"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <GoMail className=" cursor-pointer text-1xl" />
                </motion.span>{" "}
                magwarodylan5@gmail.com
              </a>
              <div className="flex gap-4">
                {" "}
                <motion.div
                  className="rounded-full border-light border-2 p-2 border-solid"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <RiLinkedinFill className=" cursor-pointer text-1xl" />
                </motion.div>
                <motion.div
                  className="rounded-full border-light border-2 p-2 border-solid"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <AiFillInstagram className=" cursor-pointer text-1xl" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
}

export default Footer
