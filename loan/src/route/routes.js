import React from 'react'
import { Route,Switch } from 'react-router-dom';
import Login from '../component/login/login';
import App from '../component/App';

import ProductDetail from '../component/productDetail/ProductDetail';
export default class Routes extends React.Component{
  render () {
    return (
        <Switch>
          <Route path="/user/login/:url" component={Login} />
          <Route path="/user/login" component={Login} />
          <Route path="/product/detail" component={ProductDetail} />
          <Route path="/" component={App}/>
        </Switch>
    )
  }
}