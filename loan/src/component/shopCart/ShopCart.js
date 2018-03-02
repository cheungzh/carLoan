import './shopcart.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//组件引入
import CartList from './cartList/cartList';
import BuyProduct from './buyProduct/buyProduct';
import Header from '../common/header/header';

import { selectAll, checkOut } from '../../action/actionCreaters';
import { getTotalPrice } from '../../reducer/cartReducer/cart';
import { getProduct } from '../../reducer/cartReducer/product';
class ShopCart extends React.Component {
  componentDidMount () {

  }
  componentWillUnmount () {
    this.props.dispatch({
      type: 'CHECK_CANCEL_ALL'
    })
  }
  checkAll (e) {
    this.props.dispatch(selectAll(e.target.checked))
  }
  buyProduct () {
    this.props.dispatch(checkOut());
  }
  render () {
    let { list, total, loginInfo } = this.props;
    let node = (() => {
      return list.length > 0
        ? <CartList />
        : <em className="empty-cart">购物车空空如也,<Link to="/">马上去添加</Link></em>
    })()
    return (
      <div className="shop-cart">
        <Header title={"购物车( " + list.length + " )" }/>
        {
          loginInfo.loginState ?
            <div>
              {node}
              <section className="foot">
                <BuyProduct
                  total={total}
                  buyProduct={this.buyProduct.bind(this)}
                  checkAll={this.checkAll.bind(this)}
                />
              </section>
            </div>
            : <div className="empty-cart">
            暂未登陆,<Link to="/user/login/shopCart">去登陆</Link>
          </div>
        }

      </div>
    )
  }
};

export default connect((state) => {
  return {
    list: getProduct(state.cartList),
    total: getTotalPrice(state.cartList),
    loginInfo: state.loginInfo
  }
})(ShopCart);