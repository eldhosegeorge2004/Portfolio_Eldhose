import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onClose }) => {
    return (
        <ul className="flex flex-col py-6 items-center bg-obsidian/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl absolute left-0 w-full top-[100%]">
            {links.map((link, index) => (
                <li key={index} className="w-full text-center py-4 border-b border-white/5 last:border-b-0">
                    <NavLink href={link.path} title={link.title} onClick={onClose} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;