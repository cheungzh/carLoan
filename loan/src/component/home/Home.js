import React from 'react';
import { connect } from 'react-redux';
import {Input,Icon } from 'antd';
import ProdcutList from './productList/productList';
import Condition from './condition/condition';
import { fetchProduct } from '../../action/actionCreaters';
class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProduct())
  }
  render () {
    let { productList } = this.props;
    console.log(productList);
    return (
      <div className="product-home">
        <header className="product-search">
          <input type="text"/>
          {/*<Input type='text' prefix={<Icon type="search"/>} placeholder="请输入品牌、色号、名称等查询"/>*/}
        </header>
        <section className="product-condition">
          <Condition />
        </section>
        <main className="product-contain">
          <ProdcutList productList={productList}/>
        </main>
      </div>
    )
  }
}
const mapStateToPros = (state) => {
  return {
    productList: state.productList
  }
};
export default connect(mapStateToPros)(Home);
