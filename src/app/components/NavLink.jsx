import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
    return (
        <a
            href={href}
            onClick={onClick}
            className="block py-2 pl-3 pr-4 text-slate-300 font-[family-name:var(--font-syne)] font-bold tracking-widest uppercase sm:text-lg rounded md:p-0 hover:text-cyan transition-colors"
        >
            {title}
        </a>
    )
}
export default NavLink;