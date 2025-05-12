"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiSvelte,
} from "react-icons/si";

const projects = [
  {
    id: "oudh-markaz",
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
    image: "/images/oudh-markaz.png",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiReact key="react" />,
      <SiNodedotjs key="node" />,
      <SiExpress key="express" />,
      <SiPostgresql key="postgres" />,
    ],
    liveLink: "https://oudh-markaz-front-end.vercel.app/",
    githubLink: "https://github.com/Abdul-Salim/oudh_markaz_front_end",
    category: "fullstack",
  },
  {
    id: "personal-blog",
    title: "Personal Blog",
    description:
      "A simple and elegant personal blog platform to share your thoughts, stories, and ideas with the world.",
    image: "/images/blog.png",
    technologies: [
      <SiNextdotjs key="next" />,
      <SiReact key="react" />,
      <SiTailwindcss key="tailwind" />,
    ],
    liveLink: "https://abdul-salim-blog.vercel.app",
    githubLink: "https://github.com/Abdul-Salim/blog-app",
    category: "frontend",
  },
  {
    id: "dns-lookup",
    title: "DNS Lookup",
    description:
      "Query Domain Name System (DNS) records for a domain, to retrieve information like IP addresses (A/AAAA records), mail servers (MX records), name servers (NS records), and more.",
    image: "/images/dns.png",
    technologies: [<SiSvelte key="svelte" />, <SiTailwindcss key="tailwind" />],
    liveLink: "https://dns-lookup-phi.vercel.app/",
    githubLink: "https://github.com/Abdul-Salim/dns-lookup",
    category: "fullstack",
  },
];

const categories = ["all", "frontend", "fullstack"];

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

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // const indexOfLastProject = currentPage * projectsPerPage;
  // const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  // const currentProjects = filteredProjects.slice(
  //   indexOfFirstProject,
  //   indexOfLastProject
  // );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  useEffect(() => {
    console.log(activeCategory, filteredProjects);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-20 bg-background">
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
            My <span className="text-primary">Projects</span>
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and
            expertise
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center mt-8 space-x-2 md:space-x-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md capitalize transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-card text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-lg overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-center space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-white p-2 rounded-full hover:bg-primary/80 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-card text-foreground p-2 rounded-full hover:bg-foreground hover:text-background transition-colors"
                    >
                      <FiGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <div
                      key={idx}
                      className="text-xl text-muted-foreground hover:text-primary transition-colors"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
