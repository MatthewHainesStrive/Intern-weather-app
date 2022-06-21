import React from "react";
import styles from "../Styling/WeekForecast.module.css";
import WeatherCard from "./WeatherCard";

export default function WeekForecast() {
  return (
    <div className={styles.Homepage}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day One</h5>
          <WeatherCard
            tempHigh={99}
            tempLow={88}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day Two</h5>
          <WeatherCard
            tempHigh={92}
            tempLow={83}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day Three</h5>
          <WeatherCard
            tempHigh={96}
            tempLow={89}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day Four</h5>
          <WeatherCard
            tempHigh={102}
            tempLow={93}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day Five</h5>
          <WeatherCard
            tempHigh={78}
            tempLow={65}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day Six</h5>
          <WeatherCard
            tempHigh={82}
            tempLow={73}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
        <div className={styles.card}>
          <h5 className={styles.headers}>Day Seven</h5>
          <WeatherCard
            tempHigh={72}
            tempLow={73}
            city={"Chicago"}
            icon={"temp"}
            width={150}
            height={250}
          />
        </div>
      </div>
    </div>
  );
}
