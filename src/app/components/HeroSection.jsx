"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Soft Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-magenta/10 rounded-full blur-[150px] animate-pulse-slow pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[120px] animate-blob pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Section - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left z-20"
          >
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <span className="text-cyan font-mono text-sm tracking-widest uppercase">Welcome to my portfolio</span>
            </div>
            
            <h1 className="font-[family-name:var(--font-syne)] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[1.1] mb-6">
              <span className="text-white block">Hi, I'm</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta via-electricPurple to-cyan">
                Eldhose George
              </span>
            </h1>
            
            <div className="h-12 sm:h-16 mb-6">
              <TypeAnimation
                sequence={[
                  "UI/UX Designer",
                  1500,
                  "Frontend Developer",
                  1500,
                  "Digital Creator",
                  1500,
                ]}
                wrapper="h2"
                speed={50}
                repeat={Infinity}
                className="font-[family-name:var(--font-syne)] text-2xl sm:text-3xl lg:text-4xl font-bold text-white/80"
              />
            </div>

            <p className="text-slate-400 text-lg sm:text-xl font-light mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I create digital products that combine thoughtful design, modern technology, and exceptional user experiences. My focus is on building solutions that are not only functional and scalable but also intuitive and visually engaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a
                href="https://cal.com/eldhose-george-e76cdg"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-magenta to-electricPurple text-white font-bold tracking-widest uppercase shadow-lg shadow-magenta/20 hover:shadow-magenta/40 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Schedule Meeting
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                </span>
              </a>
              <a
                href="/resume.pdf"
                download="Eldhose_George_Resume.pdf"
                className="group px-8 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm text-white font-bold tracking-widest uppercase hover:bg-white/10 hover:border-cyan/50 hover:text-cyan transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right Section - Glassmorphic Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end z-10 w-full"
          >
            <div className="relative w-full max-w-[400px] xl:max-w-[500px] aspect-[3/4]">
              
              {/* Floating Element 1 - Top Left */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -left-2 md:-left-8 z-30 bg-obsidian/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan to-electricPurple flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                </div>
                <div>
                  <p className="text-white font-bold font-mono">Full Stack</p>
                  <p className="text-slate-400 text-xs tracking-wider">ENGINEERING</p>
                </div>
              </motion.div>

              {/* Floating Element 2 - Bottom Right */}
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -right-2 md:-right-4 z-30 bg-obsidian/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex items-center gap-4"
              >
                <div>
                  <p className="text-white font-bold font-mono text-right">UI/UX</p>
                  <p className="text-slate-400 text-xs tracking-wider text-right">DESIGN</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-magenta to-electricPurple flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                </div>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-obsidian/40 border border-white/10 backdrop-blur-md shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-tr from-magenta/20 via-transparent to-cyan/20 opacity-50 mix-blend-overlay"></div>
                
                <Image
                  src="/images/avatar.jpg"
                  alt="Eldhose George"
                  className="object-cover object-center w-full h-full filter contrast-110 saturate-100 group-hover:scale-105 transition-transform duration-700"
                  fill
                  priority
                />
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;