import React, { useEffect, useState } from 'react';
import '../sectionTwo/sectiontwo.css';
import axios from 'axios';

const SectionTwo = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        axios.get('https://6966074bf6de16bde44be3ee.mockapi.io/partners')
            .then(res => setPartners(res.data))
            .catch(err => console.error(err));
    }, []);

    const sliderPartners = [...partners, ...partners];


    const topRow = sliderPartners.filter((_, index) => index % 2 === 0);
    const bottomRow = sliderPartners.filter((_, index) => index % 2 !== 0);

    return (
        <div className="sectionTwo">
            <h1>Tərəfdaşlarımız</h1>
            <div className="slider">
                <div className="slider-track">
                    {topRow.map((partner, index) => (
                        <div className="cardd" key={'top-' + index}>
                            <img src={partner.image} alt={partner.name} />
                            <h6>{partner.name}</h6>
                            <p>{partner.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="slider-track">
                    {bottomRow.map((partner, index) => (
                        <div className="cardd" key={'bottom-' + index}>
                            <img src={partner.image} alt={partner.name} />
                            <h6>{partner.name}</h6>
                            <p>{partner.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SectionTwo;
