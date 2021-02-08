import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import "./Home.scss";

const home = () => {
  return (
    <div className="homeButtons">
      <NavLink to="/coffeeShop/">
        <IconButton>
          <ShoppingCartIcon />
        </IconButton>
      </NavLink>
    </div>
  );
};

export default home;
