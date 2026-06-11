"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "Home", path: "#" },
  { title: "Services", path: "#services" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 w-full z-50 bg-obsidian/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 w-full max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="relative font-[family-name:var(--font-syne)] text-2xl font-black tracking-tighter hover:scale-105 transition-transform duration-300">
          <span className="text-white">Eldhose</span>
          <span className="text-magenta">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.path} title={link.title} />
            ))}
          </div>
          <a href="#contact" className="relative group overflow-hidden px-6 py-2.5 rounded-full bg-transparent border border-white/10 hover:border-magenta/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-magenta to-electricPurple opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            <span className="relative text-sm font-semibold text-white tracking-wider uppercase group-hover:text-magenta transition-colors duration-300">Let's Talk</span>
          </a>
        </div>

        {/* Mobile Button */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 text-white hover:text-magenta transition-colors focus:outline-none"
          >
            {navbarOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {navbarOpen && (
        <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
      )}
    </nav>
  );
};

export default Navbar;
