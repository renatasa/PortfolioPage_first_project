import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CoffeeShop from './CoffeeShop/containers/CoffeeShop/CoffeeShop';
import MyOrders from './CoffeeShop/containers/MyOrders/MyOrders';
import TodaySpecial from './CoffeeShop/components/TodaySpecial/TodaySpecial';
import AboutMe from './AboutMe/AboutMe.js';
import Covid from './Covid/Covid.js';

// https://shoppingcart-9ee7a.firebaseio.com/initialItems.json
// https://shoppingcart-9ee7a.firebaseio.com/orders.json
//https://shoppingcart-9ee7a.firebaseio.com/orders.json

function App() {
  
  return (
    <div class="App">
       <Switch>
          <Route path="/coffeeShop/myOrders">
            <MyOrders />
          </Route>

          <Route path="/coffeeShop">
            <CoffeeShop/>
          </Route>

          <Route path="/covid">
              <Covid/>
          </Route>

          <Route exact path="/coffeeShop/todaysSpecial">
            <TodaySpecial/>
          </Route>

          <Route exact path="/">
            <AboutMe/>
          </Route>

        </Switch> 
        
    </div>
  );
}

export default App;
