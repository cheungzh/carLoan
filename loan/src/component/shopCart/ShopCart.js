import './shopcart.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../common/module';
import CartList from './cartList/cartList';
import BuyProduct from './buyProduct/buyProduct';
class ShopCart extends React.Component {
  componentDidMount () {
    console.log(this.props);
  }
  componentWillUnmount () {
    console.log('remove');
  }
  countDec (item,index) {
    if(item.count > 1) {
     return this.props.dispatch({type:'DEC_CART',payload: index});
    }
    console.log('至少选择一件商品');

  }
  countSum (item,index) {
    if(item.count == item.stock) {
      console.log('库存紧张');
      return;
    }
    this.props.dispatch({type:'ADD_CART',payload: index});
  }
  check () {
    console.log('checked change');
  }
  checkAll () {
    console.log('checkAll');
  }
  buyProduct () {
    console.log('buy');
  }
  render () {
    let { cartList } = this.props;
    return (
      <div className="shop-cart">
        <article>
            {cartList.map((item,index) => {
              return <CartList
                detail={item} key={item.id}
                countDec={this.countDec.bind(this,item,index)}
                countSum={this.countSum.bind(this,item,index)}
                check={this.check.bind(this,item.id)}
              />
            })}
        </article>
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

export default connect((state) => {
  return {
    cartList: state.cartList
  }
})(ShopCart);