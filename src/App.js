import React from 'react';
//import './App.scss';

import {Route, Switch, Link, NavLink} from 'react-router-dom';
//import TodoList from './TodoList/TodoList';
//import BounceBall from './containers/BounceBall/BounceBall';
//import Clock from './containers/Clock/Clock'
import CoffeeShop from './CoffeeShop/containers/CoffeeShop/CoffeeShop';
//import ShoppingItem from './components/ShoppingItem/ShoppingItem';
//import Test from './containers/Test/Test'
import MyOrders from './CoffeeShop/containers/MyOrders/MyOrders';
import classes from './App.module.scss';
import IconButton from '@material-ui/core/IconButton';
import ListAlt from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from './CoffeeShop/components/Home/Home';
import Test from './CoffeeShop/components/test/test';

function App() {
  
  return (
    <div>

{/* <Switch>
          <Route path="/todo">
            <TodoList/>
          </Route>
          <Route path="/shoppingCart/myOrders">
            <MyOrders />
          </Route>
          <Route path="/shoppingCart">
            <ShoppingCart />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>

        </Switch> */}

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
