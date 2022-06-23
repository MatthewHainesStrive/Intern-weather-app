import React, { useEffect, useState } from "react";
import { weatherDetails } from "../Models/cardInput";
import styles from "../Styling/WeekForecast.module.css";
import WeatherCard from "./WeatherCard";
import { getWeekWeather } from "../Services/WeatherApi";
import SearchBar from "./SearchBar";

export default function WeekForecast() {
  const [city, setCity] = useState("Chicago");
  const [currWeather, setCurrWeather] = useState<weatherDetails[]>([]);

  useEffect(() => {
    const getWeather = async () => {
      const resp = await getWeekWeather(city);
      const weatherDetailsList: weatherDetails[] = resp.daily
        .slice(0, 7)
        .map((obj: any) => {
          return {
            tempHigh: obj.temp.max,
            tempLow: obj.temp.min,
            city,
            icon: obj.weather.main,
            width: 150,
            height: 200,
          };
        });
      setCurrWeather(() => weatherDetailsList);
    };
    getWeather();
  }, [city]);

  const updateCity = (city: string) => {
    console.log("city1 " + city);
    setCity(() => city);
  };

  return (
    <div className={styles.Homepage}>
      <div className={styles.searchBarWrapper}>
        <SearchBar updateCity={updateCity} />
      </div>
      <div className={styles.wrapper}>
        {currWeather.map((currDay: weatherDetails, index) => (
          <div className={styles.card}>
            <h5 className={styles.headers}>Day {index + 1}</h5>
            <WeatherCard
              tempHigh={Math.trunc(currDay.tempHigh)}
              tempLow={Math.trunc(currDay.tempLow)}
              city={currDay.city}
              icon={currDay.icon}
              width={150}
              height={200}
              weather={currDay.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
