const Tool = {};

/*
 * fetch请求接口封装
 * */
Tool.mFetch = function (params) {
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText);
      error.response = response;
      throw error
    }
  }
  function parseJSON(response) {
    return response.json();
  }
  let {url,type,headers,data,method} = params;
  let newData,newHeaders;
  if(data) {
    if(type == 'json') {
      newData = JSON.stringify(data);
      newHeaders = Object.assign({},headers,{'Content-Type': 'application/json;charset=UTF-8'})
    }else{
      newData = new URLSearchParams();
      Object.keys(data).forEach( key => {
        newData.append(key,data[key]);
      })

    }
  }
  return new Promise((resolve,reject) => {
    fetch(url,{
      method: method || 'POST',
      headers: newHeaders,
      body: newData
    }).then(checkStatus)
      .then(parseJSON)
      .then( res => {
        if(res.code !== 10000) {
          console.log('code 20000');
          return reject()
        }
        return resolve(res);
      })
  })
};
export default Tool;
