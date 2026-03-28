import React, { useEffect, useState, useRef } from 'react';
import '../Header/header.css';
import logoOne from '../../images/logo/logo_threestpes-one.png';
import logoTwo from '../../images/logo/logo_threestpes-two.png';
import { IoCallOutline } from "react-icons/io5";

const Header = () => {

    const [open, setOpen] = useState(false);
    const menuRef = useRef();

    const toggleMenu = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="header">
            <div className="header-up">

                <div className="logo">
                    <a href="/" className='logo-threesteps'>
                        <img src={logoOne} alt="" />
                        <img src={logoTwo} alt="" />
                    </a>
                </div>

                <div className="navbar">

                    <div className="menu-toggle" onClick={toggleMenu}>
                        {open ? "✖" : "☰"}
                    </div>

                    <div className={`overlay ${open ? "active" : ""}`} onClick={() => setOpen(false)}></div>

                    <ul className={`menu ${open ? "active" : ""}`}>
                        <li><a href="">Əsas Səhifə</a></li>
                        <li><a href="">Layihələrimiz</a></li>
                        <li><a href="">Medbooking</a></li>
                        <li><a href="">Demo Randevu</a></li>
                        <li><a href="">Müştərilər</a></li>

                        <li className="mobile-contact">
                            +994 50 471 34 71
                        </li>
                    </ul>

                </div>

                <div className="contact">
                    <IoCallOutline /> +994 50 471 34 71
                </div>
            </div>
        </div>
    )
}

export default Header;