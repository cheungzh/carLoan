import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

function Foot (props) {
  let  { pathname } = props.location;
  return (
    <ul className="foot">
      <li className="foot-name">
        <Link to='/' className={pathname == '/' ? 'active' : ''}>
          <Icon  type="home" style={{ fontSize: 16}}/>
          <span className="foot-title">首页</span>
        </Link>
      </li>
      <li className="foot-name">
        <Link to='/diy' className={pathname == '/diy' ? 'active' : ''}>
          <Icon  type="edit" style={{ fontSize: 16}}/>
          <span className="foot-title">DIY</span>
        </Link>
      </li>
      <li className="foot-name">
        <Link to='/shopCart' className={pathname == '/shopCart' ? 'active' : ''}>
          <Icon type="shopping-cart" style={{fontSize:16}}/>
          <span className="foot-title">购物车</span>
        </Link>
      </li>
      <li className="foot-name">
        <Link to='/personal' className={pathname == '/personal' ? 'active' : ''}>
          <Icon type="user" style={{fontSize:16}}/>
          <span className="foot-title">我的</span>
        </Link>
      </li>
    </ul>
  )
}

export default Foot;