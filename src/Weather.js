import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            description: response.data.condition.description,
            icon: response.data.condition.icon_url,
            temperature: response.data.temperature.current,
            humidity: response.data.temperature.humidity,
            wind: response.data.wind.speed,
        })

    }

    


    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={weatherData.date} />
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row description">
                <div className="col-6">
                    <img src={weatherData.icon} alt={weatherData.description} className="icon" />
                   <span className="temperature">{Math.round(weatherData.temperature)}</span> <span className="unit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {weatherData.humidity}%</li>
                        <li>Wind: {Math.round(weatherData.wind)} mph</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    }
    else {
        const apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);

        return "Loading. . .";
    }
}