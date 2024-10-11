import React from "react";
import { useState } from "react";
import { useFetchWeather } from "../hooks/useFetchWeather";
import { CountrySelected } from "./CountrySelected";
export const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const { weatherData, error, getWeatherData } = useFetchWeather();

  const handleCityChange = (e) => setCity(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);

  const handleFetchWeather = () => {
    if(city && country){
      getWeatherData(city, country);
    }else{
      alert('Por favor ingrese ciudad y pais');
    }
  }

  return (
    <div className="weather__container">
      <h1 className="title">Aplicacion del clima</h1>
      <input
        id="text"
        type="text"
        name="text"
        value={city}
        onChange={handleCityChange}
        placeholder="Ingrese ciudad"
      />
      <CountrySelected value={country} onChange={handleCountryChange}/>

      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather__data">
          <p>Clima en <span className="city__name">{city}</span></p>
          <img src={weatherData.weatherIcon} />
          <p>Temperatura actual: {weatherData.temperature}</p>
          <p>Temperatura max: {weatherData.tempMax}</p>
          <p>Temperatura min: {weatherData.tempMin}</p>
        </div>
      )}
      <button onClick={handleFetchWeather}>Ingresar clima</button>
    </div>
    
  );
};
