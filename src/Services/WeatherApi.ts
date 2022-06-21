import axios from "axios";

const getGeoLocation = async (city: string) => {
  const cityResp = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=1&appid=" +
      "8e678c37738dbf5627dd4e07dc55fe50"
  );
  const { lat, lon } = cityResp.data[0];
  return { lat, lon };
};

export const getSingleDay = async (city: string) => {
  let { lat, lon } = await getGeoLocation(city);

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

export const getWeekWeather = async (city: string) => {
  let { lat, lon } = await getGeoLocation(city);

  console.log("here");
  const params = {
    lat,
    lon,
    appid: "8e678c37738dbf5627dd4e07dc55fe50",
    units: "imperial",
    exclude: "current,minutely,hourly,alerts",
  };

  const resp = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall",
    { params }
  );

  console.log("resp: " + JSON.stringify(resp));
  return resp.data;
};
