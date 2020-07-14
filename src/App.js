import React from 'react';
import {Route, Switch, Link, NavLink} from 'react-router-dom';
import CoffeeShop from './CoffeeShop/containers/CoffeeShop/CoffeeShop';
import MyOrders from './CoffeeShop/containers/MyOrders/MyOrders';

import Home from './CoffeeShop/components/Home/Home';
import Test from './Test/Test';

function App() {
  
  return (
    <div>
      <Test/>
       <Switch>
         
          <Route path="/coffeeShop/myOrders">
            <MyOrders />
          </Route>

          <Route path="/coffeeShop">
            <CoffeeShop/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch> 
        
    </div>
  );
}

export default App;
