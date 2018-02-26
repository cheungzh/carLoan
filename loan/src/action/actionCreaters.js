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
