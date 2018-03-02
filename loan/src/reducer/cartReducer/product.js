import { combineReducers } from 'redux'

import { ADD_TO_CART, RECEIVE_PRODUCT, DEC_FROM_CART } from '../../action/actions';
const initialState = {
  addedIds: [],
  quantityByIds: {},
  productsById: {}
};


/*增加产品id*/
const addedIds = (state=initialState.addedIds,action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let { productId } = action;
      if(state.indexOf(productId) !== -1) {
        return state;
      }else {
        return [...state,productId];
      }
    default:
      return state;
  }
};


/*向购物车添加数据*/
const products = (state,action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        stock: state.stock - 1
      };
    case DEC_FROM_CART:
      return {
        ...state,
        stock: state.stock + 1
      }
    default: return state;
  }
};

const productsById = (state = {},action) => {
  switch (action.type) {
    case RECEIVE_PRODUCT:
      return {
        ...state,
        ...action.payload.reduce((obj, product) => {
          obj[product.id] = product;
          return obj
        }, {})
      };
    default:
      const { productId } = action;
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
};

/*购物车数量增减*/
const quantityByIds = (state=initialState.quantityByIds,action) => {
  let { productId } = action;
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        [productId]: state[productId] + 1 || 1
      };
    case DEC_FROM_CART:
      return {
        ...state,
        [productId]: state[productId] - 1
      };
    default:
      return state;
  }
};



export default combineReducers({
  addedIds,
  productsById,
  quantityByIds
})