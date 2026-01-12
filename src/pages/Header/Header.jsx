import React from 'react';
import '../Header/header.css';
import logoOne from '../../images/logo/logo_threestpes-one.png'
import logoTwo from '../../images/logo/logo_threestpes-two.png'
import { IoCallOutline } from "react-icons/io5";


const Header = () => {
    return (
        <div className='header'>
            <div className="header-up">
                <div className="logo">
                    <a href='/' className='logo-threesteps'>
                        <img src={logoOne} alt="" />
                        <img src={logoTwo} alt="" />
                    </a>
                </div>
                <div className="navbar">
                    <ul>
                        <li>
                            <a href="">Əsas Səhifə</a>
                        </li>
                        <li>
                            <a href="">Layihələrimiz</a>
                        </li>
                        <li>
                            <a href="">Medbooking</a>
                        </li>
                        <li>
                            <a href="">Demo Randevu</a>
                        </li>
                        <li>
                            <a href="">Müştərilər</a>
                        </li>
                    </ul>
                </div>
                <div className="contact"><IoCallOutline /> +994 55 527 53 56</div>
            </div>
        </div>
    )
}

export default Header