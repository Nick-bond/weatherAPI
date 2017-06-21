import React from 'react';
import PropTypes from "prop-types";
import styles from "../../styles/styles.css"
import ForecastItems from "./ForecastItems"
import SearchBar from "./SearchBar"

const Home = ({forecast, loading, isInit, getFiveDaysWeather, getTenDaysWeather, initDefaultWeather, searchWeatherByCityName, getOneDayWeather}) => {
    if (!isInit) {
        initDefaultWeather();
    };

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
                 <SearchBar searchWeatherByCityName={searchWeatherByCityName} />
             </header>
                 <ForecastItems data={forecast}/>
         </div>
     );
};

Home.propTypes = {
    forecast: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    isInit: PropTypes.bool.isRequired,
    initDefaultWeather: PropTypes.func.isRequired,
    getOneDayWeather: PropTypes.func.isRequired,
    getFiveDaysWeather: PropTypes.func.isRequired,
    getTenDaysWeather: PropTypes.func.isRequired,
    searchWeatherByCityName: PropTypes.func.isRequired
};

export default Home;

