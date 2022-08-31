import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

import style from "./sidebar.module.css";
import { SidebarData } from "../../assets/data";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);

  return (
    <div className={style.Sidebar}>
      <div className={style.Logo}>
        <img src="/assets/img/logo.png" alt="logo" />
        <span>Admin</span>
      </div>

      <div className={style.Menu}>
        {SidebarData.map((item, index) => (
          <div
            key={index}
            className={
              selected === index
                ? `${style.MenuItem} ${style.active}`
                : style.MenuItem
            }
            onClick={() => setSelected(index)}
          >
            {item.icon}
            <span>{item.heading}</span>
          </div>
        ))}
        <div className={style.MenuItem}>
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
}
