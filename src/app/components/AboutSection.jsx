"use client";
import React, { useState } from "react";
import Image from "next/image";
import Robot from "./Robot";

import { motion } from "framer-motion";

import { CodeBracketIcon, GlobeAltIcon, CommandLineIcon, AcademicCapIcon, BuildingLibraryIcon } from "@heroicons/react/24/outline";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { category: "Languages", icon: <CodeBracketIcon className="w-6 h-6" />, skills: ["JavaScript", "Python", "C#"] },
          { category: "Web Tech", icon: <GlobeAltIcon className="w-6 h-6" />, skills: ["Next.js", "React", "Tailwind"] },
          { category: "Tools & DB", icon: <CommandLineIcon className="w-6 h-6" />, skills: ["MySQL", "Firebase", "Git", "GitHub", "Figma", "Unity"] },
        ].map((group, index) => (
          <div key={index} className="bg-obsidian/60 backdrop-blur-lg p-5 rounded-none border border-white/10 hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4 text-cyan group-hover:text-magenta transition-colors">
              {group.icon}
              <h4 className="font-[family-name:var(--font-syne)] font-bold uppercase tracking-widest text-sm text-white">{group.category}</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(skill => (
                <span key={skill} className="bg-white/5 px-3 py-1 text-xs font-mono rounded-none text-slate-300 border border-transparent group-hover:border-white/20 transition-all">
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
      <ul className="space-y-8 relative before:absolute before:left-[7px] before:top-0 before:h-full before:w-[2px] before:bg-gradient-to-b before:from-cyan before:via-magenta before:to-transparent">
        {[
          {
            title: "B.Tech in Computer Science & Design (Minor in ECE)",
            place: "Viswajyothi College of Engineering & Technology, Vazhakkulam",
            year: "2022 - Present",
            grade: "CGPA: 7.86",
            color: "text-cyan"
          },
          {
            title: "Higher Secondary Education",
            place: "Govt. Higher Secondary School, Pezhakkappilly",
            year: "2020 - 2022",
            grade: "93.4%",
            color: "text-magenta"
          },
          {
            title: "SSLC",
            place: "Nirmala Higher Secondary School, Muvattupuzha",
            year: "2019 - 2020",
            grade: "98%",
            color: "text-electricPurple"
          }
        ].map((edu, index) => (
          <li key={index} className="relative pl-8 sm:pl-10">
            {/* Timeline Dot */}
            <div className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-obsidian bg-${edu.color.replace('text-', '')} shadow-[0_0_10px_currentColor] z-10 ${edu.color}`}></div>
            
            <div className="bg-obsidian/60 backdrop-blur-lg p-6 border-l-2 border-transparent hover:border-l-magenta hover:bg-white/5 transition-all duration-300 group">
              <h3 className="font-[family-name:var(--font-syne)] font-bold text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-magenta group-hover:to-cyan transition-all w-fit mb-2">
                {edu.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <BuildingLibraryIcon className="w-4 h-4" />
                <span>{edu.place}</span>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <span className="text-xs font-mono text-slate-400 bg-white/5 px-2 py-1">{edu.year}</span>
                <span className={`text-sm font-black ${edu.color}`}>{edu.grade}</span>
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

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section id="about" className="text-white scroll-mt-24 relative py-20">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[500px] bg-electricPurple/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full h-full min-h-[400px] flex items-center justify-center bg-obsidian border border-white/5 p-8"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-magenta/5"></div>
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-magenta"></div>
            
            <div className="relative z-10 w-full h-full">
              <Robot />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <h2 className="font-[family-name:var(--font-syne)] text-5xl font-black text-white mb-8 tracking-tighter">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-magenta">Me</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
              I'm a Computer Science & Design graduate with a minor in Electronics & Communication Engineering. My passion lies at the intersection of technology, design, and innovation.
              <br /><br />
              I enjoy solving complex problems through clean, scalable code while crafting user experiences that feel intuitive and impactful. Whether I'm building web applications, designing interfaces, or developing mobile solutions, my goal is always the same: creating products that people love to use.
            </p>

            <div className="flex flex-row space-x-8 border-b border-white/10 pb-4 mb-8">
              <button onClick={() => handleTabChange("skills")} className={`text-lg font-[family-name:var(--font-syne)] font-bold tracking-wider transition-colors ${tab === "skills" ? "text-cyan border-b-2 border-cyan pb-4 -mb-[18px]" : "text-slate-500 hover:text-white"}`}>
                SKILLS
              </button>
              <button onClick={() => handleTabChange("education")} className={`text-lg font-[family-name:var(--font-syne)] font-bold tracking-wider transition-colors ${tab === "education" ? "text-magenta border-b-2 border-magenta pb-4 -mb-[18px]" : "text-slate-500 hover:text-white"}`}>
                EDUCATION
              </button>
            </div>

            <div className="min-h-[300px]">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
