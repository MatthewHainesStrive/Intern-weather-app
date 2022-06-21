import axios from "axios";
import { SingleDayResp } from "../Models/SingleDayResp";

export const getSingleDay = async (city: string) => {
  const cityResp = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=1&appid=" +
      "8e678c37738dbf5627dd4e07dc55fe50"
  );
  const { lat, lon } = cityResp.data[0];

  const params = {
    lat,
    lon,
    appid: "8e678c37738dbf5627dd4e07dc55fe50",
    units: "imperial",
  };

  const resp = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    { params }
  );

  return resp.data;
};
