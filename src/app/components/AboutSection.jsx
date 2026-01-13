"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Robot from "./Robot";

import { motion } from "framer-motion";

import { CodeBracketIcon, GlobeAltIcon, CommandLineIcon, AcademicCapIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { category: "Languages", icon: <CodeBracketIcon className="w-5 h-5" />, skills: ["JavaScript", "Python", "C#"] },
          { category: "Web Technologies", icon: <GlobeAltIcon className="w-5 h-5" />, skills: ["Next.js", "HTML", "CSS"] },
          { category: "Tools & DB", icon: <CommandLineIcon className="w-5 h-5" />, skills: ["MySQL", "MongoDB", "Git", "Unity"] },
        ].map((group, index) => (
          <div key={index} className="bg-[#181818]/50 p-4 rounded-xl border border-white/10 hover:border-purple-500/50 transition-colors group">
            <div className="flex items-center gap-2 mb-3 text-purple-400 group-hover:text-purple-300">
              {group.icon}
              <h4 className="font-semibold uppercase tracking-wider text-sm">{group.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="bg-slate-800/80 px-3 py-1 text-xs rounded-full text-slate-300 border border-transparent group-hover:border-cyan-500/30 transition-all">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-6 pl-2">
        {[
          {
            title: "B.Tech in Computer Science & Design",
            place: "Viswajyothi College of Engineering & Technology",
            year: "2022 - Present",
            grade: "CGPA: 7.61",
            color: "text-purple-400"
          },
          {
            title: "Higher Secondary Education",
            place: "Govt. Higher Secondary School, Pezhakkappilly",
            year: "2020 - 2022",
            grade: "93.4%",
            color: "text-blue-400"
          },
          {
            title: "SSLC",
            place: "Nirmala Higher Secondary School",
            year: "2019 - 2020",
            grade: "98%",
            color: "text-cyan-400"
          }
        ].map((edu, index) => (
          <li key={index} className="relative pl-8 border-l-2 border-white/10 last:border-0 pb-6 last:pb-0">
            <span className={`absolute -left-[11px] top-0 p-1 bg-[#121212] border-2 rounded-full ${index === 0 ? 'border-purple-500 text-purple-500' : 'border-slate-600 text-slate-500'}`}>
              <AcademicCapIcon className="w-4 h-4" />
            </span>
            <div className="bg-[#181818]/60 p-4 rounded-lg border border-white/5 hover:border-white/10 hover:bg-[#181818] transition-all group">
              <h3 className="font-bold text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all w-fit">
                {edu.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-400 mt-1">
                <BuildingLibraryIcon className="w-4 h-4" />
                <span>{edu.place}</span>
              </div>
              <div className="flex justify-between items-center mt-3 border-t border-white/5 pt-3">
                <span className="text-xs font-mono text-slate-500 bg-slate-800/50 px-2 py-1 rounded">{edu.year}</span>
                <span className={`text-xs font-bold ${edu.color}`}>{edu.grade}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTabTransition] = useTransition();

  const handleTabChange = (id) => {
    startTabTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white scroll-mt-24">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 container mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative group"
        >

          <Robot />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-0 text-left flex flex-col h-full"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-6 max-w-lg">About Me</h2>
          <p className="text-base lg:text-lg text-slate-300 mb-8 leading-relaxed">
            I am a Computer Science and Design undergraduate with a passion for building consistent, scalable, and user-centric digital products. My academic background uniquely positions me at the intersection of engineering and aesthetics, allowing me to bridge the gap between technical functionality and visual design.
            <br /><br />
            I specialize in developing high-performance web applications, immersive mobile experiences, and interactive games. Driven by curiosity and a commitment to excellence, I focus on writing clean code and crafting intuitive interfaces that solve real-world problems.
          </p>

          <div className="flex flex-row justify-start space-x-6 border-b border-white/10 pb-2 mb-8">
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>

          </div>

          <div className="min-h-[150px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
