import React, { useState } from "react";

export default function WeatherUnit(props) {
    const [unit, setUnit] = useState('fahrenheit');

    function getCelsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function getFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertToCelsius() {
        return 5/9 * (props.fahrenheit - 32);
    }


    if (unit === 'fahrenheit') {
        return (
            <span className="WeatherUnit">
                <span className="temperature">{Math.round(props.fahrenheit)}</span> 
                <span className="unit">°F | <a href="/" onClick={getCelsius}>°C</a></span>
            </span>
        );
    } else {
        
        return (
            <span className="WeatherUnit">
                <span className="temperature">{Math.round(convertToCelsius())}</span> 
                <span className="unit"><a href="/" onClick={getFahrenheit}>°F</a> | °C</span>
            </span>
        )
    }
}