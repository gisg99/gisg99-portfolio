import React from "react";
import { SocialMedia } from "../components/SocialMedia";

const Section5 = () => {
    return (
        <section id="contact" className="flex flex-col justify-center items-center w-full gap-8 mt-32 rounded-md p-4">
            <h1 className='poppins font-medium'>Connect with me</h1>
            <div className="flex justify-center items-center w-full gap-4">
                <SocialMedia name="Instagram" link="https://instagram.com/gabriel__sanchez99" icon="https://cdn.simpleicons.org/instagram/ffffff" />
                <SocialMedia name="Spotify" link="https://open.spotify.com/user/p1zqw7nmzv4y5gxjjlvzx92tg?si=98f482b4eff84a1a" icon="https://cdn.simpleicons.org/spotify/ffffff" />
                <SocialMedia name="Discord" link="https://discordapp.com/users/gabo3973" icon="https://cdn.simpleicons.org/discord/ffffff" />
                <SocialMedia name="YouTube" link="https://www.youtube.com/@gisg99" icon="https://cdn.simpleicons.org/youtube/ffffff" />
                <SocialMedia name="GitHub" link="https://github.com/gisg99" icon="https://cdn.simpleicons.org/github/ffffff" />
                <SocialMedia name="LinkedIn" link="https://www.linkedin.com/in/gisg99/" icon="https://api.iconify.design/simple-icons:linkedin.svg?color=ffffff" invert />
                <SocialMedia name="TikTok" link="https://www.tiktok.com/@gabriel__sanchez99?_t=ZM-8vflFfM4sOl&_r=1" icon="https://cdn.simpleicons.org/tiktok/ffffff" />
                <SocialMedia name="Send an email" link="mailto:gisgarci2@hotmail.com" icon="https://cdn.simpleicons.org/maildotru/ffffff" />
            </div>
        </section>
    );
}

export { Section5 };