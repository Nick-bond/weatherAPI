import { connect } from "react-redux";
import Home from "../component/Home";
import { weatherAction, weatherFiveDays, weatherTenDays, findCityByGeolocation, onFullFillFormCity, weatherOneDay} from "../actions/actions";

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = (dispatch, state) => {
    function gettingUserGeoPosition() {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (position) {
                resolve({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                });
            });
        });
    }
    
    return {
        getTodayWeather: (x, y, i) => dispatch(weatherAction(x, y, i)),
        getOneDayWeather: (x) => dispatch(weatherOneDay(x)),
        getFiveDaysWeather: (x) => dispatch(weatherFiveDays(x)),
        getTenDaysWeather: (x) => dispatch(weatherTenDays(x)),
        gettingUserGeoPosition: () => gettingUserGeoPosition(),
        handleChange: () => dispatch(findCityByGeolocation())
    };

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
