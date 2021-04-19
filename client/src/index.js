import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TourStore from './store/TourStore';
import UserStore from './store/UserStore';
import OrderStore from './store/OrderStore';

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


