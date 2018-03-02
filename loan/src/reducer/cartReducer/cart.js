import { CHECK_CANCEL, CHECK_IN, CHECK_CANCEL_ALL, CHECK_IN_ALL, ADD_TO_CART, DEC_FROM_CART, CHECK_OUT_CART } from '../../action/actions';
import { fromJS } from 'immutable';

const initialState = {
  chooseIds: [],
  quantityByIds: {}
};

export const chooseIds = (state=initialState.chooseIds,action) => {
  switch (action.type) {
    case CHECK_IN:
      let { productId } = action;
      if(productId) {
        return [...state,productId];
      }
      return state;
    case CHECK_CANCEL:
      let { index } = action;
      return fromJS(state).delete(index).toJS();
    case CHECK_CANCEL_ALL:
      return fromJS(state).clear().toJS();
    case CHECK_IN_ALL:
      return action.productIds;
    default: return state;
  }
};

/*购物车数量增减*/
export const quantityByIds = (state=initialState.quantityByIds,action) => {
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
    case CHECK_OUT_CART:
      let checkOutIds = action.checkOutIds;
      return {
        ...checkOutIds.reduce((state,id) => {
          delete state[id+''];
          return state;
        },state)
      };
    default:
      return state;
  }
};

// 获取总价
const getQuantity = (state,id) => state.quantityByIds[id];
const getPrice = (state,id) => state.productsById[id].price;
export const getTotalPrice = (state) => {
  return state.chooseIds.reduce((total,id) => {
    return total + getQuantity(state,id) * getPrice(state,id)
  },0)
};

// 获取已经选择的产品 -> 可购买
export const getVisibleBuys = (state) => {
  let { chooseIds, productsById } = state;
  return chooseIds.map(id => productsById[id])
};

