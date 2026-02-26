import React, { useEffect, useState } from "react";
import "./sectionfive.css";

const SectionFive = () => {
  const [cardsData, setCardsData] = useState([]);
  const [center, setCenter] = useState(0);

  useEffect(() => {
    fetch("https://6966074bf6de16bde44be3ee.mockapi.io/alicilar")
      .then((res) => res.json())
      .then((data) => setCardsData(data))
      .catch((err) => console.log(err));
  }, []);


  const getCard = (offset) => {
    if (cardsData.length === 0) return null;
    return cardsData[
      (center + offset + cardsData.length) % cardsData.length
    ];
  };

  if (cardsData.length === 0) return <p>Yüklənir...</p>;

  return (
    <div className="sectionFive">
      <h1>Müştəri rəyi</h1>
      <p>Hər bir müştəri bizim üçün dəyərlidir.</p>

      <div className="cards-wrapper">
        <div
          className="card side-card"
          onClick={() =>
            setCenter((center - 1 + cardsData.length) % cardsData.length)
          }
        >
          <img
            src={getCard(-1)?.avatars}
            alt=""
            className="avatar"
          />
          <h4>{getCard(-1)?.company}</h4>
          <p>{getCard(-1)?.name}</p>
        </div>
        <div className="card center-card">
          <img
            src={getCard(0)?.avatars}
            alt=""
            className="avatar"
          />
          <h4>{getCard(0)?.company}</h4>
          <p>{getCard(0)?.name}</p>
        </div>
        <div
          className="card side-card"
          onClick={() =>
            setCenter((center + 1) % cardsData.length)
          }
        >
          <img
            src={getCard(1)?.avatars}
            alt=""
            className="avatar"
          />
          <h4>{getCard(1)?.company}</h4>
          <p>{getCard(1)?.name}</p>
        </div>
      </div>
      <div className="dots">
        {cardsData.map((_, i) => (
          <span
            key={i}
            className={i === center ? "dot active" : "dot"}
            onClick={() => setCenter(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionFive;