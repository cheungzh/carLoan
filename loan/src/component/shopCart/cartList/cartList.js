import './cartList.scss';
import React from 'react';
class CartList extends React.Component {
  render () {
    let { detail } = this.props;
    return (
      <section className="cart-list">
        <div className="list-check">
          <input type="checkbox" defaultChecked={detail.checked} onChange={this.props.check}/>
        </div>
        <div className="list-contain">
          <div className="product-pic">
            <img src={detail.productPic} alt="" className="product-pic"/>
          </div>
          <div className="product-description">
            <p className="product-name">{detail.productName}</p>
            <p className="product-price">¥{detail.productPrice}</p>
            <p className="product-stock">库存剩余:{detail.stock}</p>
          </div>
        </div>
        <div className="list-control">
          <p className="count-dec" onClick={this.props.countDec}>-</p>
          <p className="count-input">{detail.count}</p>
          {/*<input type="text" defaultValue={detail.count} className="count-input"/>*/}
          <p className="count-sum" onClick={this.props.countSum}>+</p>
        </div>
      </section>
    )
  }
}



export default CartList;