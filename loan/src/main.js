import './css/style.scss';
import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store/store';
import Routes from './route/routes';
import Login from './component/login/login';
// console.log(store.getState());
import { fetchProduct } from './action/actionCreaters';
store.dispatch(fetchProduct());
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('loan')
)