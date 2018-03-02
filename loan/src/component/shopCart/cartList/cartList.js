import React from 'react';
import { connect } from 'react-redux';
import Tool from '../../../Tool/Tool';
import { checkItem } from '../../../action/actionCreaters';
//购物车条目
function ListItem(props) {
  let { detail } = props;
  return (
    <section className="cart-list">
      <div className="list-check">
        <input type="checkbox" defaultChecked={detail.checked} onChange={props.check}/>
      </div>
      <div className="list-contain">
        <div className="product-pic">
          <img src={detail.productPic} alt="" className="product-pic"/>
        </div>
        <div className="product-description">
          <p className="product-name">{detail.productName}</p>
          <p className="product-price">¥{detail.price}</p>
          <p className="product-stock">库存剩余:{detail.stock}</p>
        </div>
      </div>
      <div className="list-control">
        <p className="count-dec" onClick={props.countDec}>-</p>
        <p className="count-input">{detail.count || 1}</p>
        {/*<input type="text" defaultValue={detail.count} className="count-input"/>*/}
        <p className="count-sum" onClick={props.countSum}>+</p>
      </div>
    </section>
  )
}

//购物车所有产品
class CartList extends React.Component {
  render () {
    let { list } = this.props;
    return (
      <div style={{marginBottom: "93px",marginTop:'-10px'}}>
        {list.map((item,index) => {
          return <ListItem
            detail={item}
            key={item.id}
            countDec={this.countDec.bind(this,item,index)}
            countSum={this.countSum.bind(this,item,index)}
            check={this.check.bind(this,item.id)}
          />
        })}
      </div>
    )
  }
  countDec (item) {
    if(item.count > 1) {
      return this.props.dispatch({type:'DEC_FROM_CART',productId: item.id});
    }
    Tool.tip({
      message: '至少选择一件商品'
    })
  }
  countSum (item) {
    if(item.stock < 1) {
      Tool.tip({
        message: '库存不足'
      });
      return;
    }
    this.props.dispatch({type:'ADD_TO_CART',productId: item.id});
  }
  check (productId) {
    this.props.dispatch(checkItem(productId));
  }
}

const getProduct = (state) => {
  let { addedIds, productsById, quantityByIds } = state;
  return addedIds.map(id => {
    return {
      ...productsById[id],
      count: quantityByIds[id]
    }
  })
};
const mapStateToProps = (state) => ({
  list: getProduct(state.cartList)
});

export default connect(mapStateToProps)(CartList);