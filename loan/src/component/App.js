import React from 'react';
import { Route } from 'react-router-dom'
import Foot from './common/footer/foot';
import Home from './home/Home';
import Design from './diy/diy';
import Personal from './personal/Personal';
import ShopCart from './shopCart/ShopCart';

class App extends React.Component {
  render () {
    let { location } = this.props;
    return (
      <div className="product">
        <main className="product-main">
          <Route path='/' component={Home} exact />
          <Route path='/diy' component={Design}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/shopCart' component={ShopCart}/>
        </main>
        <footer className="product-foot">
          <Foot location={location}/>
        </footer>
      </div>
    )
  }
}
export default App;