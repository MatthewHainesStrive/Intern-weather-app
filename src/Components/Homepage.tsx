import React, { useState, useEffect } from "react";
import styles from "../Styling/Homepage.module.css";
import { weatherDetails } from "../Models/cardInput";
import { getSingleDay } from "../Services/WeatherApi";
import WeatherCard from "./WeatherCard";
import { SingleDayResp } from "../Models/SingleDayResp";

export default function Homepage() {
  const [city, setCity] = useState("Chicago");
  const [currWeather, setCurrWeather] = useState({
    tempHigh: 90,
    tempLow: 80,
    city: "Chicago",
    icon: "temp",
    width: 500,
    height: 600,
  });

  useEffect(() => {
    const getWeather = async () => {
      const resp = await getSingleDay(city);
      const weather: weatherDetails = {
        tempHigh: resp.main.temp_max,
        tempLow: resp.main.temp_min,
        city: city,
        icon: resp.weather.main,
        width: 500,
        height: 600,
      };
      setCurrWeather(() => weather);
    };
    getWeather();
  }, []);

  return (
    <div className={styles.Homepage}>
      <WeatherCard
        tempHigh={Math.trunc(currWeather.tempHigh)}
        tempLow={Math.trunc(currWeather.tempLow)}
        city={currWeather.city}
        icon={currWeather.icon}
        width={currWeather.width}
        height={currWeather.height}
      />
    </div>
  );
}
