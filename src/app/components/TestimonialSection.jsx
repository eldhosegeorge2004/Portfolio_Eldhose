"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TestimonialSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0f]">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 opacity-50">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 11H6C6 8.23858 8.23858 6 11 6V4C7.13401 4 4 7.13401 4 11V19H10V11ZM20 11H16C16 8.23858 18.2386 6 21 6V4C17.134 4 14 7.13401 14 11V19H20V11Z" fill="var(--color-cyan)"/>
            </svg>
          </div>
          
          <motion.blockquote 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="font-[family-name:var(--font-syne)] text-3xl md:text-5xl lg:text-6xl font-black italic text-white mb-16 leading-tight tracking-tight"
          >
            Driven by curiosity, powered by technology, <span className="text-transparent bg-clip-text bg-gradient-to-r from-magenta to-cyan">focused on growth.</span>
          </motion.blockquote>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
              {/* Abstract scribbles / shapes behind image */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-magenta -rotate-12"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-cyan rotate-12"></div>
              
              <div className="w-full h-full relative z-10 bg-obsidian border border-white/10 shadow-[0_0_30px_rgba(255,42,42,0.15)] flex items-center justify-center group" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-cyan/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-20 transform group-hover:scale-110 group-hover:rotate-180 transition-all duration-700 drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="url(#cyber-grad)" />
                  <defs>
                    <linearGradient id="cyber-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF2A2A" />
                      <stop offset="1" stopColor="#FF8C00" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="text-center md:text-left">
              <h4 className="font-[family-name:var(--font-syne)] text-xl font-bold text-white tracking-widest uppercase mb-1">Eldhose George</h4>
              <p className="text-slate-500 text-sm font-mono tracking-widest">Computer Science & Design</p>
              
              {/* Decorative wave line */}
              <div className="mt-4 flex justify-center md:justify-start">
                <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6C5 6 5 1 10 1C15 1 15 11 20 11C25 11 25 1 30 1C35 1 35 11 40 11C45 11 45 1 50 1C55 1 55 11 60 11" stroke="var(--color-magenta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
