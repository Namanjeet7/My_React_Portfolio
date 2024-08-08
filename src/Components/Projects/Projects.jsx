import React from "react";
import projectCSS from './../Projects/Projects.module.css';

import ProjectImg1 from './../../assets/Images/portfolio-1.webp'
import ProjectImg2 from './../../assets/Images/portfolio-2.webp'
import ProjectImg3 from './../../assets/Images/portfolio-3.webp'
function Projects() {
    return (
        <div className={`section ${projectCSS.ProjectWrapper}`}>
            <marquee direction="left" className={projectCSS.marquee}>
                <div className={projectCSS.marqueeTxt}>
                    <h1>MY PROJECTS✌️💪</h1>
                    <h1>✨✨MY WORK (2024) ✨✨</h1>
                    <h1>MY PROJECTS✌️💪</h1>
                    <h1>✨✨MY WORK (2024) ✨✨</h1>
                    <h1>MY PROJECTS✌️💪</h1>
                    <h1>✨✨MY WORK (2024) ✨✨</h1>
                </div>
            </marquee>
            <div className={projectCSS.projectLeftContainer}>
                <div className={projectCSS.Title}>
                    <h3 className="section_title">Projects</h3>
                    <h2>Latest Projects</h2>
                </div>

                <div className={projectCSS.Image}>
                    <div className={projectCSS.ProjectImg}>
                        <img src={ProjectImg1} alt="Project-Img" />
                    </div>
                    <h4>01 <i className="ri-arrow-right-line"> Branding</i></h4>
                </div>

                <button>View All Projects</button>
            </div>

            <div className={projectCSS.projectRightContainer}>
                <div className={projectCSS.Image}>
                    <div className={projectCSS.ProjectImg}>
                        <img src={ProjectImg2} alt="Project-Img" />
                    </div>
                        <h4>02 <i className="ri-arrow-right-line"> Branding</i></h4>
                </div>
                <div className={projectCSS.Image}>
                        <div className={projectCSS.ProjectImg}>
                            <img src={ProjectImg3} alt="Project-Img" />
                        </div>
                            <h4>03 <i className="ri-arrow-right-line"> Branding</i></h4>
                </div>
            </div>
        </div>
    )
}

export default Projects