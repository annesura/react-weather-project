import React from "react";

export default function FormattedDate(props) {
    console.log(props.data);

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (hour < 10) {
        hour = `0${minutes}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    return <div>{day} {hour}:{minutes} </div>
}