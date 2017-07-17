const API_KEY = "2b04e85ae59c6188863aa5cab712843f";
const API_URL = "http://api.openweathermap.org/data/2.5/forecast/daily?";

import { REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR } from "./constants";

export const initDefaultWeather = () => {
    return {
        constData: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        url: API_URL,
        key: API_KEY
    }
};

export const weatherOneDay = (data) => {
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&cnt=1&APPID=${API_KEY}`)
    }
};

export const weatherFiveDays = (data) => {
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&cnt=5&APPID=${API_KEY}`)
    }
};

export const weatherTenDays = (data) => {
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}lat=${data.city.coord.lat}&lon=${data.city.coord.lon}&cnt=10&APPID=${API_KEY}`)
    }
};

export const weatherByCityNameSearch = (cityName) => {
    return {
        types: [REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR],
        getAPIData: () => fetch(`${API_URL}q=${cityName}&cnt=1&APPID=${API_KEY}`)
    };
};
