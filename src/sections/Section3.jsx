import React from "react";
import { MyProjects } from "../components/MyProjects";

const Section3 = () => {
    return (
        <section id="portfolio" className="flex flex-col justify-center items-center min-h-screen w-full gap-8">
            <h1 className='poppins font-medium'>Projects Portfolio</h1>
            <div className="grid grid-cols-[1fr_400px] w-full h-full gap-12">
                <MyProjects />
                <div className="flex flex-col justify-center gap-4 w-full">
                    <p className="text-center text-gray-300">Some of my most interesting projects include a delivery app for university students, an app for disseminating clinical trials in oncology, a property search platform, and an investment management system.</p>
                    <p className="text-center text-gray-300">Each project aimed to address specific needs such as improving access to services, enhancing information sharing, or facilitating management tasks.</p>
                    <p className="text-center text-gray-300">I have worked with a variety of technologies to build these applications, including React Native, Angular, React.js, as well as WordPress, Elementor, and WooCommerce for website development.</p>
                </div>
            </div>
        </section>
    );
}

export { Section3 };