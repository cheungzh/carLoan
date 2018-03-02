import './productDetail.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import Header from '../common/header/header';
import { addToCart } from '../../action/actionCreaters';

class ProductDetail extends React.Component {
  componentDidMount () {
    const { location } = this.props;
    let id = location.state.id;
    /*
    * fetch 获取详情数据
    * Tool.mFetch()
    * */
  }
  render() {
    let { list } = this.props;
    let id = this.props.location.state.id;
    let detailList = list[id];
    return (
      <div>
        <Header title="详情"/>
        <div style={{width:"200px",height: "200px"}}>
          <img src={detailList.productPic} alt="" style={{width: '100%',height:'100%'}}/>
        </div>
        <p>{detailList.price}</p>
        <p>{detailList.productName}</p>
        <footer className="product-detail-foot">
          <div className="view-cart">
            <Link to='/shopCart'>
              <Icon type="shopping-cart" style={{fontSize: 16}}/>
              <span>购物车</span>
            </Link>
          </div>
          <span className={detailList.stock > 0 ? "add-cart" : 'add-cart disabled'}  onClick={this.addToCart.bind(this,detailList.id)}>加入购物车</span>
          <span className={detailList.stock > 0 ? 'buy-now' : 'buy-now disabled'} onClick={this.buyNow.bind(this)}>立即购买</span>
        </footer>
      </div>
    )
  }
  addToCart (productId) {
    this.props.dispatch(addToCart(productId));
  }
  buyNow () {
    console.log('buy')
  }
}


const mapStateToProps = (state) => {
  return {
    list: state.cartList.productsById
  }
};

export default connect(mapStateToProps)(ProductDetail);