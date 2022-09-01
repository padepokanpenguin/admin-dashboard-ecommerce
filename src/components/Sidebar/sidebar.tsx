import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { motion } from "framer-motion";

import style from "./sidebar.module.css";
import { SidebarData } from "../../assets/data";

export default function Sidebar() {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      <div
        className={style.Bars}
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <MenuIcon />
      </div>
      <motion.div
        className={style.Sidebar}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className={style.Logo}>
          <img src="/assets/img/logo.png" alt="logo" />
          <span>Admin</span>
        </div>

        <div className={style.Menu}>
          {SidebarData.map((item, index) => (
            <Link
              key={index}
              className={
                selected === index
                  ? `${style.MenuItem} ${style.active}`
                  : style.MenuItem
              }
              to={
                item.heading === "Dashboard" ? "/" : item.heading.toLowerCase()
              }
              onClick={() => setSelected(index)}
            >
              {item.icon}
              <span>{item.heading}</span>
            </Link>
          ))}
          <div className={style.MenuItem}>
            <LogoutIcon />
            <span>Logout</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
