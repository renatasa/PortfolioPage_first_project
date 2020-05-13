import React from 'react';
import './App.module.css';

import {Route, Switch, Link, NavLink} from 'react-router-dom';
//import TodoList from './containers/TodoList/TodoList';
//import BounceBall from './containers/BounceBall/BounceBall';
//import Clock from './containers/Clock/Clock'
import CoffeeShop from './CoffeeShop/containers/CoffeeShop/CoffeeShop';
//import ShoppingItem from './components/ShoppingItem/ShoppingItem';
//import Test from './containers/Test/Test'
import MyOrders from './CoffeeShop/containers/MyOrders/MyOrders';
import classes from './App.module.css';
import IconButton from '@material-ui/core/IconButton';
import ListAlt from '@material-ui/icons/ListAlt';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Home from './CoffeeShop/components/Home/Home';

function App() {
  return (
    <div className="App">

            <CoffeeShop />
        
    </div>
  );
}

export default App;
