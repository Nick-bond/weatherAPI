import React from "react";
import { render } from "react-dom";
import storeApp from "./store";
import Home from "./container/Home";
import { Provider } from 'react-redux';

const store = storeApp();

const app = (
    <Provider store={store} >
        <Home />
    </Provider>
);

render(app, window.document.getElementById('app'));