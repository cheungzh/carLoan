import { combineReducers } from 'redux';
import * as type from '../action/actions';
import { getCookie } from '../component/common/grid';
import Immutable, {fromJS} from 'immutable';
const defaultState = {
  loading: false,
  loginInfo: {
    loginState: false,
    username: getCookie('username') || ''
  },
  productList: []
};


/*
* 验证登陆,更改登陆状态
* */
const loginInfo = (state=defaultState.loginInfo,action) => {
  switch(action.type) {
    case type.LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default: return state;
  }
};

/*
* 获取产品列表信息
* */
const productList = (state=defaultState.productList,action) => {
  switch (action.type) {
    case type.RECEIVE_PRODUCT:
      return [...state,...action.payload];
    case type.FETCH_PRODUCT:
      return state;
    default: return state;
  }
};

export default combineReducers({
  loginInfo,
  productList
})