import React, { useRef, useEffect } from 'react';
import navCSS from './../Nav/Nav.module.css';
import logo from './../../assets/Images/logo.png';

function Nav() {
    const nav = useRef(null);
    const menu = useRef(null);

    const ShowMenu = () => {
        if (menu.current) {
            menu.current.classList.toggle(navCSS.showMenu);
        }
    };

    const HandleStickyNav = () => {
        if (nav.current) {
            nav.current.classList.add(navCSS.bgmenu);
        }
    };

    const RemoveStickyNav = () => {
        if (nav.current) {
            nav.current.classList.remove(navCSS.bgmenu);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                HandleStickyNav();
            } else {
                RemoveStickyNav();
            }
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures this runs once on mount and cleanup on unmount

    const DarkMode = () => {
        const body = document.querySelector('body');
        const icon = document.querySelector('#icon');
        if (body && icon) {
            body.setAttribute("data-theme", "dark");
            icon.setAttribute("class", "ri-moon-line");
        }
    };

    const LightMode = () => {
        const body = document.querySelector('body');
        const icon = document.querySelector('#icon');
        if (body && icon) {
            body.setAttribute("data-theme", "light");
            icon.setAttribute("class", "ri-sun-line");
        }
    };

    const toggleTheme = () => {
        const body = document.querySelector('body');
        if (body) {
            const theme = body.getAttribute('data-theme');
            if (theme === 'dark') {
                LightMode();
            } else {
                DarkMode();
            }
        }
    };

    return (
        <div className={navCSS.nav} ref={nav} aria-label='Nav'>
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
    );
}

export default Nav;
