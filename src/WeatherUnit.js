import React, { useState } from "react";

export default function WeatherUnit(props) {

    return (
        <span className="WeatherUnit">
            <span className="temperature">{Math.round(props.fahrenheit)}</span> 
            <span className="unit">°F</span>
        </span>
    );
}