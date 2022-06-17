import React from "react";
import styles from "../Styling/Homepage.module.css";
import WeatherCard from "./WeatherCard";

export default function Homepage() {
  return (
    <div className={styles.Homepage}>
      <WeatherCard />
    </div>
  );
}
