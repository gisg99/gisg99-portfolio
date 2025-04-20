import React from "react";
import { SpotifyEmbed } from "../components/SpotifyEmbed";
import gabo4 from "/img/gabo4.jpg";
import gabo2 from "/img/gabo2.png";
import gabo8 from "/img/gabo8.jpg";
import gabo7 from "/img/gabo7.jpg";
import gabo3 from "/img/gabo3.jpg";
import gabo6 from "/img/gabo6.jpg";

const Section4 = () => {
    return (
        <section id="my-life" className="flex flex-col justify-center items-center min-h-screen w-full gap-8 pt-12 md:pt-24">
            <h1 className='poppins font-medium'>Know me</h1>
                <div className="flex flex-col md:grid md:grid-cols-7 gap-4 w-full h-full p-2 md:p-0">
                    <div className="flex items-center justify-center col-span-3">
                        <img src={gabo4} alt="Gabriel Sánchez" className="rounded-md"/>
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                        <p className="bg-gradient-to-r from-[#3babf6] to-[#3d05be] p-2 rounded-xl rounded-br-none">Hi! My name is Gabriel Sánchez. I’m 25 years old and I was born in Guadalajara, Jalisco, Mexico. I have both Mexican and Spanish nationalities. I have lived most of my life in Mexico, but I have also visited Spain several times because my father’s family lives there. Thanks to this, I feel connected to both cultures and it has helped me see the world in different ways.</p>
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                        <img src={gabo2} alt="Gabriel Sánchez" className="rounded-md"/>
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                        <p className="bg-gradient-to-r from-[#3babf6] to-[#3d05be] p-2 rounded-xl rounded-br-none">I’m a calm and relaxed person. I like simple plans like watching movies or visiting new places in the city. I also enjoy bigger adventures like traveling to different parts of Mexico or other countries. Even if my social circle is not very big, I am friendly and I like meeting new people. I love animals, dogs are my favorite pets. I also enjoy doing sports in my free time, i like going to the gym, running, and playing football, padel, and volleyball.</p>
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                        <img src={gabo8} alt="Gabriel Sánchez" className="rounded-md"/>
                    </div>
                    <div className="flex items-center justify-center col-span-3">
                        <SpotifyEmbed />
                    </div>
                    <div className="flex items-center justify-center col-span-3 row-span-2">
                        <img src={gabo7} alt="Gabriel Sánchez" className="rounded-md"/>
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                        <img src={gabo3} alt="Gabriel Sánchez" className="rounded-md"/>
                    </div>
                    <div className="flex items-center justify-center row-span-2 col-span-2">
                        <img src={gabo6} alt="Gabriel Sánchez" className="rounded-md"/>
                    </div>
                    <div className="flex items-center justify-center col-span-2">
                        <p className="bg-gradient-to-r from-[#3babf6] to-[#3d05be] p-2 rounded-xl rounded-br-none">In my free time, I love watching and playing football. My favorite team is FC Barcelona, but I enjoy any good match. I’m also a big fan of Formula 1. Another thing I really enjoy is playing video games, either with friends or alone. Some of my favorite games are The Last of Us, Resident Evil 4, Minecraft, EA FC, and Rainbow Six Siege.</p>
                    </div>
                </div>
        </section>
    );
}

export { Section4 };