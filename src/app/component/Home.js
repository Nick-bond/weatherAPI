import React from 'react';
import PropTypes from "prop-types";
import styles from "../../styles/styles.css"
import ForecastItems from "./ForecastItems"
import SearchBar from "./SearchBar"

const Home = ({forecast, loading, getTodayWeather, isInit, getFiveDaysWeather, getTenDaysWeather, gettingUserGeoPosition, handleChange, getOneDayWeather}) => {
    if (!isInit) {
        function* showWeatherForUser() {
            let takeGeolocation = yield gettingUserGeoPosition();
            let showWeather = yield getTodayWeather(takeGeolocation.lat, takeGeolocation.long);
            return 1;
        };
        function execute(generator, yieldValue) {
            let next = generator.next(yieldValue);
            if (!next.done) {
                next.value.then(
                    result => execute(generator, result),
                    err => generator.throw(err)
                );
            } else {
              return false;
            }
        }
        execute(showWeatherForUser());
    }

    const sendData = (x) => {
        return getFiveDaysWeather(5)
    }

    if (loading) {
        return <div className="preloader"></div>
    }

     return (
         <div>
             <header className="header">
                 <div className="buttons">
                     <div className="link" onClick={getOneDayWeather.bind(null, forecast)}>Show weather for today</div>
                     <div className="link" onClick={getFiveDaysWeather.bind(null, forecast)}>Show weather for 5 days</div>
                     <div className="link" onClick={getTenDaysWeather.bind(null, forecast)}>Show weather for 10 days</div>
                 </div>
                 <SearchBar handleChange={handleChange} />
             </header>
                 <ForecastItems data={forecast}/>
         </div>
     );
};


Home.propTypes = {
    getTodayWeather: PropTypes.func.isRequired,
    forecast: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    isInit: PropTypes.bool.isRequired,
    getFiveDaysWeather: PropTypes.func.isRequired,
    getTenDaysWeather: PropTypes.func.isRequired
};

export default Home;

