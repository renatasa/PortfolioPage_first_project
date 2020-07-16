import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CoffeeShop from './CoffeeShop/containers/CoffeeShop/CoffeeShop';
import MyOrders from './CoffeeShop/containers/MyOrders/MyOrders';
import TodaySpecial from './CoffeeShop/components/TodaySpecial/TodaySpecial';
import Home from './CoffeeShop/components/Home/Home';

function App() {
  
  return (
    <div>
       <Switch>
         
          <Route path="/coffeeShop/myOrders">
            <MyOrders />
          </Route>

          <Route path="/coffeeShop">
            <CoffeeShop/>
          </Route>

          <Route exact path="/coffeeShop/todaysSpecial">
            <TodaySpecial/>
          </Route>

          <Route exact path="/">
            <Home/>
          </Route>

        </Switch> 
        
    </div>
  );
}

export default App;
