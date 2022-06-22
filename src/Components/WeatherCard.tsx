import * as React from "react";
import { weatherDetails } from "../Models/cardInput";
import styles from "../Styling/card.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function WeatherCard({
  tempHigh,
  tempLow,
  city,
  icon,
  width,
  height,
}: weatherDetails) {
  const textSize: number = height * 0.15;
  let iconSize: number = height * 0.5;
  return (
    <div className={styles.card} style={{ width: width, height: height }}>
      <h2 style={{ fontSize: textSize }}>{city}</h2>
      <WbSunnyIcon sx={{ fontSize: iconSize }} />
      <div className={styles.container}>
        <h4>High: {tempHigh}</h4>
        <h4>Low: {tempLow}</h4>
      </div>
    </div>
  );
}
