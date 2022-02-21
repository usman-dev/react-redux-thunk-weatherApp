import {FETCH_DATA} from "./types";
//INCREMENT, 
// export const incNumber = () =>{
//     // num
//     return{
//         type: "INCREMENT",
//         // payload: num
//     }
// };


export const fethData = (cityName) => async (dispatch) =>{

    console.log("this is fethData", cityName)
    try {
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dbf5fec987e94b3c6857e2d6dcfe493a`;
        let getData = await fetch(url);
        let parsedData = await getData.json();
        dispatch({
            type: FETCH_DATA,
            payload: parsedData,
        })

    //   const {temp, humidity, pressure} = parsedData.main;
    //   const {main: weathermood} = parsedData.weather[0];
    //   const {name} = parsedData;
    //   const {speed} = parsedData.wind;
    //   const {country, sunset} = parsedData.sys;

    //   const myNewWeatherInfo = {
    //     temp,
    //     humidity,
    //     pressure,
    //     weathermood,
    //     name,
    //     speed,
    //     country,
    //     sunset
    //   };
    //   setTempInfo(myNewWeatherInfo);

    } catch (error) {
        console.log("Api call is failed");
    }

};
