import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL= 'http://localhost:3000/';
axios.defaults.headers.common['Authorization']='access_token '+ localStorage.getItem('access_token'); //internal....in config token jwt encr and decrip my code helpers
// const config = {
//   headers:{
//       Authorization:"Bearer " + localStorage.getItem('access_token')

//      // access_token:"x-www-form-urlencoded"+localStorage.getItem('access_token')
//   }
// };


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
