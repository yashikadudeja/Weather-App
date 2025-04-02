import { useState } from "react";
import SearchBox from "./searchBox";  
import InfoBox from './InfoBox';      

export default function WeatherApp() {
    const[WeatherApp,setWeatherApp] = useState({
        city : "Delhi",
        feels_like: 28.04,
        humidity : 32,
        temp : 29.05,
        tempMax : 29.05,
        tempMin : 29.05,
        weather : "haze",
    });

    let UpdateInfo = (newInfo) => {
        setWeatherApp(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2><b>Weather App</b> </h2>
            <SearchBox UpdateInfo={UpdateInfo}/>
            <InfoBox info={WeatherApp}/> 
        </div>
    );
}
