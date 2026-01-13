"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "RentFlow",
    description: "A sleek and interactive Rent Management Dashboard that lets you effortlessly track tenants.",
    image: "/images/projects/rent5.png",
    tag: ["All", "Web"],
    previewUrl: "https://rent-flow-xi.vercel.app",
  },
  {
    id: 2,
    title: "Smart Tic Tac Toe Game",
    description: "A responsive Tic Tac Toe game with AI (Minimax) and 2-Player mode, built using HTML, CSS, and JavaScript.",
    image: "/images/projects/tic2.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://tictactoe-neon-omega.vercel.app",
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
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 md:mb-12">
          My Projects
        </h2>

        <div className="text-white flex flex-row justify-center items-center gap-4 py-6 mb-8">
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </div>

        <ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="h-full"
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.previewUrl} // assuming prevUrl is mainly for git/live based on data
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
