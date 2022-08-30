import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import style from "./Card.module.css";
interface BaseCard {
  title: string;
  color: Record<"background" | "boxShadow", string>;
  barValue: number;
  value: string;
  png: any;
}
interface CardProps extends BaseCard {
  series: {
    name: string;
    data: number[];
  }[];
}

export default function Card({ title, color, barValue, value, png, series }: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        "Expanded"
      ) : (
        <motion.div
          className={style.CompactCard}
          style={{
            background: color.background,
            boxShadow: color.boxShadow,
          }}
          layoutId="expandableCard"
          onClick={() => setExpanded(!expanded)}
        >
          <div className={style.RadialBar}>
            {/* <CircularProgressbar
              value={barValue}
              text={`${barValue}%`}
            /> */}
            <span>{title}</span>
          </div>
          <div className={style.Detail}>
            {png}
            <span>${value}</span>
            <span>Last 24 hours</span>
          </div>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

export function CompactCard({ png, value, barValue, title }: BaseCard) {
  return (
    <div className={style.CompactCard}>
      <div className={style.RadialBar}>Chart</div>
      <div className={style.Detail}>{png}</div>
    </div>
  );
}
