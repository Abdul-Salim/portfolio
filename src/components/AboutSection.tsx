"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiCode, FiLayout, FiSmartphone, FiStar } from "react-icons/fi";

const skills = [
  {
    icon: <FiCode />,
    title: "Frontend Development",
    description:
      "Building responsive, performant web applications using React, Next.js, and modern JavaScript.",
  },
  {
    icon: <FiLayout />,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing interfaces with Tailwind CSS and modern design patterns.",
  },
  {
    icon: <FiSmartphone />,
    title: "Responsive Design",
    description:
      "Ensuring applications work flawlessly across all devices and screen sizes.",
  },
  {
    icon: <FiStar />,
    title: "Performance Optimization",
    description:
      "Optimizing websites for speed, accessibility, and search engine visibility.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-primary">Me</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            I'm a passionate Frontend Developer with 4 years of experience
            creating modern web applications.
          </motion.p>
        </motion.div>

        <div className="grid items-center">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="">
              <motion.h3
                variants={fadeInUp}
                className="text-2xl font-bold mb-4"
              >
                Frontend Developer & UI Specialist
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mb-6"
              >
                Hi there! I'm Abdul Salim, a frontend developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. With 4 years of experience in the field, I've
                worked on a variety of projects from simple websites to complex
                web applications.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="text-muted-foreground mb-8"
              >
                My expertise includes React ecosystem, Next.js, and state
                management with Redux and Zustand. I'm also skilled in backend
                technologies like Node.js, Express, and PostgreSQL, allowing me
                to work effectively across the entire stack.
              </motion.p>
            </div>
            <div className="p-5 flex flex-col shadow-md border rounded-lg h-fit">
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                <div>
                  <h4 className="font-bold mb-2">Name:</h4>
                  <p className="text-muted-foreground">Abdul Salim</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Education:</h4>
                  <p className="text-muted-foreground">B.Tech</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Experience:</h4>
                  <p className="text-muted-foreground">4 Years</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Location:</h4>
                  <p className="text-muted-foreground">Remote</p>
                </div>
              </motion.div>

              <motion.a
                variants={fadeInUp}
                href="#contact"
                className="inline-flex w-fit items-center justify-center px-6 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
              >
                Contact Me
              </motion.a>
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-card/50 border border-border rounded-lg p-6 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary text-2xl">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
