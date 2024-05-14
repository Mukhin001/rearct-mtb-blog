import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import './index.css';
// import App from './App';
import './wrapper-css/common.css'

import Header from './body/header.jsx';
import Main from './body/main.jsx';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const wrapper = ReactDOM.createRoot(document.querySelector('.wrapper'));
wrapper.render(
  <React.StrictMode>
    <Header />
    <Main />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
