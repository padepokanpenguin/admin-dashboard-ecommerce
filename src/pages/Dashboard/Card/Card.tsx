import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

import style from "./Card.module.css";

interface BaseCard {
  title: string;
  color: Record<"background" | "boxShadow", string>;
  barValue: number;
  value?: string;
  png?: any;
  setExpanded?: () => void;
}
interface CardProps extends BaseCard {
  series?: {
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
  const [expanded, setExpanded] = useState(true);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          color={color}
          setExpanded={() => setExpanded(false)}
          title={title}
        />
      ) : (
        <CompactCard
          png={png}
          value={value}
          barValue={barValue}
          title={title}
          color={color}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </AnimateSharedLayout>
  );
}

function CompactCard({
  png,
  value,
  barValue,
  title,
  color,
  setExpanded,
}: BaseCard) {
  return (
    <motion.div
      className={style.CompactCard}
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className={style.RadialBar}>
        <CircularProgressbar value={barValue} text={`${barValue}%`} />
        <span>{title}</span>
      </div>

      <div className={style.Detail}>
        {png}
        <span>IDR {value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ color, setExpanded, title }: CardProps) {
  return (
    <div
      className={style.ExpandedCard}
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
    >
      <div>
        <CloseSharpIcon onClick={setExpanded} />
      </div>
      <span>{title}</span>
      <div className={style.ChartContainer}>Chart</div>
      <span>last 24 hours</span>
    </div>
  );
}
