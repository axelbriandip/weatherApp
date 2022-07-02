import React, { useEffect } from 'react';
import axios from 'axios';

const WeatherCard = () => {
    useEffect(() => {
        const success = pos => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            const key = '416f27cdd110df849d865b0d0b52e766';
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
                .then(res => console.log(res.data))
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])
    return (
        <div>
            <h1>test</h1>
        </div>
    );
};

export default WeatherCard;