import React from "react";
import footerCSS from './../Footer/Footer.module.css';

function Footer(){
    return(
        <footer className={`${footerCSS.footerWrapper} section`}>
            <h1>Let's Talk About Next Big Thing</h1>
            <div className={footerCSS.buttons}>
                <button className={footerCSS.button1}>
                    Write A Message
                </button>
                <button className={footerCSS.button2}>
                    Discuss A Project
                </button>
            </div>
            <div className={footerCSS.socialMedia}>
                <div className={footerCSS.Social}>
                    <h2>Facebook <span>@Facebook_user</span></h2>
                    <i className="ri-facebook-line"></i>
                </div>
                <div className={footerCSS.Social}>
                    <h2>Instagram<span>@Instagram_user</span></h2>
                    <i className="ri-instagram-line"></i>
                </div>
            </div>

            <div className={footerCSS.shape}></div>
        </footer>
    )
}

export default Footer