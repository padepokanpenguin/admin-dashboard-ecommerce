import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";

import style from "./Card.module.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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

export default function Card({
  title,
  color,
  barValue,
  value,
  png,
  series,
}: CardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        "Expanded"
      ) : (
        <CompactCard
          png={png}
          value={value}
          barValue={barValue}
          title={title}
          color={color}
        />
      )}
    </AnimateSharedLayout>
  );
}

export function CompactCard({ png, value, barValue, title, color }: BaseCard) {
  return (
    <div className={style.CompactCard}
      style={{
        background: color.background,
        boxShadow: color.boxShadow
      }}>
      <div className={style.RadialBar}>
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>

      <div className={style.Detail}>
        {png}
        <span>IDR {value}</span>
        <span>Last 24 hours</span>
      </div>
    </div>
  );
}
