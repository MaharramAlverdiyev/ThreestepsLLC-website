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
                <div className="card-three">
                    <div className="icon"><FaRegHandshake /></div>
                    <div className="titlesectionThree">
                        <h6>It konsaltinq</h6>
                        <p>IT konsultasiya xidməti göstərməklə məlumatlarınızın təhlükəsizliyini təmin edirik.</p>
                    </div>
                </div><div className="card-three">
                    <div className="icon"><RiFileCloudLine /></div>
                    <div className="titlesectionThree">
                         <h6>Bulud Texnologiyaları</h6>
                        <p>IT xidmət təminatçınız olaraq sizə bazarda mövcud olan ən uyğun bulud həllərini təqdim edəcəyik.</p>
                    </div>
                </div><div className="card-three">
                    <div className="icon"><MdOutlineSecurity /></div>
                    <div className="titlesectionThree">
                        <h6>Kibertəhlükəsizlik Xidməti</h6>
                        <p>Kibertəhlükəsizlik sahəsində düzgün həllərin tətbiqi biznesin təhlükəsizliyini təmin etməyin yeganə yoludur</p>
                    </div>
                </div><div className="card-three">
                    <div className="icon"><GrServices /></div>
                    <div className="titlesectionThree">
                        <h6>Texniki Dəstək Xidməti</h6>
                        <p>Mütəxəssis komandamız sistemlərinizə daimi nəzarət və professional idarəetməni təmin etmək üçün burdadadır.</p>
                    </div>
                </div><div className="card-three">
                    <div className="icon"><HiMiniDevicePhoneMobile /></div>
                    <div className="titlesectionThree">
                        <h6>Responsive Görünüş</h6>
                        <p>Telefonda və planşetdə istifadə edə bilmə rahatçılığı </p>
                    </div>
                </div><div className="card-three">
                    <div className="icon"><PiNetworkLight /></div>
                    <div className="titlesectionThree">
                        <h6>Network Managment</h6>
                        <p>Şəbəkənizin miqyasından asılı olmayaraq, onun optimal saxlanmasını və stabil işləməsini təmin etməlisiniz.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionThree