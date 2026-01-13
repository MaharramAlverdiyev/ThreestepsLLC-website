import React, { useState } from "react";
import "./sectionfive.css";
import { GrLike } from "react-icons/gr";
import { IoMdStarOutline } from "react-icons/io";

const SectionFive = () => {

    const cards = [
        { id: 1, title: "Card 1" },
        { id: 2, title: "Card 2" },
        { id: 3, title: "Card 3" },
        { id: 4, title: "Card 4" },
        { id: 5, title: "Card 5" },
    ];

    const [center, setCenter] = useState(0);

    const getCard = (offset) => {
        return cards[(center + offset + cards.length) % cards.length];
    };

    return (
        <div className="sectionFive">

            <div className="icon-five">
                <div className="five-icon"><GrLike /></div>
                <div className="star-icon">
                    <IoMdStarOutline />
                    <IoMdStarOutline />
                    <IoMdStarOutline />
                </div>
            </div>

            <h1>Müştəri rəyi</h1>
            <p>Hər bir müştəri bizim üçün dəyərlidir.</p>

            <div className="sectionFive-container">

                <div className="cards-wrapper">
                    <div
                        className="card-item side-card"
                        onClick={() => setCenter((center - 1 + cards.length) % cards.length)}
                    >
                        {getCard(-1).title}
                    </div>

                    <div className="card-item center-card">
                        {getCard(0).title}
                    </div>

                    <div
                        className="card-item side-card"
                        onClick={() => setCenter((center + 1) % cards.length)}
                    >
                        {getCard(1).title}
                    </div>

                </div>

                <div className="dots">
                    {cards.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setCenter(i)}
                            className={i === center ? "dot active" : "dot"}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
};

export default SectionFive;
