import './header.scss';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class Header extends React.Component {

  render () {
    let { title } = this.props;
    console.log(this.props);
    return (
      <div className="header">
        <span className="header-back" onClick={this.goBack.bind(this)}>
          {
            this.props.history
            ? <a href="javascript:;">&lt;</a>
            : <Link to="/">&lt;</Link>
          }
        </span>
        <span className="header-title">{title}</span>
      </div>
    )
  }
  goBack () {
    if(this.props.history) {
      return this.props.history.goBack();
    }
  }
}
export default connect()(Header);