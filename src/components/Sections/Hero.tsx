import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
} from "react-icons/fi";
import {
  FaReact,
  FaDocker,
} from "react-icons/fa";
import {
  SiRedux,
  SiNodedotjs,
  SiTypescript
} from "react-icons/si";
import profileImg from "@/assets/kishan.png";

const Hero: React.FC = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Software Engineer",
    "AI Engineer",
    "Backend & Distributed Systems",
  ];

  useEffect(() => {
    const current = roles[index];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(text.slice(0, -1));
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting]);


  return (
    <section className="relative min-h-screen bg-[#0f0c29] overflow-hidden text-white flex flex-col lg:block">

      {/* MOVING AURA AROUND PHOTO */}
      <motion.div
        animate={{
          x: [-100, -100, 100, 100, -100],
          y: [100, -100, -100, 100, 100],
          opacity: [0.6, 0.8, 0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute 
             w-[900px] h-[900px]
             bg-gradient-to-br from-purple-500 via-pink-500 to-teal-400
             rounded-full 
             blur-[180px]
             top-1/2 left-1/2
             -translate-x-1/2 -translate-y-1/2
             pointer-events-none"
      />
      {/* MOBILE STACK CONTAINER */}
      <div className="relative z-20 flex flex-col items-center text-center lg:text-left lg:items-start lg:absolute lg:left-16 lg:top-1/3 mt-20 lg:mt-0 px-6">

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-teal-300">
          Kishan Kumar
        </h1>

        <div className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/70 h-10">
          <span className="border-r-2 border-white pr-2 animate-pulse">
            {text}
          </span>
        </div>
      </div>

      {/* CENTER IMAGE */}
      <div className="relative flex justify-center items-center mt-16 lg:absolute lg:inset-0 px-4">

        {/* Responsive Circle */}
        <div className="absolute 
                  w-[90vw] h-[90vw] 
                  max-w-[380px] max-h-[380px]
                  sm:max-w-[450px] sm:max-h-[450px]
                  lg:w-[650px] lg:h-[650px] 
                  bg-white/10 rounded-full" />

        <img
          src={profileImg}
          alt="Profile"
          className="relative z-20 
               w-[92vw] 
               max-w-[420px] 
               sm:max-w-[480px]
               lg:w-[580px] 
               drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
        />
      </div>

      {/* CURVED RIGHT SIDE FLOATING ICONS */}
      <div className="absolute 
                right-4 lg:right-10 
                top-1/2 
                -translate-y-1/2 
                z-20 
                hidden lg:block">

        {/* Top */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute right-0 -top-40 w-14 h-14 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md"
        >
          <FaReact size={24} className="text-cyan-400" />
        </motion.div>

        {/* Upper Mid */}
        <motion.div
          animate={{ y: [6, -6, 6] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute right-10 -top-16 w-14 h-14 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md"
        >
          <SiRedux size={22} className="text-purple-400" />
        </motion.div>

        {/* Center */}
        <motion.div
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute right-14 top-10 w-14 h-14 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md"
        >
          <SiNodedotjs size={22} className="text-green-400" />
        </motion.div>

        {/* Lower Mid */}
        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 6.5, repeat: Infinity }}
          className="absolute right-10 top-36 w-14 h-14 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md"
        >
          <SiTypescript size={22} className="text-blue-400" />
        </motion.div>

        {/* Bottom */}
        <motion.div
          animate={{ y: [-6, 6, -6] }}
          transition={{ duration: 5.5, repeat: Infinity }}
          className="absolute right-0 top-60 w-14 h-14 flex items-center justify-center bg-white/10 rounded-full backdrop-blur-md"
        >
          <FaDocker size={22} className="text-sky-400" />
        </motion.div>

      </div>

      {/* BOTTOM SOCIAL ICONS */}
      <div className="flex lg:absolute lg:left-16 lg:bottom-12 mt-16 lg:mt-0 flex-row lg:flex-col gap-4 lg:space-y-6 z-20 justify-center mb-4">

        <a href="https://www.linkedin.com/in/kishan-kumar08/" className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-black" target="_blank">
          <FiLinkedin />
        </a>
        <a href="https://www.github.com/KishanKumar08" className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-black" target="_blank">
          <FiGithub />
        </a>
        <a href="https://www.leetcode.com/kishan141" className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-black" target="_blank">
          <FiCode />
        </a>
        <a href="mailto:kmali4551@gmail.com" className="w-11 h-11 flex items-center justify-center bg-white rounded-full text-black" target="_blank">
          <FiMail />
        </a>
      </div>
    </section>
  );
};

export default Hero;