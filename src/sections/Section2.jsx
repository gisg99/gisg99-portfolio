import React from "react";
import { Card } from "../components/Card";
import { TechnologiesChart } from "../components/TechnologiesChart";
import { Technologies } from "../components/Technologies";

const Section2 = () => {
    return (
        <section id="about-me" className="flex flex-col justify-center items-center min-h-screen w-full gap-4 md:gap-16 pt-12 md:pt-24">
            <h1 className='poppins font-medium'>About me</h1>
            <div className="flex flex-col items-center px-4 md:p-0 md:grid md:grid-cols-[400px_1fr] w-full h-full gap-12 mb-8 md:mb-0">
                <img src="public/img/gabo5.PNG" alt="Gabriel Sánchez" className="w-9/10 md:w-auto rounded-md shadow-[-16px_16px_0px_0px_#485DD8]" />
                <div className="flex flex-col justify-center gap-4 w-full">
                    <p className="text-center text-gray-300">I studied Computer Engineering at the University of Guadalajara and started working a year before graduating. My first projects involved building websites for a variety of businesses, using core technologies like HTML, JavaScript, PHP, and CSS, along with deployment tools from platforms like Hostinger, GoDaddy, and Ionos.</p>
                    <p className="text-center text-gray-300">Later, I joined an AI development company, where I mainly focused on frontend work, integrating AI services through APIs developed by other team members. During this time, I built web pages and applications, and took on my first major full stack projects — developing APIs, configuring servers (Debian, Ubuntu, Windows Server), and deploying applications.</p>
                    <p className="text-center text-gray-300">Throughout my career, I have worked with technologies such as React.js, Angular, Vue.js, Laravel, Node.js, JavaScript, HTML, CSS, and Python, constantly expanding my skills and adapting to new challenges.</p>
                    <TechnologiesChart />
                </div>
            </div>
            <Technologies />
        </section>
    );
}

export { Section2 };