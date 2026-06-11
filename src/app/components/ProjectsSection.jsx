"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RentFlow",
    description: "A comprehensive property management platform designed to simplify rent tracking, tenant management, and financial analytics. Built with a focus on performance, security, and an intuitive user experience.",
    image: "/images/projects/rent5.png",
    tag: ["All", "Web"],
    previewUrl: "https://rent-flow-xi.vercel.app",
    caseStudyUrl: "/projects/rentflow",
  },
  {
    id: 2,
    title: "Smart Tic Tac Toe",
    description: "An interactive game featuring an AI-powered opponent built using the Minimax algorithm. Designed to deliver a challenging and engaging experience while demonstrating advanced problem-solving techniques.",
    image: "/images/projects/tic2.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://tictactoe-neon-omega.vercel.app",
    caseStudyUrl: "/projects/tictactoe",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.9 },
    animate: { y: 0, opacity: 1, scale: 1 },
  };

  return (
    <section id="projects" className="py-12 md:py-24 scroll-mt-24">
      <div className="container mx-auto px-4">
        <h2 className="font-[family-name:var(--font-syne)] text-5xl lg:text-7xl font-black text-center text-white mb-16 tracking-tighter">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta">Projects</span>
        </h2>

        <div className="text-white flex flex-row justify-center items-center gap-4 py-6 mb-8">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>

        <ul ref={ref} className="flex flex-col gap-24 lg:gap-32 mt-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                previewUrl={project.previewUrl}
                caseStudyUrl={project.caseStudyUrl}
                index={index}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
