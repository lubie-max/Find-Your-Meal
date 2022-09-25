import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// setting up store and middleware section for redux for saga
import store from './ECOM/store';
import { Provider } from 'react-redux';
import App from './App';

//
import {BrowserRouter} from "react-router-dom"
//


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter>
    <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>

  

);

