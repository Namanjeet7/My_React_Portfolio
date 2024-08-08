import React from "react";
import aboutCSS from './../About/About.module.css'

import Aboutimg from './../../assets/Images/about-1.png'

function About() {
    return (
        <div className={`${aboutCSS.AboutWrapper} section`}>

            <marquee direction="left">
                <div className={aboutCSS.marqueeTxt}>
                    <h1>ABOUT ME✌️💪</h1>
                    <h1>✨✨MY WORK (2024) ✨✨</h1>
                    <h1>ABOUT ME✌️💪</h1>
                    <h1>✨✨MY WORK (2024) ✨✨</h1>
                    <h1>ABOUT ME✌️💪</h1>
                    <h1>✨✨MY WORK (2024) ✨✨</h1>
                </div>
            </marquee>
            <div className={aboutCSS.about_img}>
                <p className="section_title">About Me</p>
                <div className={aboutCSS.Img_Container}>
                    <img src={Aboutimg} alt="About-img" />
                </div>
            </div>
            <div className={aboutCSS.about_Content}>
                <h3>Hello I'm <span>Namanjeet</span>, a Self-taught & Creative <span>Designer & Developer </span>
                    passionate about building innovative solutions, crafting beautiful interfaces, and delivering exceptional user experiences across various platforms.
                </h3>
                <div className={aboutCSS.ExperienceWrapper}>
                    <div className={aboutCSS.Experience}>
                        <h1>50+ <span>Projects Completed</span></h1>
                    </div>
                    <div className={aboutCSS.Experience}>
                        <h1>2+ <span>Years Of Expereince</span></h1>
                    </div>
                    <div className={aboutCSS.Experience}>
                        <h1>10+ <span>Happy Clients</span></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About