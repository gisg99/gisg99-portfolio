import React from "react";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-center items-center p-4 shadow-md z-10">
            <div className="w-full max-w-[1140px] flex justify-between items-center gap-4">
                <h2 className="text-lg font-bold ">Gabriel</h2>
                <nav className="flex gap-10">
                    <a href="#contact" className="hover:text-gray-400">Home</a>
                    <a href="#about" className="hover:text-gray-400">Resume</a>
                    <a href="#projects" className="hover:text-gray-400">Portfolio</a>
                    <a href="#projects" className="hover:text-gray-400">About me</a>
                    <a href="#projects" className="hover:text-gray-400">Contact</a>
                </nav>
                <button className="gradient-button">Connect with me</button>
            </div>
        </header>
    )
}

export { Header };