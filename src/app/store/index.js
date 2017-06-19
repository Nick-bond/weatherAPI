import { createStore, applyMiddleware } from 'redux';
import weatherData from '../reducers/reducers';
import thunk from 'redux-thunk';
import getDataMiddleware from '../appMiddleware/getDataMiddleware';

export default function storeApp() {
    return createStore(
        weatherData,
        applyMiddleware(getDataMiddleware, thunk)
    );
}