import React, { useState } from "react";
import axios from "axios";
import Weather from "./components/Weather";
import SearchForm from "./components/SearchForm";
import weatherLogo from "./images/weather_logo.png";

const API_KEY = "fff3ee964abd8687b3cc9b12bef99da0";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState("");

  const handleChange = (event) => setCityInput(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (cityInput === "") return;

    await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&appid=${API_KEY}`)
      .then(response => {
        setWeatherData(response.data);
        setError("")
      })
      .catch(err => setError(err.message));
  }

  return (
    <>
      <div className="logo">
        <img src={weatherLogo} alt="Weather logo" width="300" />
      </div>

      <SearchForm 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cityInput={cityInput}
      />

      {error !== "" && <div className="error">{error}</div>}

      {weatherData && <Weather weatherData={weatherData} />}
    </>
  );
}

export default App;
