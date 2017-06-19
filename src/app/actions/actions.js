//const API_KEY = "1a7a6c9afdae6a32d0b551ed26e5dc87"; if api key would be blocked 
const API_KEY = "2b04e85ae59c6188863aa5cab712843f";
const GOOGLE_API_KEY_GEOLOCATION = "AIzaSyDuGNkF_9brEJizCw5srLVQ9lgNav_OokU";
const API_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?";
const API_GOOGLE_URL = "https://maps.googleapis.com/maps/api/geocode/json?latlng=23.714224,78.961452&key=YOUR_SERVER_API_KEY";

import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR, REQUEST_CITY_HINT } from "./constants";


export const weatherAction = (lat, long) => {
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${lat}&lon=${long}&cnt=1&APPID=${API_KEY}`)
    }
};

export const weatherOneDay = (data) => {
    let lat = data.city.coord.lat;
    let long = data.city.coord.lon;
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${lat}&lon=${long}&cnt=1&APPID=${API_KEY}`)
    }
};

export const weatherFiveDays = (data) => {
    let lat = data.city.coord.lat;
    let long = data.city.coord.lon;
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${lat}&lon=${long}&cnt=5&APPID=${API_KEY}`)
    }
};

export const weatherTenDays = (data) => {
    let lat = data.city.coord.lat;
    let long = data.city.coord.lon;
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${lat}&lon=${long}&cnt=10&APPID=${API_KEY}`)
    }
};

export const findCityByGeolocation = (cityName) => {
    console.log(cityName)
    cityName = "Dnipro";
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=${GOOGLE_API_KEY_GEOLOCATION}`;
    return {
        type: REQUEST_DATA,
        city: fetch(url)

    }
};

export const onFullFillFormCity = () => {
    let url = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY_GEOLOCATION}&libraries=places`;
    return {
        type: REQUEST_CITY_HINT,
        city: fetch(url)
    };
};

