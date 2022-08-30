import React from "react";
import { cardsData } from "../../assets/data";
import style from "./Cards.module.css";

export default function Card() {
  return (
    <div className={style.Cards}>
      {cardsData.map((card, id) => (
        <div className={style.ParentContainer}>
          <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            value={card.value}
            png={card.png}
            series={card.series}
          />
        </div>
      ))}
    </div>
  );
}
