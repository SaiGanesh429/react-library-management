import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/'

axios.interceptors.request.use(request => {
    return request
})

axios.interceptors.response.use(response => {
    return response
})
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
