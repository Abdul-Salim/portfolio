"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    title: "Software Engineer",
    company: "iLeaf Solutions",
    location: "Cochin",
    date: "March 2023 - Present",
    description: [
      "Leveraged modern web technologies like Next.js, React, Sveltekit and Directus CMS to create business administration tools.",
      "Reduced bundle size by 35% through code splitting and lazy loading techniques",
      "Collaborated with designers and back-end developers to create responsive and accessible web applications.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Byju's",
    location: "Bangalore",
    date: "Nov 2021 - Feb 2023",
    description: [
      "Revamped the Byju's website with captivating user interfaces using Next.js, Styled components and strapi, catering to over 100 million monthly users.",
      "Implemented cron jobs and batch jobs, automating critical processes for optimal and cost-effective system performance, ensuring timely execution of scheduled tasks.",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Integrated RESTful APIs and improved application performance",
      "Implemented unit and integration tests with Jest and React Testing Library",
    ],
  },
  {
    title: "Junior Software Engineer",
    company: "Quintet Solutions",
    location: "Cochin",
    date: "Jan 2021 - Sep 2021",
    description: [
      "Developed responsive forms and front-end integrations to streamline workflows",
      "Worked with JavaScript, HTML, CSS, and React",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Created modular UI components adhering to industry standards, improving maintainability.",
    ],
  },
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="experience" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInLeft}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Work <span className="text-primary">Experience</span>
          </motion.h2>
          <motion.div
            variants={fadeInLeft}
            className="w-20 h-1 bg-primary mx-auto mb-8"
          />
          <motion.p
            variants={fadeInLeft}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            My professional journey and the companies I've worked with
          </motion.p>
        </motion.div>

        <div ref={ref} className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <motion.div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform md:-translate-x-1/2" />

          {/* Experience Timeline */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background transform -translate-x-1/2 z-10 flex items-center justify-center">
                  <FiBriefcase className="text-background" />
                </div>

                <div
                  className={`md:w-1/2 ml-12 md:ml-0 ${
                    index % 2 === 0 ? "md:pl-12" : "md:pr-12"
                  }`}
                >
                  <div className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <h4 className="text-primary font-semibold mb-2">
                      {exp.company}
                    </h4>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <FiCalendar className="mr-1" />
                        <span>{exp.date}</span>
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
