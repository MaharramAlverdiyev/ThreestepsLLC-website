import React from 'react'
import '../sectionThree/sectionthree.css'
import { FaRegHandshake } from "react-icons/fa";
import { RiFileCloudLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { PiNetworkLight } from "react-icons/pi";

const SectionThree = () => {
    return (
        <div className='sectionThree' >
            <h1>Servis və xidmətlərimiz</h1>
            <p>IT infrastrukturunuzu bizə etibar edin.</p>
            <div className="sectionThree-container">
                <div className="card">
                    <div className="icon"><FaRegHandshake /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div><div className="card">
                    <div className="icon"><RiFileCloudLine /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div><div className="card">
                    <div className="icon"><MdOutlineSecurity /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div><div className="card">
                    <div className="icon"><GrServices /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div><div className="card">
                    <div className="icon"><HiMiniDevicePhoneMobile /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div><div className="card">
                    <div className="icon"><PiNetworkLight /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree