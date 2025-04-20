import React, { useState } from "react";
import { MiniSocialMedia } from "../MiniSocialMedia";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed top-0 left-0 md:w-full w-[100svw] flex justify-center items-center px-4 shadow-md z-10 bg-[#111111E7]">
            <div className="!w-[100svw] md:max-w-[1140px] h-full flex justify-between items-center gap-4 p-2 md:p-0">
                <h2 className="text-lg font-bold">Gabriel's Portfolio</h2>
                <nav className="hidden md:block h-20">
                    <ul className="h-full flex gap-10">
                        <a href="#home"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Home</li></a>
                        <a href="#about-me"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Resume</li></a>
                        <a href="#portfolio"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Portfolio</li></a>
                        <a href="#my-life"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Know me</li></a>
                        <a href="#contact"><li className="h-full flex items-center border-b-3 border-[#111111] hover:border-[#485DD8] duration-200">Contact</li></a>
                    </ul>
                </nav>
                <div className="hidden md:flex justify-center items-center gap-4">
                    <MiniSocialMedia name="GitHub" link="https://github.com/gisg99" icon="https://cdn.simpleicons.org/github/ffffff" />
                    <MiniSocialMedia name="Send an email" link="mailto:gisgarci2@hotmail.com" icon="https://cdn.simpleicons.org/maildotru/ffffff" />
                    <MiniSocialMedia name="LinkedIn" link="https://www.linkedin.com/in/gisg99/" icon="https://api.iconify.design/simple-icons:linkedin.svg?color=ffffff" invert />
                </div>
                <div 
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                    <span className={`bg-white block h-0.5 w-6 rounded-sm my-0.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                    <span className={`bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
            </div>
            <div className={`absolute top-full left-0 w-full h-svh bg-[#111111] shadow-md transition-all duration-300 md:hidden ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <nav className="container mx-auto px-4 py-2">
                    <ul className="flex flex-col">
                        <a href="#home" onClick={toggleMenu}><li className="py-3 border-b border-gray-800 hover:text-[#485DD8] duration-200">Home</li></a>
                        <a href="#about-me" onClick={toggleMenu}><li className="py-3 border-b border-gray-800 hover:text-[#485DD8] duration-200">Resume</li></a>
                        <a href="#portfolio" onClick={toggleMenu}><li className="py-3 border-b border-gray-800 hover:text-[#485DD8] duration-200">Portfolio</li></a>
                        <a href="#my-life" onClick={toggleMenu}><li className="py-3 border-b border-gray-800 hover:text-[#485DD8] duration-200">Know me</li></a>
                        <a href="#contact" onClick={toggleMenu}><li className="py-3 border-b border-gray-800 hover:text-[#485DD8] duration-200">Contact</li></a>
                        <li className="py-3">
                            <button className="gradient-button w-full">Connect with me</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export { Header };