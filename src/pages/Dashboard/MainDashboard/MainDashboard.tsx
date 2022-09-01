import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import style from "./MainDashboard.module.css";

export default function MainDashboard() {
  return (
    <div className={style.MainDashboard}>
      <h1>Dashboard</h1>
      <Cards />
      <h1>Recent Order</h1>
      <Table />
    </div>
  );
}
