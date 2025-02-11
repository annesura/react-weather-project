import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Houston</h1>
            <ul>
                <li>Monday 18:15</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row description">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Weather icon" className="icon" />
                   <span className="temperature">71</span> <span className="unit">°F</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 2%</li>
                        <li>Humidity: 76%</li>
                        <li>Wind: 11 mph</li>
                    </ul>
                </div>


            </div>

        </div>
    )
}