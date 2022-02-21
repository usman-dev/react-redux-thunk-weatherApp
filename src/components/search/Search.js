import React, { useEffect, useState } from "react";
import "../style/style.css";
import WeatherCard from "../weatherCard/WeatherCard";
import { useSelector, useDispatch } from "react-redux";
import { fethData } from "../../redux/actions";

const Search = () => {
  const [searchValue, setSearchValue] = useState("lahore");
  const [tempInfo, setTempInfo] = useState({});
  // const [loading, setLoading] = useState(true);

  console.log("this is first");
  const newState = useSelector((state) => state.showNumber.finalData);
  console.log("this is mid");
  const dispatch = useDispatch();
  console.log("this is end");

  const getWeatherInfo = async() =>{
    // setLoading = true;
    dispatch(fethData(searchValue));
    // setLoading = false;
    console.log("this is getweather");
    // dispatch(fethData(searchValue));

    const {temp, humidity, pressure} = newState.main;
    const {main: weathermood} = newState.weather[0];
    const {name} = newState;
    const {speed} = newState.wind;
    const {country, sunset} = newState.sys;

    const myNewWeatherInfo = {
      temp,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset
    };
    setTempInfo(myNewWeatherInfo);
    
  }

  useEffect(() => {
    console.log("this is dispatch first");
    dispatch(fethData(searchValue));
    // console.log("this is getWeatherInfo first");
    // getWeatherInfo();
    // console.log("this is getWeatherInfo end");
    console.log("this is dispatch end");
  }, [searchValue]);
  
  return(
    
  <>
    <div className="wrap">
      <div className="search">
        <input
          className="searchTerm"
          type="search"
          id="search"
          placeholder="Enter City Name"
          autoFocus
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="searchButton" type="button" 
        onClick={ () =>{
          getWeatherInfo();
        }}>
          Search
        </button>
      </div>
    </div>
    <WeatherCard weatherApp={tempInfo}/>
  </>
  )};

export default Search;
