import { cardsData } from "../../assets/data";
import style from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards() {
  return (
    <div className={style.Cards}>
      {cardsData.map((card, id) => (
        <div className={style.ParentContainer}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
}
