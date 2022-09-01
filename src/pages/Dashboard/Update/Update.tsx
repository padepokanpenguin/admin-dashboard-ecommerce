import React from "react";
import { UpdatesData } from "../../../assets/data";
import style from "./Update.module.css";

export default function Update() {
  return (
    <div className={style.Updates}>
      {UpdatesData.map((data) => (
        <div key={data.name} className={style.Update}>
          <img src={data.img} alt={data.name} />
          <div className={style.Notification}>
            <div style={{ marginBottom: ".5rem" }}>
              <span>{data.name}</span>
              <span> {data.noti}</span>
            </div>
            <span>{data.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
