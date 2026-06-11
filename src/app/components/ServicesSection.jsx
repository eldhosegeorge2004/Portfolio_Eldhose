"use client";
import React from "react";
import { motion } from "framer-motion";
import { CodeBracketSquareIcon, PaintBrushIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

const services = [
  {
    title: "Web Development",
    description: "I build fast, scalable, and responsive web applications using modern technologies such as React and Next.js. From business platforms to interactive web experiences, I transform ideas into reliable digital products that deliver real value.",
    icon: <CodeBracketSquareIcon className="w-12 h-12" />,
    bgClass: "bg-cyan",
    textClass: "text-cyan",
  },
  {
    title: "UI/UX Design",
    description: "I design user-centered interfaces that balance aesthetics with usability. My approach focuses on creating seamless experiences that are accessible, engaging, and easy to navigate across all devices.",
    icon: <PaintBrushIcon className="w-12 h-12" />,
    bgClass: "bg-magenta",
    textClass: "text-magenta",
  },
  {
    title: "Android Development",
    description: "I develop robust Android applications with clean architecture, responsive interfaces, and efficient performance. Whether it's integrating APIs or optimizing user flows, I build mobile experiences that users enjoy.",
    icon: <DevicePhoneMobileIcon className="w-12 h-12" />,
    bgClass: "bg-electricPurple",
    textClass: "text-electricPurple",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-24">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">
            What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">Do</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-obsidian/40 backdrop-blur-md border border-white/10 p-8 hover:-translate-y-2 transition-transform duration-500 group relative"
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 w-full h-1 ${service.bgClass} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              
              <div className={`${service.textClass} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="font-[family-name:var(--font-syne)] text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
              
              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-br from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
