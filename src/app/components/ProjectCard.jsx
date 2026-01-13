import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";

const ProjectCard = ({ imgUrl, title, description, previewUrl, gitUrl }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <div className="bg-[#181818] bg-opacity-80 backdrop-filter backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-full shadow-lg hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group relative flex flex-col">
        <div
          className="h-52 md:h-72 relative overflow-hidden flex-shrink-0"
        >
          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: `url(${imgUrl})` }}></div>

          <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">

            <Link
              href={previewUrl || "#"}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              title="Live Preview"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          </div>
        </div>

        <div className="text-white py-6 px-4 relative z-10 glass rounded-b-xl border-t-0 flex-grow flex flex-col">
          <h5 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{title}</h5>
          <p className="text-[#ADB7BE] text-sm leading-relaxed flex-grow">{description}</p>
        </div>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 opacity-0 group-hover:opacity-40 blur-md transition duration-500 pointer-events-none"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
