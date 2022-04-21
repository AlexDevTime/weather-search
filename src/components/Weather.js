import React from "react";

const Weather = ({ weatherData }) => {

  const roundedTemp = Math.round(weatherData.main.temp * 10) / 10;

  return (
    <div className="weather">
      <div className="weather-location">{weatherData.name}, {weatherData.sys.country}</div>
      <div className="weather-temp">{roundedTemp}°</div>
      <div className="weather-desc">{weatherData.weather[0].main}</div>
    </div>
  )
}
export default Weather;