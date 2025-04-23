"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiRedux,
  SiSvelte,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { FiPackage } from "react-icons/fi";

const skills = [
  {
    name: "React",
    icon: <SiReact />,
    color: "#61DAFB",
    level: 95,
    description:
      "Advanced proficiency in React, including hooks, context API, and performance optimization",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#000000",
    level: 90,
    description:
      "Expert in server-side rendering, static site generation, and API routes in Next.js",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38B2AC",
    level: 95,
    description:
      "Proficient in creating responsive, utility-first designs with Tailwind CSS",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
    level: 90,
    description:
      "Strong understanding of JavaScript fundamentals, ES6+, and asynchronous programming",
  },
  {
    name: "Redux",
    icon: <SiRedux />,
    color: "#764ABC",
    level: 85,
    description:
      "Experienced in state management with Redux, Redux Toolkit, and middleware",
  },
  {
    name: "Zustand",
    icon: <FiPackage />,
    color: "#433E38",
    level: 80,
    description:
      "Skilled in implementing lightweight state management with Zustand",
  },
  {
    name: "SvelteKit",
    icon: <SiSvelte />,
    color: "#FF3E00",
    level: 75,
    description:
      "Familiar with building fast, compiler-based applications with SvelteKit",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    color: "#339933",
    level: 80,
    description:
      "Capable of building server-side applications and APIs with Node.js",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#000000",
    level: 80,
    description:
      "Experienced in creating RESTful APIs and middleware with Express",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "#336791",
    level: 75,
    description:
      "Proficient in database design, queries, and optimization with PostgreSQL",
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
      staggerChildren: 0.1,
    },
  },
};

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-card/30">
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
            My <span className="text-primary">Skills</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Here are the technologies I work with to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skill Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Skill Icons Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="col-span-1 md:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                onClick={() => setSelectedSkill(skill.name)}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
                className={`bg-card border ${
                  selectedSkill === skill.name
                    ? "border-primary"
                    : "border-border"
                } rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-all duration-300`}
              >
                <div className="text-4xl mb-3" style={{ color: skill.color }}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-medium">{skill.name}</h3>
                <div className="mt-3 w-full bg-background/50 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-2 rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skill Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 bg-card border border-border rounded-lg p-6 md:p-8 sticky top-24"
          >
            <h3 className="text-xl font-bold mb-4">Skill Details</h3>
            {selectedSkill ? (
              <div>
                <div
                  className="text-6xl mb-4 mx-auto"
                  style={{
                    color: skills.find((s) => s.name === selectedSkill)?.color,
                  }}
                >
                  {skills.find((s) => s.name === selectedSkill)?.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">{selectedSkill}</h4>
                <div className="w-full bg-background/50 rounded-full h-3 mb-4">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{
                      width: `${
                        skills.find((s) => s.name === selectedSkill)?.level
                      }%`,
                    }}
                    transition={{ duration: 1 }}
                    className="h-3 rounded-full"
                    style={{
                      backgroundColor: skills.find(
                        (s) => s.name === selectedSkill
                      )?.color,
                    }}
                  />
                </div>
                <p className="text-muted-foreground">
                  {skills.find((s) => s.name === selectedSkill)?.description}
                </p>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <p>Click on a skill to see details</p>
                <div className="mt-4 animate-bounce text-4xl text-primary">
                  ↓
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
