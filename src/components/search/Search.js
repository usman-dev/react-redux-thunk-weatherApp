import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import WeatherCard from "../weatherCard/WeatherCard";
import { fethData } from "../../redux/actions";
import "../style/style.css";

const Search = () => {
  const [searchValue, setSearchValue] = useState("lahore");
  const dispatch = useDispatch();

  const getWeatherInfo = () => {
    dispatch(fethData(searchValue));
  };

  useEffect(() => {
    dispatch(fethData(searchValue));
  }, [searchValue]);

  return (
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
          <button
            className="searchButton"
            type="button"
            onClick={() => {
              getWeatherInfo();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard />
    </>
  );
};

export default Search;
