import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Chart from "react-apexcharts";
import style from "./Card.module.css";

interface BaseCard {
  title: string;
  color: Record<"background" | "boxShadow", string>;
  barValue?: number;
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
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard
          color={color}
          setExpanded={() => setExpanded(false)}
          title={title}
          series={series}
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
      layoutId="expandableCard"
    >
      <div className={style.RadialBar}>
        <CircularProgressbar value={barValue || 0} text={`${barValue || 0}%`} />
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

function ExpandedCard({ color, setExpanded, title, series }: CardProps) {
  return (
    <motion.div
      className={style.ExpandedCard}
      style={{
        background: color.background,
        boxShadow: color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <CloseSharpIcon onClick={setExpanded} />
      </div>
      <span>{title}</span>
      <div className={style.ChartContainer}>
        <Chart
          series={series}
          type="area"
          options={{
            chart: {
              type: "area",
              height: "auto",
            },

            fill: {
              colors: ["#fff"],
              type: "gradient",
            },

            dataLabels: {
              enabled: false,
            },
            stroke: {
              curve: "smooth",
              colors: ["white"],
            },
            tooltip: {
              x: {
                format: "dd/MM/yy HH:mm",
              },
            },
            grid: {
              show: true,
            },
            xaxis: {
              type: "datetime",
              categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z",
              ],
            },
          }}
        />
      </div>
      <span>last 24 hours</span>
    </motion.div>
  );
}
