import { REQUEST_DATA_SUCCESS, REQUEST_DATA_ERROR } from '../actions/constants';

const defaultState = {
    lat: 48.4283,
    long: 35.0381
};

export default function weatherData(state = {forecast: defaultState, loading: true, isInit: false}, action) {
    switch (action.type) {
        case REQUEST_DATA_SUCCESS:
            return  { ...state, forecast: action.data, loading: false, isInit: true };
        case REQUEST_DATA_ERROR:
           return  { ...state, isInit: true };
        }
    return state;
};
