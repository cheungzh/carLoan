// import React from 'react';
// import { connect } from 'react-redux'
// // import { Col,Row, Input, Button, getCookie  } from'../common/grid';
// // import { getCookie } from '../common/grid';
// import Tool from '../../Tool/Tool';
// import { Input, Form, Icon, Checkbox,Button } from 'antd';
// class login extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       username: props.username || '',
//       password: props.password || '',
//       isMemory: false
//     };
//     this.changeMemory = this.changeMemory.bind(this);
//   }
//
//   componentWillReceiveProps(nextProps) {
//     console.log(nextProps);
//   }
//   render () {
//     let { loginIn } = this.props;
//     console.log(this.props);
//     return (
//       <div className="login">
//         <p>登陆</p>
//         <form ref="loginForm">
//           <Input placeholder="用户名"/>
//           {/*<Input name="username" placeholder="用户名" dataValue={this.state.username} dataChange={this.handleData.bind(this,'username')}/>*/}
//           {/*<Input name="password" type="password" placeholder="密码" dataValue={this.state.password} dataChange={this.handleData.bind(this,'password')}/>*/}
//           <div className="login-memory clearfix">
//             <div>
//               <input type="checkbox" id="rember" checked={this.state.isMemory} onChange={this.changeMemory}/>
//               <label htmlFor="rember">记住我</label>
//             </div>
//             <div className="findPassWord">
//               <a href="javascript:;">找回密码</a>
//             </div>
//           </div>
//           <Button type="success" click={loginIn.bind(this,this.state)}>登陆</Button>
//         </form>
//         <div className="register">
//           注册
//         </div>
//       </div>
//     )
//   }
//   handleData (type,event) {
//     this.setState({
//       [type]: event.target.value
//     });
//   }
//   changeMemory () {
//     this.setState((preState) => (
//     {isMemory: !preState.isMemory}
//     ))
//   }
//
// }
// const mapStateToProps = (state) => {
//   return {
//     username: state.loginInfo.username,
//     loginState: state.loginInfo.loginState
//   }
// };
// const loginAction = (user, getState) => {
//   return function (dispatch) {
//     dispatch({
//       type: "LOGIN",
//       meta: user
//     })
//   }
// }
// const mapDispatchToProps = (dispatch,ownprop) => {
//   return {
//     loginIn: ({username,password,isMemory}) => {
//       console.log(isMemory);
//       if(isMemory) {
//         document.cookie = 'username='+username;
//       }
//       if(!/^[0-9]{6,13}$/.test(username)) {
//         console.log('只能是6-13位的数字');
//         return;
//       }
//       var reg = /[a-zA-Z0-9]{6,}/;
//       if(!reg.test(password)) {
//         console.log('密码必须由6位以上的数字或字母组成')
//       };
//       dispatch({
//         type:'LOADING',
//         meta: '登陆中'
//       });
//       Tool.mFetch({
//         url: '/api/user/login',
//         data: {
//           username: username,
//           password: password
//         }
//       }).then((res) => {
//         console.log(res);
//         dispatch(loginAction(username));
//       });
//     }
//   }
// };
//
//
//
// export default connect(mapStateToProps,mapDispatchToProps)(login);
//
//
