import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherUnit from "./WeatherUnit";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
            <ul>
                <li>
                    <FormattedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row description">
                <div className="col-6 iconTemperature">
                    <img src={props.data.icon} alt={props.data.description} className="icon" />
                   <WeatherUnit fahrenheit={props.data.temperature} />
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Wind: {Math.round(props.data.wind)} mph</li>
                    </ul>
                </div>
            </div>
    </div>
    )
}