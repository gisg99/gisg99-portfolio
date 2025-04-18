import React from "react";

const Section1 = () => {
    return (
        <section className="flex flex-col items-center w-full gap-8">
            <div className="w-64 h-64 bg-[url('/img/gabo.jpeg')] bg-cover bg-center rounded-full border-2 border-white shadow-lg">

            </div>
            <h1 className='poppins font-medium'><b className='text-gradient font-semibold'>Gabriel Sánchez</b>, Full Stack Developer +5 years of experience</h1>
            <div className="w-100 flex justify-center gap-4">
                <button className="gradient-button">Connect with me</button>
                <button className="bg-[#171717]">About me</button>
            </div>
        </section>
    );
}

export { Section1 };