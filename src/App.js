import { useState } from "react";
import axios from "axios";
function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  function handleCity(event) {
    setCity(event.target.value);
  }
  function getWeather() {
var weatherdata = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da15546768dbfbb6dbcae74e8b0a37fd&units=metric`);
    weatherdata.then(function(success){
      console.log(success.data);
      setWeather(success.data.weather[0].main);
      setTemperature(success.data.main.temp);
      setDescription(success.data.weather[0].description);
    })
  }
  return (
    <div className="bg-black p-20">
      <div className="bg-green-400 p-10 rounded-md">
        <h1 className="text-2xl font-bold text-white">Weather Repor</h1>
        <p>I can give you a weather report about your city </p>
        <input onChange={handleCity} type="text" placeholder="Enter your city" className="mt-4 p-2 rounded-md" />
        <button onClick={getWeather} className="mt-2 bg-blue-500 text-white p-2 rounded-md">Get Weather</button>
        <div className="mt-4 text-white">
          <h1><b>Weather:</b>{weather}</h1>
          <h1><b>Tempearature:</b>{temperature}</h1>
          <h1><b>descriptive:</b>{description}</h1>
          </div>
      </div>
        </div>
  );
}

export default App;
