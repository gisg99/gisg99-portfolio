import React from "react";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-center items-center px-4 shadow-md z-10 bg-[#111111E7]">
            <div className="w-full max-w-[1140px] h-full flex justify-between items-center gap-4">
                <h2 className="text-lg font-bold ">Gabriel</h2>
                <nav className="h-20">
                    <ul className="h-full flex gap-10">
                        <a href="#home"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Home</li></a>
                        <a href="#about-me"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Resume</li></a>
                        <a href="#portfolio"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Portfolio</li></a>
                        <a href="#my-life"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Know me</li></a>
                        <a href="#contact"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Contact</li></a>
                    </ul>
                </nav>
                <button className="gradient-button">Connect with me</button>
            </div>
        </header>
    )
}

export { Header };