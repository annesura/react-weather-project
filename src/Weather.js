import React, { useState } from "react";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);

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

    function searchCity() {
        const apiKey = "0cca9cddf1f4t4bb307e8bfo1fa213f2";
        let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        searchCity();

    }

    function handleChange(event) {
        setCity(event.target.value);
    }


    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleChange} />
                </div>
                <div className="col-3">
                <input type="submit" value="Search" className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo data={weatherData} />
            <WeatherForecast data={weatherData} />
        </div>
        )
    }
    else {
        searchCity();

        return "Loading. . .";
    }
}