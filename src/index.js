import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import configureStore from "./store/configureStore";
import {Provider} from "react-redux";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));