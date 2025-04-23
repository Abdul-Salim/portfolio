"use client";

import { FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto py-12 px-4 md:px-10 lg:px-20">
        <div className="flex flex-col items-center justify-center">
          <ScrollLink
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="bg-primary text-white rounded-full p-3 cursor-pointer hover:bg-primary/90 transition-colors mb-8"
          >
            <FiArrowUp size={24} />
          </ScrollLink>

          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-6">
            Abdul Salim
          </h2>

          <div className="flex space-x-6 mb-8">
            <motion.a
              href="https://github.com/Abdul-Salim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiGithub size={20} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdul-salim-ps"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiLinkedin size={20} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FiTwitter size={20} />
            </motion.a>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              About
            </ScrollLink>
            <ScrollLink
              to="skills"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              Skills
            </ScrollLink>
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="experience"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              Experience
            </ScrollLink>
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
            >
              Contact
            </ScrollLink>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Abdul Salim. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Designed and built with 💜 by Abdul Salim
          </p>
        </div>
      </div>
    </footer>
  );
}
