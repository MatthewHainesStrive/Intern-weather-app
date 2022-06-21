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
  return (
    <div className={styles.card} style={{ width: width, height: height }}>
      <h2>{city}</h2>
      <WbSunnyIcon sx={{ fontSize: 125 }} />
      <div className={styles.container}>
        <h4>High: {tempHigh}</h4>
        <h4>Low: {tempLow}</h4>
      </div>
    </div>
  );
}
