import React from "react";

const SocialMedia = ({ name, link, icon, invert }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    }

    return (
        <div onClick={handleClick} className="relative bg-[#111111] border-2 border-[rgb(199,199,199)] rounded-full flex flex-col p-3 md:p-4 text-white items-center gap-4 hover:bg-[#485DD8] duration-200 group">
                <img src={icon} alt={name} className={`w-8 h-8 ${invert ? 'invert' : ''}`} />
                <span className="absolute px-4 py-1 w-max rounded-full -translate-y-12 opacity-0 bg-gradient-to-r from-[#3babf6] to-[#3d05be] group-hover:-translate-y-16 group-hover:opacity-100 transition-all duration-300">{name}</span>
        </div>
    );
}

export { SocialMedia };