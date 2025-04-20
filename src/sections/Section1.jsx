import React from "react";

const Section1 = () => {
    return (
        <section id="home" className="flex flex-col justify-center items-center min-h-[100svh] w-full gap-8 pt-12 md:pt-24">
            <div className="w-64 h-64 bg-[url('/img/gabo.jpeg')] bg-[length:100%] bg-center rounded-full border-2 border-white transition-all duration-300 ease-in-out shadow-[0px_0px_32px_8px_rgba(59,_130,_246,_0.5)] hover:-translate-y-4 hover:shadow-[0px_0px_48px_8px_rgba(59,_130,_246,_0.75)] hover:bg-[length:150%]"></div>
            <h1 className='poppins font-medium'><b className='text-gradient font-semibold'>Gabriel Sánchez</b>, Full Stack Developer +5 years of experience</h1>
            <p className="text-center text-gray-300">I'm a software developer with over 5 years of experience, based in Guadalajara, Jalisco, Mexico. I work with technologies like React.js, Angular, Vue.js, Node.js, PHP, HTML, CSS, JavaScript, C/C++, and Python. I specialize in building scalable, efficient web solutions and I'm always seeking new challenges to grow and innovate.</p>
            <div className="w-100 flex justify-center gap-4">
                <button className="gradient-button">Connect with me</button>
                <button className="bg-[#171717]">About me</button>
            </div>
        </section>
    );
}

export { Section1 };