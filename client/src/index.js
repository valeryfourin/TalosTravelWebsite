
import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import TourStore from './store/TourStore';
import UserStore from './store/UserStore';
import OrderStore from './store/OrderStore';
// import reportWebVitals from './reportWebVitals';

export const Context = createContext(null);
ReactDOM.render(
  <Context.Provider value={{
    user: new UserStore(),
    tour: new TourStore(),
    order: new OrderStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
