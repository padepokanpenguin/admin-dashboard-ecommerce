import React from "react";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
// import PersonIcon from "@mui/icons-material/Person";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import EqualizerIcon from "@mui/icons-material/Equalizer";
// import LogoutIcon from "@mui/icons-material/Logout";

import style from "./sidebar.module.css";
import { SidebarData } from "../assets/data";

export default function Sidebar() {
  return (
    <div className={style.Sidebar}>
      <div className={style.Logo}>
        <img src="/assets/img/logo.png" alt="logo" />
        <span>Admin</span>
      </div>

      <div className={style.Menu}>
        {SidebarData.map((item) => (
          <div className={style.MenuItem}>
            <item.icon />
            <span>{item.heading}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
