### 技术栈
```
前端: react + react-router + redux + ES6 + sass + antd 使用webpack打包
后端: express + mysql
```

### 使用项目
```
1.克隆项目：      git clone https://github.com/cheungzh/carLoan.git
2.安装nodejs
3.安装依赖:
  前端: cd /loan  npm install
  后端: cd /server  npm install
4.启动服务:
  前端: cd /loan npm run dev
  后端: cd /server npm run start
5.发布代码：  cd /loan  npm run build
```

### 代理设置
loan/build/webpack.dev.js
```
proxy: {
      '/api': {
        target: 'http://10.10.16.199:3000/',
        pathRewrite: {'^/api' : ''}
      },
    },
```
target 根据服务器地址自行更改


