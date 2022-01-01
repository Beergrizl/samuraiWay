import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './Redux/redux-store';
import SamuraiJSApp from "./App";

ReactDOM.render(
    <SamuraiJSApp/>
    , document.getElementById('root')
);
