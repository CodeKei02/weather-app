export const getWeather = async (city, country) => {
  const apiKey = "551f2cb771236eb0b92a0d34edca5554";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error("Error fetching weather data");
    }

    const data = await resp.json();

    return {
      temperature: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      weatherIcon: `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
    };

  } catch (err) {
    throw new Error("Error fetching weather data");
  }
};
