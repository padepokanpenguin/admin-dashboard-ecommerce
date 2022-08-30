import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { ObjectType } from "typescript";
import { SvgIconProps } from "@mui/material";

import style from "./Card.module.css";
import { jsx } from "@emotion/react";

interface Props {
  title: string;
  color: ObjectType;
  barValue: number;
  value: string;
  png: React.ComponentType<SvgIconProps>;
  series: ObjectType;
}

export default function Card({
  title,
  color,
  barValue,
  value,
  png,
  series,
}: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        "Expanded"
      ) : (
        <motion.div
          className="CompactCard"
          style={{
            background: color.backGround,
            boxShadow: color.boxShadow,
          }}
          layoutId="expandableCard"
          onClick={setExpanded}
        >
          <div className="radialBar">
            {/* <CircularProgressbar
              value={barValue}
              text={`${barValue}%`}
            /> */}
            <span>{title}</span>
          </div>
          <div className="detail">
            <Png />
            <span>${value}</span>
            <span>Last 24 hours</span>
          </div>
        </motion.div>
      )}
    </AnimateSharedLayout>
  );
}

interface CompactProps {
  png: React.ComponentType<SvgIconProps>;
  value: string;
  barValue: number;
  title: string;
  color: ObjectType;
}

function CompactCard({ png, value, barValue, title }: CompactProps) {
  return (
    <div className={style.CompactCard}>
      <div className={style.RadialBar}>Chart</div>
      <div className={style.Detail}>
        <png />
      </div>
    </div>
  );
}
