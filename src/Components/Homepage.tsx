import React from "react";
import styles from "../Styling/Homepage.module.css";
import WeatherCard from "./WeatherCard";

export default function Homepage() {
  return (
    <div className={styles.Homepage}>
      <WeatherCard
        tempHigh={90}
        tempLow={80}
        city={"Chicago"}
        icon={"temp"}
        width={500}
        height={600}
      />
    </div>
  );
}
