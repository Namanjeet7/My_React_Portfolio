import React from "react";
import headerCSS from './../Header/Header.module.css'

import ShakeHand from './../../assets/Images/hero-hand.webp'
import HeroIMG from './../../assets/Images/hero-img.png'
import Element1 from './../../assets/Images/hero-shape-1.webp'
import Element2 from './../../assets/Images/hero-shape-2.png'
import arrowTop from './../../assets/Images/media-line-bottom.svg'
import arrowBottom from './../../assets/Images/media-line-top.svg'


function Header() {
    return(
        <div className={`${headerCSS.Header} section`}>
            <div className={headerCSS.headerContent}>
                <span id={headerCSS.Heading}>Hello, There ! <img src={ShakeHand} alt="" /></span>
                <h1> I m Namanjeet <br /> <span id={`${headerCSS.text} text`}></span> Designer</h1>
                <p>A Combination Of My Passion For Design , Code and Interaction Web Design World.</p>
                <button>Get In Touch</button>
            </div>

            <div className={headerCSS.HeroIMG} id={headerCSS.heroimg}>
                <img src={HeroIMG} alt="HeroIMG" />
                <img src={Element1} alt="HeroIMG" id={headerCSS.Element1}/>
                <img src={Element2} alt="HeroIMG" id={headerCSS.Element2}/>
            </div>

            <div className={headerCSS.social}>
                <img src={arrowTop} alt="HeroIMG" id={headerCSS.arrowTop}/>

                <i className="ri-facebook-line"></i>
                <i className="ri-instagram-line"></i>
                <i className="ri-twitter-line"></i>
                <i className="ri-github-line"></i>

                <img src={arrowBottom} alt="HeroIMG" id={headerCSS.arrowBottom}/>
            </div>
        </div>
    )
}

export default Header