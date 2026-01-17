import React from 'react'
import '../sectionSeven/sectionseven.css'
import leftphoto from '../../images/sectionseven.png'
import { TbTargetArrow } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";

const SectionSeven = () => {
    return (
        <div className='sectionSeven' >
            <h1>Biz kimik?</h1>
            <div className="sectionSeven-container">
                <div className="left-foto">
                    <img src={leftphoto} alt="" />
                </div>
                <div className="right-text">
                    <div className="threesteps">
                        <h2>" THREESTEPS TO SUCCESS ! "</h2>
                        <p>" Uğur üçün üç addım ! " </p>
                    </div>
                    <div className="text-one">
                        <h3>Hədəfimiz <GiStairsGoal /></h3>
                        <p>Hədəfimiz regional bazarda innovativ yanaşması və müştəri məmnuniyyətinə əsaslanan xidmət modeli ilə fərqlənən aparıcı IT şirkəti olmaqdır.</p>
                    </div>
                    <div className="text-second">
                        <h3>Məqsədimiz <TbTargetArrow /></h3>
                        <p>Məqsədimiz müştərilərimizə çevik, təhlükəsiz və dayanıqlı texnoloji həllər təqdim edərək onların biznes proseslərini optimallaşdırmaqdır.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionSeven