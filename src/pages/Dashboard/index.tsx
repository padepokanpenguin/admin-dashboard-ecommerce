import React from "react";
import MainDashboard from "./MainDashboard/MainDashboard";
import RightSide from "./RightSide/RightSide";
import style from "./index.module.css";

export default function Dashboard() {
  return (
    <div className={style.Dashboard}>
      <MainDashboard />
      <RightSide />
    </div>
  );
}
