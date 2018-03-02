import Tool from '../Tool/Tool';
export function fetchProduct (params={}) {
  return function (dispatch) {
    dispatch({type: 'FETCH_PRODUCT'});
    Tool.mFetch({
      url:'/api/product/list',
      data: params
    }).then((res) => {
      dispatch({type: 'RECEIVE_PRODUCT',payload: res.data})
    });
  }
}

//获取购物车数据
export function getCartList () {

}


//添加数据到购物车
export const addToCart = productId => (dispatch,getState) => {
  if(getState().cartList.productsById[productId].stock > 0) {
    dispatch({
      type: "ADD_TO_CART",
      productId
    });
    Tool.tip({
      message: '成功加入购物车,可去购物车查看'
    });
  }
};

//选中/取消 购物车数据结算
export const checkItem = (productId) => (dispatch,getState) => {
  let index = getState().cartList.chooseIds.indexOf(productId)
  if( index !== -1) {
    dispatch({
      type: 'CHECK_CANCEL',
      index
    })
  }else{
    dispatch({
      type: 'CHECK_IN',
      productId
    })
  }
};

