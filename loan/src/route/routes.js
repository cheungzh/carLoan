import React from 'react'
import { Route,Switch } from 'react-router-dom';
import LoginFrom from '../component/login/LoginForm';
import App from '../component/App';

// import ProductList from '../component/productList/ProductList';
import ProductDetail from '../component/productDetail/ProductDetail';
export default class Routes extends React.Component{
  render () {
    return (
        <Switch>
          <Route path="/user/login" component={LoginFrom} />
          <Route path="/product/detail" component={ProductDetail} />
          <Route path="/" component={App}/>
        </Switch>
    )
  }
}