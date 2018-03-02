import Tool from '../Tool/Tool';
export function fetchProduct (params={}) {
  return function (dispatch) {
    dispatch({type: 'FETCH_PRODUCT'});
    /*
    * 模拟数据
    **/
    /*let json = [
      {id:1,productPic: 'http://www.givenchybeauty.cn/files/2017/06/rougeinterdit.jpg',productName: '禁忌之吻霓虹唇膏',price:'303',sale:120,stock: 8},
      {id:2,productPic: 'http://www.givenchybeauty.cn/files/2017/12/le-rouge-sculpt-pro.jpg',productName: '纪梵希－高定香榭双色唇膏',price:'233',sale:200,stock: 2385},
      {id:3,productPic: 'https://gd3.alicdn.com/imgextra/i2/1970926915/TB2vxNUinnI8KJjSszbXXb4KFXa_!!1970926915.jpg_400x400.jpg',productName: 'YSL/圣罗兰黑管漆光唇釉黑管唇釉',price:'260',sale:113,stock: 773},
      {id:4,productPic: 'https://gd3.alicdn.com/imgextra/i2/739171675/TB2ePpWedLO8KJjSZFxXXaGEVXa_!!739171675.jpg_400x400.jpg',productName: 'Tom Ford/汤姆福特黑金黑管哑光唇膏matte口红',price:'305',sale:120,stock: 234},
      {id:5,productPic: 'http://www.givenchybeauty.cn/files/2017/06/rougeinterdit.jpg',productName: '禁忌之吻霓固定',price:'233',sale:145,stock: 24},
      {id:6,productPic: 'http://www.givenchybeauty.cn/files/2017/06/rougeinterdit.jpg',productName: '禁忌之吻霓虹唇膏',price:'303',sale:220,stock: 17},
      {id:7,productPic: 'https://gd3.alicdn.com/imgextra/i2/739171675/TB2ePpWedLO8KJjSZFxXXaGEVXa_!!739171675.jpg_400x400.jpg',productName: '禁忌之吻霓虹唇膏',price:'303',sale:45,stock: 56},
    ];
    dispatch({type: 'RECEIVE_PRODUCT',payload:json});*/
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

/*
*选中/取消 购物车数据结算
* */
export const checkItem = (productId) => (dispatch,getState) => {
  let index = getState().cartList.chooseIds.indexOf(productId);
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

/*
* 全选/取消 购物车数据结算
* */
export const selectAll = (flag) => (dispatch, getState) => {
  if(flag) {
    let productIds = getState().cartList.addedIds;
    dispatch({
      type: 'CHECK_IN_ALL',
      productIds
    })
  }else {
    dispatch({
      type: 'CHECK_CANCEL_ALL'
    })
  }
};

/*
* 购物车结算功能
* */
export const checkOut = () => (dispatch,getState) => {
  let { chooseIds } = getState().cartList;
  if(chooseIds.length === 0) {
    return Tool.tip({
      message: '请先选中要购买的商品'
    })
  }
  dispatch({
    type: 'CHECK_OUT_CART',
    checkOutIds: chooseIds
  });
  dispatch({
    type: 'CHECK_CANCEL_ALL'
  })
};

