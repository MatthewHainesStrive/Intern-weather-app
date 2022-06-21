import React, { useEffect, useState } from "react";
import { weatherDetails } from "../Models/cardInput";
import styles from "../Styling/WeekForecast.module.css";
import WeatherCard from "./WeatherCard";
import { getWeekWeather } from "../Services/WeatherApi";

export default function WeekForecast() {
  const [city, setCity] = useState("Chicago");
  const [currWeather, setCurrWeather] = useState<weatherDetails[]>([]);

  useEffect(() => {
    const getWeather = async () => {
      const resp = await getWeekWeather(city);
      const weatherDetailsList: weatherDetails[] = resp.daily.map(
        (obj: any) => {
          return {
            tempHigh: obj.temp.max,
            tempLow: obj.temp.min,
            city,
            icon: obj.weather.main,
            width: 150,
            height: 200,
          };
        }
      );
      setCurrWeather(() => weatherDetailsList);
    };
    getWeather();
  }, [city]);

  return (
    <div className={styles.Homepage}>
      <div className={styles.wrapper}>
        {currWeather.map((currDay: weatherDetails) => (
          <div className={styles.card}>
            <h5 className={styles.headers}>Day One</h5>
            <WeatherCard
              tempHigh={Math.trunc(currDay.tempHigh)}
              tempLow={Math.trunc(currDay.tempLow)}
              city={currDay.city}
              icon={currDay.icon}
              width={150}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
