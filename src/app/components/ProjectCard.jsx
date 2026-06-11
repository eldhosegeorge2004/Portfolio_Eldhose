import React from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, previewUrl, caseStudyUrl, index }) => {
  const isEven = index % 2 === 0;
  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center w-full group relative`}>
      {/* Background glow when hovering on the card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-magenta/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"></div>
      
      <div className="w-full lg:w-3/5 relative overflow-hidden bg-obsidian border-2 border-white/5 group-hover:border-white/10 transition-colors duration-500 shadow-2xl z-10">
        <div className="absolute inset-0 bg-gradient-to-tr from-magenta/20 to-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
        <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full transform group-hover:scale-[1.03] transition-transform duration-700 ease-out">
           <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: `url(${imgUrl})` }}></div>
           
           <div className="overlay items-center justify-center absolute inset-0 bg-obsidian/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex z-20 backdrop-blur-sm">
             <Link href={previewUrl || "#"} target="_blank" rel="noopener noreferrer" className="h-16 w-16 border-2 relative rounded-full border-cyan hover:border-magenta hover:shadow-[0_0_30px_rgba(255,0,127,0.8)] group/link transition-all" title="Live Preview">
               <EyeIcon className="h-8 w-8 text-cyan absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-magenta transition-colors" />
             </Link>
           </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5 flex flex-col justify-center z-10">
        <h3 className="font-[family-name:var(--font-syne)] text-3xl lg:text-4xl font-black text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan group-hover:to-magenta transition-all">
          {title}
        </h3>
        <p className="text-slate-400 text-base lg:text-lg mb-8 leading-relaxed font-light">
          {description}
        </p>
        <div className="w-12 h-1 bg-cyan mb-8 group-hover:w-full group-hover:bg-magenta transition-all duration-700 ease-in-out"></div>
        <a href={caseStudyUrl || previewUrl || "#"} target="_blank" rel="noopener noreferrer" className="text-white font-mono text-sm uppercase tracking-widest hover:text-cyan transition-colors w-fit flex items-center gap-3">
          Explore Case Study <span className="text-magenta text-xl leading-none">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
