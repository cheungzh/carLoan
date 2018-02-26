import React from 'react';
import { connect } from 'react-redux';
import { Form, Input, Checkbox, Icon, Button } from 'antd';
import Tool from '../../Tool/Tool';

const FormItem = Form.Item;

class LoginForm extends React.Component {
  constructor (props) {
    super(props);
  }
  loginIn (dispatch) {
    this.props.form.validateFields((err,value) => {
      if(!err) {
        Tool.mFetch({
          url: '/api/user/login',
          data: {
            username: value.username,
            password: value.password
          }
        }).then((res) => {
          console.log(res);
          if(value.isMemory) {
            document.cookie = 'username=' + value.username;
          }
          Tool.tip({message: res.message});
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                username: value.username,
                loginState: true
              }
          });
        });
      }
    })
  }
  render () {
    const {getFieldDecorator } = this.props.form;
    const { loginForm, dispatch } = this.props;
    console.log(this.props);
    return (
      <div className="login-form">
        <div className="login-title">登陆</div>
        <Form>
          <FormItem hasFeedback={true}>
            {getFieldDecorator('username',{
              rules: [
                {required: true,pattern: /^[0-9]{6,13}$/,message: '用户名由6-13位的数字组成'}
              ],
              initialValue: loginForm.username
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
            )}
          </FormItem>
          <FormItem hasFeedback={true}>
            {
              getFieldDecorator('password',{
                rules: [
                  {required: true,pattern: /[a-zA-Z0-9]{6,}/,message: '密码必须由6位以上的数字或字母组成'}
                ]
            })
              (
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="密码" />
              )
            }
          </FormItem>
          <FormItem>
            {getFieldDecorator('isMemory',{
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>记住我</Checkbox>
            )}
            <a href="javascript:;" className="forget-password">忘记密码</a>
            <Button type="primary" className="login-button" onClick={this.loginIn.bind(this,dispatch)}>登陆</Button>
            <a href="javascript:;" className="login-register">注册</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}
export default connect((state) => {
  return {
    loginForm: state.loginInfo
  }
})(Form.create()(LoginForm));