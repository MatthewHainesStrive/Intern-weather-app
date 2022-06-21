import React from "react";
import styles from "../Styling/WeekForecast.module.css";
import WeatherCard from "./WeatherCard";

export default function WeekForecast() {
  return (
    <div className={styles.Homepage}>
      <WeatherCard
        tempHigh={90}
        tempLow={80}
        city={"Chicago"}
        icon={"temp"}
        width={90}
        height={600}
      />
    </div>
  );
}
