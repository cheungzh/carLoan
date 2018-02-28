import './productList.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function ListItem (props) {
  const { listItem } = props;
  return (
    <li className="product-item">
      <Link to={{pathname: '/product/detail',state: listItem,search: "?id="+listItem.id}}>
        <section className="product-img">
          <img src={listItem.productPic} alt={listItem.productName}/>
        </section>
        <section className="product-description">
          <p className="product-price">¥{listItem.price}</p>
          <p className="product-sale">{listItem.sale}人已购买</p>
        </section>
        <aside className="product-title">{listItem.productName}</aside>
      </Link>

    </li>
  )
}

function ProductList (props) {
  const { productList } = props;
  return (
    <div>
      {productList.length > 0 && <ul className="product-contain">
        {productList.map((item) => {
          return <ListItem key={item.id} listItem={item}/>
        })}
      </ul>}
    </div>
  )
}
ProductList.propTypes = {
  productList: PropTypes.array
};
export default ProductList;
