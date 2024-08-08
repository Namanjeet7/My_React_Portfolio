import React, { useRef } from "react";
import navCSS from './../Nav/Nav.module.css';
import logo from './../../assets/Images/logo.png';
import '@testing-library/jest-dom';

function Nav() {
    let menu = useRef();

    const ShowMenu = () => {
        menu.current.classList.toggle(navCSS.showMenu);
    }

    const HandleStickyNav = () => {
        nav.current.classList.toggle(navCSS.bgmenu);
    }

    window.addEventListener('scroll', function (){
        if (this.window.scrollY > 100) {
            HandleStickyNav();
        } else {
            nav.current.classList.remove(navCSS.bgmenu);
        }
    });

    const DarkMode = () => {
        document.querySelector('body').setAttribute("data-theme", "dark")
        document.querySelector('#icon').setAttribute("class", "ri-moon-line")
    }

    const LightMode = () => {
        document.querySelector('body').setAttribute("data-theme", "light")
        document.querySelector('#icon').setAttribute("class", "ri-sun-line")
    }

    const toggleTheme =() => {
        const theme = document.querySelector('body').getAttribute('data-theme');
        if(theme === 'dark') {
            LightMode();
        } else {
            DarkMode();
        }
    }

    return (
        <>
            <div className={navCSS.nav}>
                <div className={navCSS.left_Nav_Container}>
                    <div className={navCSS.logo}>
                        <img src={logo} alt="Logo" />
                    </div>

                    <ul ref={menu}>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={navCSS.Right_Nav_Container}>
                    <button className={navCSS.Theme} onClick={toggleTheme} aria-label="Toggle theme">
                        <i className="ri-moon-line" id="icon"></i>
                    </button>

                    <i className="ri-menu-3-line" id={navCSS.Bars} onClick={ShowMenu}></i>
                </div>
            </div>
        </>
    );
}

export default Nav;
