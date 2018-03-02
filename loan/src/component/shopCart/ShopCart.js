import './shopcart.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../common/module';
import CartList from './cartList/cartList';
import BuyProduct from './buyProduct/buyProduct';
import Header from '../common/header/header';
class ShopCart extends React.Component {
  componentDidMount () {

  }
  componentWillUnmount () {

  }
  checkAll () {
    console.log('checkAll');
  }
  buyProduct () {
    console.log('buy');
  }
  render () {
    let { list } = this.props;
    return (
      <div className="shop-cart">
        <Header title={"购物车( " + list.length + " )" }/>
        <CartList />
        <section className="foot">
          <BuyProduct
            buyProduct={this.buyProduct.bind(this)}
            checkAll={this.checkAll.bind(this)}
          />
        </section>
      </div>
    )
  }
};

const getProduct = (state) => {
  let { addedIds, productsById } = state;
  return addedIds.map(id => {
    return productsById[id]
  })
};
export default connect((state) => {
  return {
    list: getProduct(state.cartList)
  }
})(ShopCart);