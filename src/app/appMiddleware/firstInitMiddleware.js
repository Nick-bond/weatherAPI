const firstInitMiddleware = ({dispatch, getState}) => {
    return next => action => {
        const {
            constData,
            url,
            key
        } = action;

        if (!constData) {
            return next(action);
        }

        if (
            !Array.isArray(constData) ||
            constData.length !== 3 ||
            !constData.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.')
        }

        const [ requestType, successType, failureType ] = constData;


        function gettingUserGeoPosition() {
            return new Promise(function (resolve, reject) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    resolve({
                        lat: position.coords.latitude,
                        long: position.coords.longitude
                    });
                });
            });
        };

        function* showWeatherForUser() {
            let takeGeolocation = yield gettingUserGeoPosition();
            let showWeather = yield weatherFirstInit(takeGeolocation.lat, takeGeolocation.long);
            
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
        };

        execute(showWeatherForUser());
        
        function weatherFirstInit (lat, lon) {
            dispatch({type: requestType, loading: true});
            return fetch(`${url}lat=${lat}&lon=${lon}&cnt=1&APPID=${key}`)
                .then(response => response.json())
                .then(json => dispatch({type: successType, loading: false, data: json}))
                .catch(e => dispatch({type: failureType, loading: false, msg: e}))
        };
    };
};

export default firstInitMiddleware;