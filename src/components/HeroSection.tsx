"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiRedux, SiSvelte } from "react-icons/si";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Technology icons data with positioning
  const techIcons = [
    {
      id: "react",
      name: "React",
      color: "#61DAFB",
      Icon: FaReact,
      size: 46,
      position: { top: "10%", right: "20%" },
      animation: {
        y: [-15, 5, -15],
        rotate: [0, 360],
      },
      transition: {
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
      },
    },
    {
      id: "nextjs",
      name: "Next.js",
      color: "#000000",
      Icon: SiNextdotjs,
      size: 40,
      position: { top: "25%", right: "35%" },
      animation: {
        y: [10, -10, 10],
        x: [-5, 5, -5],
      },
      transition: {
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "nodejs",
      name: "Node.js",
      color: "#539E43",
      Icon: FaNodeJs,
      size: 36,
      position: { top: "45%", right: "15%" },
      animation: {
        y: [0, -8, 0],
        rotate: [-5, 5, -5],
      },
      transition: {
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      color: "#38B2AC",
      Icon: SiTailwindcss,
      size: 42,
      position: { top: "65%", right: "28%" },
      animation: {
        y: [-5, 10, -5],
        scale: [1, 1.1, 1],
      },
      transition: {
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "javascript",
      name: "JavaScript",
      color: "#F7DF1E",
      Icon: FaJs,
      size: 38,
      position: { top: "20%", right: "10%" },
      animation: {
        y: [5, -5, 5],
        rotate: [0, -10, 0],
      },
      transition: {
        y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "css3",
      name: "CSS3",
      color: "#1572B6",
      Icon: FaCss3Alt,
      size: 34,
      position: { top: "40%", right: "40%" },
      animation: {
        y: [-8, 8, -8],
        x: [5, -5, 5],
      },
      transition: {
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "html5",
      name: "HTML5",
      color: "#E34F26",
      Icon: FaHtml5,
      size: 34,
      position: { top: "60%", right: "45%" },
      animation: {
        y: [8, -8, 8],
        rotate: [5, -5, 5],
      },
      transition: {
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "postgresql",
      name: "PostgreSQL",
      color: "#336791",
      Icon: FaDatabase,
      size: 32,
      position: { top: "75%", right: "12%" },
      animation: {
        y: [-7, 7, -7],
        scale: [0.9, 1, 0.9],
      },
      transition: {
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        scale: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      },
    },
    {
      id: "redux",
      name: "Redux",
      color: "#764ABC",
      Icon: SiRedux,
      size: 36,
      position: { top: "30%", right: "25%" },
      animation: {
        y: [0, 10, 0],
        rotate: [0, 360],
      },
      transition: {
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
      },
    },
    {
      id: "svelte",
      name: "Svelte",
      color: "#FF3E00",
      Icon: SiSvelte,
      size: 36,
      position: { top: "80%", right: "35%" },
      animation: {
        y: [5, -10, 5],
        x: [-5, 5, -5],
      },
      transition: {
        y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 9, repeat: Infinity, ease: "easeInOut" },
      },
    },
  ];

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-background/95"
    >
      {/* Abstract background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/5 to-blue-500/5 blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 z-10 flex flex-col items-center justify-center">
        {/* Centered content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-12"
        >
          <motion.div
            variants={itemVariants}
            className="inline-block mb-4 py-2 px-4 rounded-full bg-primary/10 border border-primary/20"
          >
            <span className="text-primary font-medium">
              Available for projects
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-muted-foreground mb-4"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent"
          >
            Abdul Salim
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 h-[40px] md:h-[60px]"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Specialist",
                2000,
                "Next.js Developer",
                2000,
                "UI/UX Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-muted-foreground"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground mx-auto mb-8 text-lg"
          >
            I build exceptional and accessible digital experiences for the web,
            focusing on responsive design, performance optimization, and
            user-centered interfaces.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex w-full justify-center flex-col md:flex-row gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-md border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
            >
              View My Work
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-4 space-x-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiTwitter size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Tech Icons in the background */}
        {/* <div className="absolute inset-0 z-0">
          <FloatingTechIcons3D />
        </div> */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-muted-foreground flex justify-center pt-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
