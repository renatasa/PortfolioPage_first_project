import React from "react";
import { Route, Switch } from "react-router-dom";
import CoffeeShop from "./CoffeeShop/containers/CoffeeShop/CoffeeShop";
import MyOrders from "./CoffeeShop/containers/MyOrders/MyOrders";
import TodaySpecial from "./CoffeeShop/components/TodaySpecial/TodaySpecial";
import AboutMe from "./AboutMe/AboutMe.js";
import Covid from "./Covid/Covid.js";
import Auth from './AuthorisationTodos/Authorisation/containers/auth/Auth';
import Todos from './AuthorisationTodos/Todos/containers/Todo/todo';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/coffeeShop/myOrders">
          <MyOrders />
        </Route>

        <Route path="/coffeeShop">
          <CoffeeShop />
        </Route>

        <Route path="/stats">
          <Covid />
        </Route>

        <Route exact path="/coffeeShop/todaysSpecial">
          <TodaySpecial />
        </Route>

        <Route exact path="/todos">
            <Todos/>
          </Route>

          <Route exact path="/auth">
            <Auth/>
          </Route>

        <Route exact path="/">
          <AboutMe />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
