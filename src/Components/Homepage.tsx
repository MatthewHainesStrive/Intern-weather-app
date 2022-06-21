import React from "react";
import styles from "../Styling/Homepage.module.css";
import WeatherCard from "./WeatherCard";
import SearchBar from "./SearchBar";

export default function Homepage() {
  return (
    <div className={styles.Homepage}>
      <div className={styles.wrapper}>
        <SearchBar />
        <WeatherCard
          tempHigh={90}
          tempLow={80}
          city={"Chicago"}
          icon={"temp"}
          width={800}
          height={600}
        />
      </div>
    </div>
  );
}
