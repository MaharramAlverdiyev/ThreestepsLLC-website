import React from 'react'
import '../sectionFive/sectionfive.css'
import { GrLike } from "react-icons/gr";
import { IoMdStarOutline } from "react-icons/io";


const SectionFive = () => {
    return (
        <div className='sectionFive' >
            <h1>Müştəri rəyi</h1>
            <div className="five-icon"><GrLike />
                <div className="star-icon"><IoMdStarOutline /></div>
            </div>
            <div className="sectionFive-container">
                <div className="card">
                    <h6>Medbooking</h6>
                    <p>Lorem impuls</p>
                </div>
            </div>
        </div>
    )
}

export default SectionFive