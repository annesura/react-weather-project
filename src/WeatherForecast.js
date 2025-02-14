import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data]);
    
    function getResponse(response) {
        setLoaded(true);
        setForecast(response.data.daily);
    }
    
    if (loaded) {
        console.log(forecast);
        return (
            <div className="WeatherForecast">
                <div className="row">
                    {forecast.map(function(dailyForecast, index) {
                        if (index > 0 && index < 6) {
                            return (
                                <div className="col" key={index}>
                                    <WeatherForecastDay data={dailyForecast} />
                                </div>
                            );
                        }
                    })}   
                </div>
            </div>
        )
        
    } else {
        let city = props.data.city;
        const apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
        let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`
        axios.get(apiForecastUrl).then(getResponse);

        return null;
}
}