import React from "react";
import skillsCSS from './../Skills/Skills.module.css'

import Figma from './../../assets/Images/figma.webp'
import Sketch from './../../assets/Images/sketch.webp'
import Photoshop from './../../assets/Images/photoshop.webp'
import XD from './../../assets/Images/xd.webp'
import Vue from './../../assets/Images/vue.webp'
import Angular from './../../assets/Images/angular.webp'

function Skills() {
    return (
        <div className={`${skillsCSS.SkillsWrapper} section`}>
            <h3 className="section_title">Advantage</h3>
            <h1>Skills & Tools</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, excepturi?</p>

            <div className={skillsCSS.ToolsWrapper}>
                <div className={skillsCSS.ToolContainer}>
                    <div className={skillsCSS.Tool}>
                        <img src={Figma} alt="" />
                        <h4>Figma</h4>
                    </div>
                    <div className={skillsCSS.Tool}>
                        <img src={Sketch} alt="" />
                        <h4>Sketch</h4>
                    </div>
                </div>
                <div className={skillsCSS.ToolContainer}>
                    <div className={skillsCSS.Tool}>
                        <img src={Photoshop} alt="" />
                        <h4>Photoshop</h4>
                    </div>
                    <div className={skillsCSS.Tool}>
                        <img src={XD} alt="" />
                        <h4>XD</h4>
                    </div>
                </div>
                <div className={skillsCSS.ToolContainer}>
                    <div className={skillsCSS.Tool}>
                        <img src={Vue} alt="" />
                        <h4>Vue</h4>
                    </div>
                    <div className={skillsCSS.Tool}>
                        <img src={Angular} alt="" />
                        <h4>Angular</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills