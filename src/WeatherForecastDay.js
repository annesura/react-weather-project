import React from "react";

export default function WeatherForecastDay(props) {
    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        
        return days[day];
    }


    function maximumTemperpature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }

    function minimumTemperpature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }




    return (
        <div className="WeatherForecastDay">
        <div className="WeatherForecastDaily">{day()}</div>
        <img src={props.data.condition.icon_url} alt={props.data.condition.description} className="forecastIcon" />
        <div className="WeatherForecastTemperatures"> <span className="WeatherForecastTemperatureMax">{maximumTemperpature()}</span> <span className="WeatherForecastTemperatureMin">{minimumTemperpature()}</span></div>
        </div>
    )
}