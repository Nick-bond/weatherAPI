import { connect } from "react-redux";
import Home from "../component/Home";
import {initDefaultWeather, weatherOneDay, weatherFiveDays, weatherTenDays, weatherByCityNameSearch} from "../actions/actions";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch, state) => {
    return {
        initDefaultWeather: () => dispatch(initDefaultWeather()),
        getOneDayWeather: (x) => dispatch(weatherOneDay(x)),
        getFiveDaysWeather: (x) => dispatch(weatherFiveDays(x)),
        getTenDaysWeather: (x) => dispatch(weatherTenDays(x)),
        searchWeatherByCityName: (x) => dispatch(weatherByCityNameSearch(x))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);