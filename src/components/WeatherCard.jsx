import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherCard = () => {
    const [ubication, setUbication] = useState({});

    useEffect(() => {
        const success = pos => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            const key = '416f27cdd110df849d865b0d0b52e766';
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
                .then(res => setUbication(res.data));
        }
        navigator.geolocation.getCurrentPosition(success);
    }, [])

    // datos
    const country = ubication.sys.country;
    const city = ubication.name;
    const icon = ubication.weather[0].icon;
    const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    const temperature = ubication.main.temp;
    const celsius = Math.round(temperature - 273.15);
    const farenheit = Math.round((celsius * (9/5)) + 32);
    const humidity = ubication.main.humidity;
    const wind = ubication.wind.speed;

    return (
        <div>
            
        </div>
    );
};

export default WeatherCard;