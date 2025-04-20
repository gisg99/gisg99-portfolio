import React from "react";
import { MyProjects } from "../components/MyProjects";

const Section3 = () => {
    return (
        <section id="portfolio" className="mt-16 md:mt-0 flex flex-col justify-center items-center min-h-screen w-full gap-8">
            <div className="flex flex-col items-center gap-4 mb-8 p-2 md:p-0">
                <h1 className='poppins font-medium'>Projects Portfolio</h1>
                <p className="w-full md:w-2/3 text-center text-gray-300">Some of my most interesting projects include a delivery app for university students, an app for disseminating clinical trials in oncology, a property search platform, and an investment management system. Each project aimed to address specific needs such as improving access to services, enhancing information sharing, or facilitating management tasks.</p>
                <p className="w-full md:w-2/3 text-center text-gray-300">I have worked with a variety of technologies to build these applications, including React Native, Angular, React.js, as well as WordPress, Elementor, and WooCommerce for website development.</p>
            </div>
            <MyProjects />
        </section>
    );
}

export { Section3 };