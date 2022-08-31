import Cards from "../Cards/Cards";
import style from "./MainDashboard.module.css";

export default function MainDashboard() {
  return (
    <div className={style.MainDashboard}>
      <h1>Dashboard</h1>
      <Cards />
    </div>
  );
}
