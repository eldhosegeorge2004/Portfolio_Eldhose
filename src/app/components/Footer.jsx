"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full relative bg-obsidian text-white overflow-hidden pt-20 pb-6 border-t border-white/5 z-10 mt-20">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-magenta to-transparent opacity-50"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electricPurple/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-6">
            <h2 className="font-[family-name:var(--font-syne)] text-3xl font-black mb-4">
              ELDHOSE <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">GEORGE</span>
            </h2>
            <p className="text-slate-400 font-light leading-relaxed max-w-sm">
              Building meaningful digital experiences through innovative technology and thoughtful design. Available for freelance opportunities.
            </p>
          </div>

          {/* Socials Col */}
          <div className="col-span-1 md:col-span-6 flex flex-col md:items-end justify-between">
            <div className="w-full md:w-auto">
              <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold mb-6 text-white/90 md:text-right">Connect</h4>
              <div className="flex gap-4 md:justify-end">
                <a
                  href="https://github.com/eldhosegeorge2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-magenta hover:border-magenta hover:shadow-[0_0_20px_var(--color-magenta)] transition-all duration-300 text-slate-300 hover:text-white group"
                >
                  <FaGithub size={22} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://linkedin.com/in/eldhosegeorge2004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan hover:border-cyan hover:shadow-[0_0_20px_var(--color-cyan)] transition-all duration-300 text-slate-300 hover:text-white group"
                >
                  <FaLinkedin size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>

            {/* Back to top button */}
            <button 
              onClick={scrollToTop}
              className="mt-8 md:mt-6 flex items-center gap-3 text-slate-400 hover:text-white font-mono tracking-widest text-sm uppercase group transition-all duration-300"
            >
              Back to top
              <span className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:border-white/30 transition-colors">
                <FaArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>

        </div>



        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-mono">
          <p>© {new Date().getFullYear()} Eldhose George. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
