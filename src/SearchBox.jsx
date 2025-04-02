import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({UpdateInfo}){
    // state variable has access to every one ..otherwise pass city in the async(city) like this 
    const [ city,setcity] = useState("");
    const [ error,seterror] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_key = "e6bc34e8cf3e9ae017413d0ef5c08200";

    let  getWeatherInfo = async () =>{
        try{
            let response =    await fetch(`${API_URL}?q=${city}&appid=${API_key}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);
            let result = {
                city : city,
                temp : jsonResponse.main.temp,
                tempMin : jsonResponse.main.temp_min,
                tempMax : jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feels_like : jsonResponse.main.feels_like,
                weather : jsonResponse.weather[0].description,
               
            };
            console.log(result);
            return result;
        } catch(err){
           throw err;
        }

    };



    let handleChange = (evt) =>{
        setcity(evt.target.value)
    };


    let handleSubmit = async (evt) =>{
        try{
            evt.preventDefault();
            console.log(city);
            setcity("");
            let newInfo = await getWeatherInfo();
            UpdateInfo(newInfo);
        } catch(err){
            seterror(true);

        }
    };


    return(
        <div className='searchBox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city}  onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type='submit'> Search</Button>
            {error && <p style = {{color : "red"}}> No such place exists! </p>}
            </form>
        </div>
    );
}