export const getWeather = async(city, country) => {
  const apiKey = '551f2cb771236eb0b92a0d34edca5554' 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const weatherData = data.map((element) => ({
    temp: element.main.temp,
    tempMin: element.main.temp_min,
    tempMax: element.main.temp_max,
    weatherIcon: element.weather.icon
  }));

  return weatherData;
}
