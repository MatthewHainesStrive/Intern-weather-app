import * as React from "react";
import { weatherDetails } from "../Models/cardInput";
import styles from "../Styling/card.module.css";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import CloudOffIcon from "@mui/icons-material/CloudOff";

export default function WeatherCard({
  tempHigh,
  tempLow,
  city,
  icon,
  width,
  height,
  weather,
}: weatherDetails) {
  const textSize: number = height * 0.15;
  let iconSize: number = height * 0.5;
  let iconType;
  if (icon === "Rain") {
    iconType = <ThunderstormIcon sx={{ fontSize: iconSize }} />;
  } else if (icon === "Clouds") {
    iconType = <CloudIcon sx={{ fontSize: iconSize }} />;
  } else if (icon === "Snow") {
    iconType = <AcUnitIcon sx={{ fontSize: iconSize }} />;
  } else {
    iconType = <WbSunnyIcon sx={{ fontSize: iconSize }} />;
  }
  return (
    <div className={styles.card} style={{ width: width, height: height }}>
      <h2 style={{ fontSize: textSize }}>{city}</h2>
      {iconType}
      <div className={styles.container}>
        <h4>High: {tempHigh}</h4>
        <h4>Low: {tempLow}</h4>
      </div>
    </div>
  );
}
