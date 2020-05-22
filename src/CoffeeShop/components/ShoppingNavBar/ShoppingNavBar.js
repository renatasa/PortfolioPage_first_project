import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ViewList from '@material-ui/icons/ViewList';
import {Route, Switch, NavLink} from 'react-router-dom';
//import Button from '../Button/Button';
import classes from './ShoppingNavBar.module.css' ;
import MyOrders from '../../containers/MyOrders/MyOrders'
import { responsiveFontSizes } from '@material-ui/core';
import { sizing } from '@material-ui/system';

const shoppingNavBar =(props)=> {
        return (
    

        <div className={classes.navBar}>

        <Switch>
        <Route path="/shoppingCart/myOrders">
            <MyOrders />
          </Route>
        </Switch>

                
                <IconButton onClick={props.clicked} height="100px" >
                    <ShoppingCartIcon />
                </IconButton>
                <NavLink to="/shoppingCart/myOrders">
                    <IconButton height="100px" color="secondary" size="large">
                        <ViewList/>    
                    </IconButton>    
                </NavLink>
                
        </div>

        )
}

export default shoppingNavBar;
