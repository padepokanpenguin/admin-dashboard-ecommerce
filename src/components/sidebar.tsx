import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LogoutIcon from "@mui/icons-material/Logout";

import style from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={style.Sidebar}>
      <div className={style.Logo}>
        <img src="/assets/img/logo.png" alt="logo" />
        <span>Admin</span>
      </div>

      <div className={style.Menu}>
        <div className={style.MenuItem}>
          <DashboardIcon />
          <span>Dashboard</span>
        </div>
        <div className={style.MenuItem}>
          <AssignmentTurnedInIcon />
          <span>Orders</span>
        </div>
        <div className={style.MenuItem}>
          <PersonIcon />
          <span>Customers</span>
        </div>
        <div className={style.MenuItem && style.active}>
          <InventoryIcon />
          <span>Products</span>
        </div>
        <div className={style.MenuItem}>
          <EqualizerIcon />
          <span>Analitycs</span>
        </div>

        <div className={style.MenuItem}>
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
