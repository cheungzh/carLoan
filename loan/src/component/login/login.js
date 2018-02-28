import React from 'react';
import { connect } from 'react-redux';
import Header from '../../component/common/header/header';
import LoginForm from './loginForm/LoginForm';
class Login extends React.Component {
  constructor (props,context) {
    super(props,context);
  }
  render () {
    return (
      <div>
        <Header title="登陆"/>
        <LoginForm login={this.loginSuccess.bind(this)}/>
      </div>
    )
  }
  loginSuccess () {
    const url = this.props.match.params.url;
    if(url) {
      this.props.history.push('/' + url);
    }else {
      this.props.history.push('/');
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loginInfo: state.loginInfo
  }
};
export default connect(mapStateToProps)(Login);
