import React from "react";
import styles from "../Styling/WeekForecast.module.css";
import WeatherCard from "./WeatherCard";

export default function WeekForecast() {
  return (
    <div className={styles.Homepage}>
      <WeatherCard />
    </div>
  );
}
