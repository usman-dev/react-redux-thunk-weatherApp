import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../style/style.css";
//Child component
const WeatherCard = () => {
  const [weatherState, setWeatherState] = useState("");
  const newState = useSelector((state) => state.showNumber.finalData);

  const { temp, humidity, pressure } =
    newState && newState.main ? newState.main : {};
  let mode1 = newState && newState.weather[0].main
    // newState && newState.weather && newState.weather.length
    //   ? newState.weather[0].main
    //   : {};
  const { name } = newState? newState: {};
  const { speed } = newState? newState.wind: {};
  const { country, sunset } = newState? newState.sys: {};

  useEffect(() => {
    debugger
    if (mode1) {
      switch (mode1) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
    console.log(" weather card useeffect end");
  }, [mode1]);
  //converting seconds into minutes and hours
  let sec = sunset;
  let timeStr = new Date(sec * 1000);
  let sunsetTime = `${timeStr.getHours()}:${timeStr.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{mode1}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* Bottom 4 column section */}

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {sunsetTime} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
