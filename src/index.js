import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/reducers";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);


root.render(
    <BrowserRouter >
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
