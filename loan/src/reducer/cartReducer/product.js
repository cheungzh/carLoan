import { ADD_TO_CART, RECEIVE_PRODUCT, DEC_FROM_CART, CHECK_OUT_CART } from '../../action/actions';

const initialState = {
  addedIds: [],
  productsById: {}
};


/*增加产品id*/
export const addedIds = (state=initialState.addedIds,action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let { productId } = action;
      if(state.indexOf(productId) !== -1) {
        return state;
      }else {
        return [...state,productId];
      }
    case CHECK_OUT_CART:
      let checkOutIds = action.checkOutIds;
      return [...state.filter(id => checkOutIds.indexOf(id) === -1)]
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
      };
    default: return state;
  }
};

export const productsById = (state = {},action) => {
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

//获取添加到购物车的产品
export const getProduct = (state) => {
  let { addedIds, productsById } = state;
  return addedIds.map(id => {
    return productsById[id]
  })
};
