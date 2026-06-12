import React from 'react'

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-white border-cyan bg-cyan/10 shadow-[0_0_15px_var(--color-cyan)]"
        : "text-slate-400 border-white/10 bg-transparent hover:border-white/30 hover:text-white"
    
    return (
        <button 
            className={`${buttonStyles} font-[family-name:var(--font-syne)] rounded-full border md:border-2 px-3 md:px-8 py-1.5 md:py-3 text-xs sm:text-sm md:text-lg font-bold tracking-widest uppercase cursor-pointer transition-all duration-300`}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;