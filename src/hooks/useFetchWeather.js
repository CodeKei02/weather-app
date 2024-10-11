import { useState } from "react";
import { getWeather } from "../helpers/getWeather";

export const useFetchWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherData = async (city, country) => {
    try {
      const data = await getWeather(city, country);
      setWeatherData(data);
      setError(null);
    } catch (error) {
      setError("Error fetching weather data");
      setWeatherData(null);
    }
  };

  return {
    weatherData,
    error,
    getWeatherData,
  };
};
