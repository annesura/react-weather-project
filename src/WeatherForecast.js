import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

    function getForecast(response) {
        console.log(response);
    }

    let city = props.data.city;
    const apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
    let apiForecastUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=imperial`
    axios.get(apiForecastUrl).then(getForecast)

    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecastDay">Sat</div>
                    <img src={props.data.icon} alt={props.data.description} className="icon" />
                    <div className="WeatherForecastTemperatures"> <span className="WeatherForecastTemperatureMax">19°</span> <span className="WeatherForecastTemperatureMin">10°</span></div>
                </div>
            </div>
        </div>
    )
}