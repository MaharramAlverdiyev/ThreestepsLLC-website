import React, { useEffect, useState } from 'react';
import '../Header/header.css';
import logoOne from '../../images/logo/logo_threestpes-one.png'
import logoTwo from '../../images/logo/logo_threestpes-two.png'
import { IoCallOutline } from "react-icons/io5";


const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`header ${scrolled ? "scrolled" : ""}`}>
            <div className="header-up">

                <div className="logo">
                    <a href='/' className='logo-threesteps'>
                        <img src={logoOne} alt="" />
                        <img src={logoTwo} alt="" />
                    </a>
                </div>

                <div className="navbar">
                    <ul className={`menu ${open ? "active" : ""}`}>
                        <li><a href="">Əsas Səhifə</a></li>
                        <li><a href="">Layihələrimiz</a></li>
                        <li><a href="">Medbooking</a></li>
                        <li><a href="">Demo Randevu</a></li>
                        <li><a href="">Müştərilər</a></li>
                    </ul>
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>

                <div className="contact">
                    <IoCallOutline /> +994 50 471 34 71
                </div>

            </div>
        </div>
    )
}

export default Header