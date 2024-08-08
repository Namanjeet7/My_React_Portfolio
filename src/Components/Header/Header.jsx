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
                <img src={Element1} alt="Element1" id={headerCSS.Element1}/>
                <img src={Element2} alt="Element2" id={headerCSS.Element2}/>
            </div>

            <div className={headerCSS.social}>
                <img src={arrowTop} alt="arrowTop" id={headerCSS.arrowTop}/>

                <i className="ri-facebook-line" aria-label="facebook"></i>
                <i className="ri-instagram-line" aria-label="instagram"></i>
                <i className="ri-twitter-line" aria-label="twitter"></i>
                <i className="ri-github-line" aria-label="github"></i>

                <img src={arrowBottom} alt="arrowBottom" id={headerCSS.arrowBottom}/>
            </div>
        </div>
    )
}

export default Header