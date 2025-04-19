import React from "react";

const MiniSocialMedia = ({ link, icon, invert }) => {
    const handleClick = () => {
        window.open(link, "_blank");
    }

    return (
        <div onClick={handleClick} className="relative bg-[#111111] border-2 border-[rgb(199,199,199)] rounded-full flex flex-col p-2 text-white items-center gap-4 hover:bg-[#485DD8] duration-200 group">
                <img src={icon} alt="Gabo's social media" className={`w-4 h-4 ${invert ? 'invert' : ''}`} />
        </div>
    );
}

export { MiniSocialMedia };