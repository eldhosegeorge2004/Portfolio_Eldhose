"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="relative mb-4 text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 animate-glitch cursor-pointer inline-block">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Eldhose George",
                1000,
                "Web Developer",
                1000,
                "Game Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
              className="text-white font-extrabold"
            />
          </h1>

          {/* Floating Background Shapes */}
          <div className="absolute top-10 left-0 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-10 w-32 h-32 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Driven by curiosity and creativity, I combine technical skills with
            design thinking to deliver meaningful digital experiences that make
            an impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center sm:justify-start mt-8">
            <Link
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              Hire Me
            </Link>
            <a
              href="/resume.pdf"
              download="Eldhose_George_Resume.pdf"
              className="p-[2px] rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 transform hover:scale-105 inline-block"
            >
              <span className="block bg-[#121212] hover:bg-[#1e1b4b] rounded-full px-7 py-2.5 text-white font-semibold transition-colors duration-300">
                Download CV
              </span>
            </a>
          </div>

        </motion.div>
        {/* Right Section - Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="pt-10 flex justify-center">
            <div className="relative w-[220px] h-[220px] lg:w-[420px] lg:h-[420px] group transition-transform duration-700 ease-in-out hover:scale-105 hover:rotate-[0.5deg]">

              {/* Pulsing Gradient Halo (Outer Glow) */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 opacity-30 blur-2xl scale-110 animate-pulse-slow" />

              {/* Gradient Border Ring with Subtle Glow */}
              <div className="absolute inset-[6px] lg:inset-[12px] rounded-full bg-gradient-to-br from-blue-900/40 via-sky-500/10 to-transparent backdrop-blur-lg border-[3px] lg:border-[5px] border-white/10 shadow-[0_0_30px_rgba(0,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(0,255,255,0.25)] transition-all duration-700 ease-in-out" />

              {/* Soft Background Blur Ring */}
              <div className="absolute inset-6 lg:inset-10 rounded-full bg-gradient-to-tr from-slate-900/80 to-slate-800/60 blur-sm" />

              {/* Profile Image */}
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden ring-1 ring-white/10 shadow-lg shadow-black/30 group-hover:shadow-xl">
                <Image
                  src="/images/h.png"
                  alt="Profile Picture"
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 select-none pointer-events-none"
                  width={600}
                  height={100}
                  priority
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 