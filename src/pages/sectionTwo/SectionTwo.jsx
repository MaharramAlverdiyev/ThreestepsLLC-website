import React from 'react'
import '../sectionTwo/sectiontwo.css'
import medbooking from '../../images/sectionone/medbooking.jpg';

const SectionTwo = () => {
    return (
        <div className='sectionTwo' >
            <h1>Layihələrimiz</h1>
            <div className="sectionTwo-container">
                <div className="card">
                    <img src={medbooking} alt="Medbooking" />
                    <h6>Medbooking</h6>
                    <p>Lorem impuls</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo