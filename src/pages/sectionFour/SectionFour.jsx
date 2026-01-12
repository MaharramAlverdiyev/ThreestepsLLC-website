import React from 'react'
import '../sectionFour/sectionfour.css'
import { FaRegHandshake } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaClipboardCheckSolid } from "react-icons/lia";

const SectionFour = () => {
    return (
        <div className='sectionFour' >
            <h1>Məqsədimiz</h1>
            <div className="sectionFour-container">
                <p>"Bazarın ən son texnoloji həlləri ilə keyfiyyətli, təhlükəsiz IT dəstəyi və konsultasiya xidməti təmin etmək, müştərilərimizin işlərini asanlaşdırmaq və biznesiniz üçün keyfiyyətli xidmət göstərməkdir"</p>

                <div className="analyz">
                    <div className="analyz-card">
                        <div className="analyz-icon"><FaRegHandshake /></div>
                        <h4>15</h4>
                        <h5>İllik təcrübə</h5>
                    </div>
                    <div className="analyz-card">
                        <div className="analyz-icon"><FaPeopleGroup /></div>
                        <h4>200</h4>
                        <h5>Müştəri məmnuniyyəti</h5>
                    </div>
                    <div className="analyz-card">
                        <div className="analyz-icon"><LiaClipboardCheckSolid /></div>
                        <h4>200</h4>
                        <h5>Tamamlanmış layihə</h5>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SectionFour