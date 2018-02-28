import './condition.scss';
import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'antd';
import {fetchProduct} from '../../../action/actionCreaters';

class Condition extends React.Component {
  filter(type) {
    // this.props.dispatch(fetchProduct({price: price,sale:sale,complex: complex}))
    console.log(type);
  }

  render() {
    return (
      <ul className="condition">
        <li onClick={this.filter.bind(this, 'complex')}>综合</li>
        <li onClick={this.filter.bind(this, 'sale')}>
          <span className="condition-title">销量</span>
          <span className="condition-control">
          <Icon type="up"/>
          {/*<Icon type="down"/>*/}
        </span>
        </li>
        <li onClick={this.filter.bind(this, 'price')}>
          <span className="condition-title">价格</span>
          <span className="condition-control">
          <Icon type="up"/>
          {/*<Icon type="down"/>*/}
        </span>
        </li>
        <li onClick={this.filter.bind(this, 'filter')}>
          <span className="condition-title">筛选</span>
          <span className="condition-control">
          {/*<Icon type="filter"/>*/}
        </span>
        </li>
      </ul>
    )
  }
}


export default connect()(Condition);