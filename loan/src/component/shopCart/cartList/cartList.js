import './cartList.scss';
import React from 'react';
class CartList extends React.Component {
  render () {
    let { detail } = this.props;
    return (
      <article className="cart-list">
        <div className="list-check">
          <input type="radio" className=""/>
        </div>
        <div className="list-contain">
          <p className="product-pic">
            <img src={detail.productPic} alt="" className="product-pic"/>
          </p>
          <div className="product-description">
            <p className="product-name">{detail.productName}</p>
            <p className="product-price">{detail.productPrice}</p>
          </div>
        </div>
        <div className="list-control">
          <p className="count-dec" onClick={this.props.countDec}>-</p>
          <p className="count-input">{detail.count}</p>
          {/*<input type="text" defaultValue={detail.count} className="count-input"/>*/}
          <p className="count-sum" onClick={this.props.countSum}>+</p>
        </div>
      </article>
    )
  }
}



export default CartList;